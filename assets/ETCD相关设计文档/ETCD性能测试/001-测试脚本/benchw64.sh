#!/bin/bash -e

leader=http://192.168.30.6:2379
# assume three servers
servers=( http://192.168.30.5:2379 http://192.168.30.3:2379 )

keyarray=( 64 )

for keysize in ${keyarray[@]}; do

  echo 写入, 1 个客户端, $keysize 大小,只写入主服务
  hey -m PUT -n 10 -d value=`head -c $keysize < /dev/zero | tr '\0' '\141'` -c 1 -T application/x-www-form-urlencoded $leader/v2/keys/foo | grep -e "Requests/sec" -e "Latency" -e "90%" | tr "\n" "\t" | xargs echo

  echo 写入, 64 个客户端, $keysize 大小,只写入主服务
  hey -m PUT -n 640 -d value=`head -c $keysize < /dev/zero | tr '\0' '\141'` -c 64 -T application/x-www-form-urlencoded $leader/v2/keys/foo | grep -e "Requests/sec" -e "Latency" -e "90%" | tr "\n" "\t" | xargs echo

  echo 写入, 256 个客户端, $keysize 大小,只写入主服务
  hey -m PUT -n 2560 -d value=`head -c $keysize < /dev/zero | tr '\0' '\141'` -c 256 -T application/x-www-form-urlencoded $leader/v2/keys/foo | grep -e "Requests/sec" -e "Latency" -e "90%" | tr "\n" "\t" | xargs echo

  echo 写入, 64 个客户端, $keysize 大小,写入全部服务
  for i in ${servers[@]}; do
    hey -m PUT -n 210 -d value=`head -c $keysize < /dev/zero | tr '\0' '\141'` -c 21 -T application/x-www-form-urlencoded $i/v2/keys/foo | grep -e "Requests/sec" -e "Latency" -e "90%" | tr "\n" "\t" | xargs echo &
  done
  # wait for all heys to start running
  sleep 3
  # wait for all heys to finish
  for pid in $(pgrep 'hey'); do
    while kill -0 "$pid" 2> /dev/null; do
      sleep 3
    done
  done

  echo 写入, 256 个客户度, $keysize 大小, 写入全部服务
  for i in ${servers[@]}; do
    hey -m PUT -n 850 -d value=`head -c $keysize < /dev/zero | tr '\0' '\141'` -c 85 -T application/x-www-form-urlencoded $i/v2/keys/foo | grep -e "Requests/sec" -e "Latency" -e "90%" | tr "\n" "\t" | xargs echo &
  done
  sleep 3
  for pid in $(pgrep 'hey'); do
    while kill -0 "$pid" 2> /dev/null; do
      sleep 3
    done
  done

  # echo 读取, 1 个客户端, $keysize 大小, 只读主服务
  # hey -n 100 -c 1 $leader/v2/keys/foo | grep -e "Requests/sec" -e "Latency" -e "90%" | tr "\n" "\t" | xargs echo

  # echo 读取, 64 个客户端, $keysize 大小, 只读主服务
  # hey -n 6400 -c 64 $leader/v2/keys/foo | grep -e "Requests/sec" -e "Latency" -e "90%" | tr "\n" "\t" | xargs echo

  # echo 读取, 256 个客户端, $keysize 大小, 只读主服务
  # hey -n 25600 -c 256 $leader/v2/keys/foo | grep -e "Requests/sec" -e "Latency" -e "90%" | tr "\n" "\t" | xargs echo

  # echo 读取, 64 个客户度, $keysize 大小, 读取全部服务
  # # bench servers one by one, so it doesn't overload this benchmark machine
  # # It doesn't impact correctness because read request doesn't involve peer interaction.
  # for i in ${servers[@]}; do
  #   hey -n 21000 -c 21 $i/v2/keys/foo | grep -e "Requests/sec" -e "Latency" -e "90%" | tr "\n" "\t" | xargs echo
  # done

  # echo 读取, 256 个客户端, $keysize 大小, 读取全部服务
  # for i in ${servers[@]}; do
  #   hey -n 85000 -c 85 $i/v2/keys/foo | grep -e "Requests/sec" -e "Latency" -e "90%" | tr "\n" "\t" | xargs echo
  # done

done
