<template>
   <div style="height:100%;background:#fbf9fe">
        <x-header title="详细资料"></x-header>
        <group>
            <cell>
                 <img slot="icon" width="60" style="display:block;margin-right:10px;border-radius:10px" :src="baseAvatarUrl+userInfo.alias+'.jpg'">
                 <ul class="name" slot="child">
                     <li class="first">{{userInfo.name.slice(0,10)}} <icon :class="genderClass" :name='genderIco' scale=".9"></icon></li>
                     <li>ID:{{infoId}}</li>
                     <li>哈哈</li>
                 </ul>
            </cell>
        </group>
        <group>
          <cell 
          title="设置新的ID和备注(升级ING)"
          :is-link='true'
          :disabled='true'
          ></cell>
         
        </group>
        <group>
          <x-switch title="天气推送服务" v-model="userInfo.weatherService" @on-change="handleWeather"></x-switch>
          <x-address 
          :placeholder="userInfo.nowcity"
          v-show="weatherSevice" 
          title="天气地址" 
          :list="addressData" 
          ></x-address>
        </group>

        <group>
           <cell
            title="地区"
            >
            <span>{{userInfo.province+' '+userInfo.city}}</span>
          </cell>
        </group>
        <group>
          <cell 
          title="个性签名"
          >
          <span slot="after-title" style="color:#999999">{{userInfo.signature}}</span>
          </cell>
        </group>
   </div>
</template>
<script>
import {
  Grid,
  GridItem,
  ViewBox,
  XHeader,
  Tabbar,
  TabbarItem,
  Group,
  Cell,
  XSwitch,
  XAddress,
  ChinaAddressV4Data
} from "vux";
import { fail } from "assert";
import{postWeatherSevice} from '@/server'
export default {
  data() {
    return {
      weatherSevice: true,
      addressData:ChinaAddressV4Data,
      nowcity:['北京'],
      baseAvatarUrl:`http://localhost:3000/avatar/`
    };
  },
  components: {
    Grid,
    GridItem,
    ViewBox,
    XHeader,
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    XSwitch,
    XAddress
  },
  created() {
    // console.log(this.$route);
  },
  computed:{
    infoId(){
      return this.$route.params.id;
    },
    usersData(){
      return this.$store.state.usersInfo;
    },
    userInfo(){
      let data = this.usersData;
      let id = this.infoId;
      //根据ID在store查找对应的数据
      let userinfo = data.find((item) => {
        return item.alias==id
      })
      return userinfo;
    },
    genderClass(){
      if(this.userInfo.sex==1){
        return 'male'
      }
      if(this.userInfo.sex==2){
        return 'female'
      }
    },
    genderIco(){
       if(this.userInfo.sex==1){
        return 'mars'
      }
      if(this.userInfo.sex==2){
        return 'venus'
      }
    }
  }
  ,
  methods:{
    handleWeather(e){
      this.$vux.loading.show()
      postWeatherSevice(e,this.userInfo.alias).then((result) => {
        console.log(result);
        this.$vux.alert.show({
          title:"信息提示",
          content:result.data
        })
        this.$vux.loading.hide()
        
      })
    }
  }
};
</script>
<style>
.name {
  list-style: none;
  font-size: 12px;
  position: absolute;
  left: 90px;
  color: #c0c0c0;
  overflow: hidden;
}
.name li {
  margin-top: 3px;
}
.name .first {
  color: #333;
  font-size: 16px;
}
.male {
  color: #4cb7ed;
}
.female {
  color: #f17f7f;
}
.fa-icon {
  vertical-align: top;
}
</style>
