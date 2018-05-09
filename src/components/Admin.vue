<template>
  <div>
    <group title="ADMIN-USER">
      <cell :title="adminName"></cell>
    </group>
    <group title="小宝运行状态">
      <cell title="正常"></cell>
    </group>
     <group title="ADMIN-USER-Setting">
      <cell title="修改密码" :is-link="true" :arrow-direction="showInput?'up':'down'" @click.native="showInput=!showInput"></cell>
      <template v-if="showInput">
        <x-input placeholder="请输入旧密码" :required="true" v-model="oldPassWord" type='password'></x-input>
        <x-input placeholder="请输入新密码" :required="true" v-model="newPassWord" type='password'></x-input>
        <x-input placeholder="请确认新密码" :required="true" v-model="newPassWord2" type='password'></x-input>
        <x-button type="primary" style="width:90%" @click.native="checkVal">确认修改</x-button>                
      </template>
    </group>
    <x-button  @click.native="adminLogout" type="warn" style="width:90%;margin-top:20px">退出当前管理员账户</x-button>                
    
  </div>
</template>
<script>
  import{Group,Cell,XInput,XButton} from 'vux';
  import {postChangeAdminPassword,postAdminLogout} from '@/server'
  export default {
    components:{
      Group,Cell,XInput,XButton
    },
    data(){
      return {
        oldPassWord:'',
        newPassWord:'',
        newPassWord2:'',
        showInput:false
      }
    },
    computed:{
      adminName(){
        return this.$store.state.adminInfo.username;
      }
    }
    ,
    methods:{
      adminLogout(){
        postAdminLogout().then((result) => {
          // console.log(result);
          if(result.data.code===0){
            this.$store.commit('setLogin',{isLogin:false});
              this.$vux.alert.show({
              title:'恭喜您',
              content:'退出成功',
              onHide(){
                location.reload();                
              }              
          })
          }
        });
      },
      changePassword(adminName,oldPassWord,newPassWord){
            return postChangeAdminPassword(adminName,oldPassWord,newPassWord)        
      },
      checkVal(){
        if(this.oldPassWord===this.newPassWord){
          this.$vux.alert.show({
            title:'错误信息提示',
            content:'输入的旧密码与新密码不要相同'
          })
          return
        }
        if(this.newPassWord!==this.newPassWord2){
             this.$vux.alert.show({
            title:'错误信息提示',
            content:'新密码两次输入不一致'
          })
          return
        }
        if(this.newPassWord===this.newPassWord2&&this.oldPassWord!=''){
            console.log('可以发送修改密码请求');
            console.log(this.adminName);
            this.changePassword(this.adminName,this.oldPassWord,this.newPassWord)
            .then((res) => {
              if(res.data.code===0){
                this.showInput = false;
                this.oldPassWord='';
                this.newPassWord='';
                this.newPassWord2='';
                this.$vux.alert.show({
                  title:'恭喜您',
                  content:res.data.message
                })
              }else{
                 this.$vux.alert.show({
                  title:'很遗憾',
                  content:res.data.message
                })
              }
            })
        }
      }
    }
  }  
</script>
