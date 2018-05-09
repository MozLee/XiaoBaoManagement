import axios from "axios";
import qs from 'qs';//qs处理post参数 否者后台接受不到 data
let myApi = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 10000,
  headers:{'Content-Type':'application/x-www-form-urlencoded'},
  withCredentials: true
});

export function postAdmin(username, password) {
  return myApi.post("/admin", qs.stringify({
      username,
      password
  }));
}
export function getAllUsers(){
    return myApi.get('/allusers')
}
export function postWeatherSevice(bl,id){
  return myApi.post("/weatherservice", qs.stringify({
      bl,id
}));
}