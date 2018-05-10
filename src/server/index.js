import axios from "axios";
import qs from 'qs';//qs处理post参数 否者后台接受不到 data
let myApi = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 10000,
  headers:{'Content-Type':'application/x-www-form-urlencoded'},
  withCredentials: true
});
//admin登录
export function postAdmin(username, password) {
  return myApi.post("/admin", qs.stringify({
      username,
      password
  }));
}
//admin登出
export function postAdminLogout(){
  return myApi.post('/adminlogout')
}
//admin修改密码
export function postChangeAdminPassword(adminName,oldPassword,newPassword){
  return myApi.post('/changeadminpwd',qs.stringify({
    adminName,oldPassword,newPassword
  }))
}
//admin session登录
export function postSesionLogin() {
  return myApi.post('/sessionlogin')
}
//获取用户列表
export function getAllUsers(){
    return myApi.get('/allusers')
}
//用户天气开关
export function postWeatherSevice(bl,id){
  return myApi.post("/weatherservice", qs.stringify({
      bl,id
}));
}
//更新数据到数据库
export function getUpdate(){
  return myApi.get('/updateall');
}
