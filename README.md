# EasyPlus 微信小程序

#### 项目介绍
EasyPlus 微信小程序  https://github.com/goto9ccc/easyplus-weixin.git



#### 安装教程

1. 内网部署EasyPlus Web应用,(恢复数据库，修改web.config)
2. 购买公有云，域名，并安装frps，内网找一台机器安装frpc,进行映射。
(frp下载地址 https://github.com/fatedier/frp/releases)
3. 在mp.weixin.qq.com申请小程序并获得appid与app_secret,并写入web工程的web.config对应appsetting
4. 域名申请HTTPS证书，TLS2.0,并部署证书到IIS，申请地址https://cloud.tencent.com/product/ssl
5. 下载node.js进行安装。6.9以上版本(我使用的是6.14,https://nodejs.org/dist/v6.14.4/)，
下载微信WEB开发工具进行安装(https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)。
6. 运行npm install安装依赖,然后运行npm install wepy-cli -g  全局安装wepy-cli全局安装
7. 运行npm run dev开发版本
8. 运行npm run build 正式版本（更改src目录下的config.js域名配置）
9. 使用微信开发工具打开dist目录，输入appid，小程序名称点发布。 


#### 使用说明
使用ERP的用户名与密码登录，使用之前，在WEB端导入ERP用户进行授权。

###
QQ群：336529395  


