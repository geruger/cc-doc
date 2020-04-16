# ETCD 集群部署文档
## 一、单机部署
- 安装epel源
``` txt
wget http://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
rpm -ivh epel-release-latest-7.noarch.rpm
```
- 安装etcd
```txt
yum install etcd
```
- 配置hosts
``` txt
vim /etc/hosts
    etcdXXX 192.168.20.78
```
- 配置etcd 文件位置
``` txt
    cd /etc/etcd
    vim etcd.conf
```
- 配置文件解释
```

    #[Member]
    #ETCD_CORS=""
    ETCD_DATA_DIR="/var/lib/etcd/default.etcd"          #etcd数据存放目录
    #ETCD_WAL_DIR=""
    #ETCD_LISTEN_PEER_URLS="http://localhost:2380"     #监听URL，用于与其他节点通讯
    ETCD_LISTEN_CLIENT_URLS="http://localhost:2379"    #客户端访问的地址和端口
    #ETCD_MAX_SNAPSHOTS="5"
    #ETCD_MAX_WALS="5"
    ETCD_NAME="default"                                #etcd 服务名称
    #ETCD_SNAPSHOT_COUNT="100000"
    #ETCD_HEARTBEAT_INTERVAL="100"
    #ETCD_ELECTION_TIMEOUT="1000"
    #ETCD_QUOTA_BACKEND_BYTES="0"
    #ETCD_MAX_REQUEST_BYTES="1572864"
    #ETCD_GRPC_KEEPALIVE_MIN_TIME="5s"
    #ETCD_GRPC_KEEPALIVE_INTERVAL="2h0m0s"
    #ETCD_GRPC_KEEPALIVE_TIMEOUT="20s"
    #
    #[Clustering]
    #ETCD_INITIAL_ADVERTISE_PEER_URLS="http://localhost:2380"   #该节点同伴监听地址，这个值会告诉集群中其他节点

    ETCD_ADVERTISE_CLIENT_URLS="http://localhost:2379"       # 对外公告的该节点客户端监听地址，这个值会告诉集群中其他节点
    #ETCD_DISCOVERY=""
    #ETCD_DISCOVERY_FALLBACK="proxy"
    #ETCD_DISCOVERY_PROXY=""
    #ETCD_DISCOVERY_SRV=""

    #ETCD_INITIAL_CLUSTER="default=http://localhost:2380"   #集群中所有节点的信息，格式为 node1=http://ip1:2380,node2=http://ip2:2380,… 。注意：这里的 node1 是节点的 --name 指定的名字；后面的 ip1:2380 是 --initial-advertise-peer-urls 指定的值

    #ETCD_INITIAL_CLUSTER_TOKEN="etcd-cluster"              #创建集群的 token，这个值每个集群保持唯一。这样的话，如果你要重新创建集群，即使配置和之前一样，也会再次生成新的集群和节点 uuid；否则会导致多个集群之间的冲突，造成未知的错误

    #ETCD_INITIAL_CLUSTER_STATE="new" #新建集群的时候，这个值为 new ；假如已经存在的集群，这个值为 existing

    #ETCD_STRICT_RECONFIG_CHECK="true"
    #ETCD_ENABLE_V2="true"

```
- 启动命令
```
 systemctl restart etcd
 systemctl status etcd  
```
- 查看etcd数据目录
```
tree /var/lib/etcd/default.etcd/
    /var/lib/etcd/default.etcd/
    └── member
        ├── snap
        │   └── db
        └── wal
            ├── 0000000000000000-0000000000000000.wal
            └── 0.tmp
```
## etcd集群搭建
- 安装epel源
```
wget http://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
rpm -ivh epel-release-latest-7.noarch.rpm
```
- 安装etcvid
```
yum install etcd
```
- 配置hosts文件
```
vim /etc/hosts
    node1 192.168.20.XX1
    node2 192.168.20.XX2
    node3 192.168.20.XX3
```
- 修改每台机器上的配置
- leader
```
ETCD_DATA_DIR="/var/lib/etcd/default.etcd"  #etcd数据保存目录
ETCD_LISTEN_CLIENT_URLS="http://10.25.72.164:2379,http://localhost:2379"  #供外部客户端使用的url
ETCD_ADVERTISE_CLIENT_URLS="http://10.25.72.164:2379,http://localhost:2379" #广播给外部客户端使用的url
ETCD_NAME="etcd1"   #etcd实例名称

ETCD_LISTEN_PEER_URLS="http://10.25.72.164:2380"  #集群内部通信使用的URL
ETCD_INITIAL_ADVERTISE_PEER_URLS="http://10.25.72.164:2380"  #广播给集群内其他成员访问的URL
ETCD_INITIAL_CLUSTER="etcd1=http://10.25.72.164:2380,etcd2=http://10.25.72.233:2380,etcd3=http://10.25.73.196:2380"    #初始集群成员列表
ETCD_INITIAL_CLUSTER_TOKEN="etcd-cluster" #集群的名称
ETCD_INITIAL_CLUSTER_STATE="new"  #初始集群状态，new为新建集群 
```
- followers
```
ETCD_DATA_DIR="/var/lib/etcd/default.etcd"  #etcd数据保存目录
ETCD_LISTEN_CLIENT_URLS="http://10.25.72.164:2379,http://localhost:2379"  #供外部客户端使用的url
ETCD_ADVERTISE_CLIENT_URLS="http://10.25.72.164:2379,http://localhost:2379" #广播给外部客户端使用的url
ETCD_NAME="etcd1"   #etcd实例名称

ETCD_LISTEN_PEER_URLS="http://10.25.72.164:2380"  #集群内部通信使用的URL
ETCD_INITIAL_ADVERTISE_PEER_URLS="http://10.25.72.164:2380"  #广播给集群内其他成员访问的URL
ETCD_INITIAL_CLUSTER="etcd1=http://10.25.72.164:2380,etcd2=http://10.25.72.233:2380,etcd3=http://10.25.73.196:2380"    #初始集群成员列表
ETCD_INITIAL_CLUSTER_TOKEN="etcd-cluster" #集群的名称
ETCD_INITIAL_CLUSTER_STATE="existing"  #初始集群状态
```
- 启动命令
```
systemlctl start etcd
```
- 需要修改profile文件支持etcd v3 api
```
vim /etc/profile
export ETCDCTL_API=3
source profile
```