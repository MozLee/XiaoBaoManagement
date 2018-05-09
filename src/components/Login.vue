<template>
  <div>  
    <XHeader title="小宝管理系统" :left-options='{showBack:false}'></XHeader>
    <div class="logo">
      <img src="@/assets/logo.png"/>
      <h2>欢迎登录小宝管理系统</h2>
    </div>
    <group>      
      <x-input required=required placeholder="请输入用户名" v-model="username">
        <icon name="user" slot="label" style="padding-right:10px;color:#a9a9a9"></icon>
      </x-input>
      <x-input type='password' required=required placeholder="请输入密码" v-model="password"> 
        <icon name="lock" slot="label" style="padding-right:10px;color:#a9a9a9"></icon>        
      </x-input>      
    </group>
    <x-button type="primary" text="登录" style="margin-top:20px" @click.native="doLogin"></x-button>
  </div>
</template>

<script>
import { XHeader, XInput, Group, XButton, Loading, Alert, ViewBox } from "vux";
import {postAdmin,postSesionLogin} from '@/server'
export default {
  data() {
    return {
      required:true,//是否必须填写表单
      username:'',
      password:'',
    };
  },
  components: {
    XHeader,
    XInput,
    Group,
    XButton,
    Loading,
    Alert,
    ViewBox
  },
  methods: {
    doLogin(){
      this.$vux.loading.show({
        text:`请稍等`
      })
      postAdmin(this.username,this.password).then((result) => {
        if(result.status===200){
          this.$vux.loading.hide();
          if(result.data.code===0){
            this.$store.commit('setLogin',{
              isLogin:true
            })
            this.$store.commit('setAdminInfo',result.data.userInfo)
            this.$router.push({
              name:'Manange'
            })
          }else{
            this.$vux.alert.show({
              title: '错误信息提示',
              content: `${result.data.message}`,
              // onShow () {
              //   console.log('Plugin: I\'m showing')
              // },
              // onHide () {
              //   console.log('Plugin: I\'m hiding')
              // }
            })
            console.log(result);
          }
        }
      }).catch((e) => {
        this.$vux.loading.show({
        text:`登录超时，请检查网络连接`
      })
      })
    }
  },
  created(){
    postSesionLogin().then((result) => {
      console.log(result);
      if(result.data.code===0){
        this.$store.commit('setLogin',{
          isLogin:true
        });
        this.$store.commit('setAdminInfo',{username:result.data.username});
        this.$router.push({
          name:'Manange'
        })
      }
    }).catch((e) => {
       return
    })
  }
};
</script>
<style>
  .logo{
    margin-top: 40px;
    text-align: center;
  }
  .logo img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-shadow: 0 0 5px #f4a460;
  }
  .logo h2{
    margin-top: 20px;
    color: #333
  }

</style>

