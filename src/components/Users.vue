<template>
  <div style="background:#fbf9fe">
    <group>
      <cell title="群聊">
         <img slot="icon" width="40" style="display:block;margin-right:10px;" :src="baseAvatarUrl+'null.jpg'">
      </cell>
    </group>
    <group title="All Users">
      <cell :title="item.name.slice(0,10)" 
            :value="item.alias" 
            v-for="item in usersInfo" 
            :key="item.id"
            @click.native="onClick(item.alias)"
      >
        <img slot="icon" width="40" style="display:block;margin-right:10px;" :src="baseAvatarUrl+item.alias+'.jpg'">
      </cell>
    </group>
  </div>
</template>
<script>
import { Group,Cell } from "vux";
import {getAllUsers} from '@/server';
export default {
  data(){
    return{
      baseAvatarUrl:`http://localhost:3000/avatar/`,
    }
  },
  methods:{
    //跳转到详细信息
    onClick(id){
      console.log(id);
      this.$router.push({path:'/userinfo/'+id})
    }
  },
  computed:{
      usersInfo(){
        let data = this.$store.state.usersInfo;
        console.log(data);
        // data.sort((a,b) => {
        //   return a.name>b.name
        // })
        return data;
      }    
  }
  ,
  components:{
    Group,
    Cell
  },
  created(){
    //判断是否已经请求过数据
    console.log(this.$store.state.getUsersInfoDone);
    if(this.$store.state.getUsersInfoDone) return;
    this.$vux.loading.show({
      text:'数据加载中'
    })
    getAllUsers().then(({data}) => {
      //
      if(!data.success){
        this.$store.commit('setLogin',{
          isLogin:false
        })
        this.$vux.alert.show({
              title: '错误信息提示',
              content: `登录信息过期，请重新登录`,
              onHide (vue) {
                //刷新从新登录
                location.reload()
              }
            })
        return;
      }
      let resultdata = data.data.sort((a,b) => {
          return a.name>b.name
      });
      // console.log(this.usersInfo);
      this.$store.commit('setUsersInfo',resultdata);
      this.$store.commit('setGetUsersInfoDone',{done:true});      
      this.$vux.loading.hide()      
      // console.log(this.usersInfo);
    })
  }
}
</script>