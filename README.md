# 小宝管理系统前端（移动端）

## 关于小宝管理系统
小宝管理系统采用前后端分离，小宝管理系统后端提供相关API，小宝管理系统前端负责渲染数据。
## 技术栈
Vue全家桶 + axios
## 二话不说，先上图

![](http://mozlee.com/githubimg/xbmanage2.png)
![](http://mozlee.com/githubimg/xbmanage.jpg)

## 在线体验管理系统

为了加载速度，图片不是很清晰。
那么，我们可以直接访问体验地址，直接体验一下~
体验之前，可以线加小宝为好友，这样就会在管理系统中看到你的信息哦~
加好友的口令为 **moz** 区分大小写！！！

![二维码](http://mozlee.com/githubimg/xbewm.jpeg)

现在**请使劲[戳我](http://we.sy1x.com)体验,用户名:mozlee,密码:123**
> TIPS:为了体验效果,体验账户并未降权,各位手下留情,不要乱搞。mua~


## 有何功能？
要说功能，一切要从管理员成功登陆后说起。
嗯~是酱婶滴。

 - [x] 用户列表信息
 - [x] 用户详情信息,包含头像、个性签名、所在地址、性别、天气服务等等
 - [x] 修改用户ID/备注
 - [x] 修改用户是否推送天气服务
 - [x] 选择用户推送天气的地址
 - [x] 查看小宝当前好友容量
 - [x] 查看小宝好友列表中性别比例
 - [x] 管理员用户信息
 - [x] 修改管理员密码
 - [x] 设置天气推送的时间
 - [x] 查看小宝Robot运行的状态
 - [x] 从小宝Robot更新最新的数据，包含头像，昵称，个性签名，所在地区等等。
 - [ ] 查看自动回复消息内容
 - [ ] 设置自动回复消息匹配内容管理
 - [ ] 添加其他遍历服务等等

## 遇到问题&解决方案
**问题1**: axios发送POST请求，后端接收不到数据。

- [x] 查阅了很多资料，需要把Content-Type为application/x-www-form-urlencoded，
jquery在执行post请求时，会设置Content-Type为application/x-www-form-urlencoded，所以服务器能够正确解析，而使用原生ajax、axios请求时，如果不显示的设置Content-Type，那么默认是text/plain，这时服务器就不知道怎么解析数据了，所以才只能通过获取原始数据流的方式来进行解析请求数据。
而且数据必须是 URLSearchParams类型。据说URLSearchParams类型兼容性不好，我直接使用了qs格式化一下数据，后端就可以接收到数据了。
```
 //我使用qs模块格式化了一下传入的数据。这样后端就能接收到了。
 export function postChangeAdminPassword(adminName,oldPassword,newPassword){
  return myApi.post('/changeadminpwd',qs.stringify({
    adminName,oldPassword,newPassword
  }))
}
```

**问题2**:如何在vue-router访问vuex中的数据。

- [x] 由于要在路由中座登录判断,未登录状态要讲路由重定向到登录页，所以我需要用到vuex中记录登录状态的数据。思前想后怎么才能在vue-router中找到vuex？一拍脑瓜子，直接把 vuex import到vue-router中不就可以拿到数据了么。真是🐖脑子。
```
import store from '@/store'
```
**其他**问题我将会在[博客](http://blog.mozlee.com/2018/04/26/%E5%B0%8F%E5%AE%9D%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F%E7%88%AC%E5%9D%91%E8%AE%B0%E5%BD%95/)中进行总结

## 小宝系统
- [小宝管理系统--前端(移动端)](https://github.com/MozLee/XiaoBaoManagement) 技术栈 vue+vue-router+vuex+vux

- [小宝管理系统--后端](https://github.com/MozLee/XiaoBaoSystem) 技术栈 Nodejs+Express+MongoDB

- [小宝Robot](https://github.com/MozLee/XiaoBaoRobot) 技术栈 Nodejs + Wechaty