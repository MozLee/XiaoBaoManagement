<template>
  <div style="height:100%;">
  <view-box ref="viewBox">
    <x-header :title="xHeaderTitle" :left-options='{showBack:false}' slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;"></x-header>
    <router-view></router-view>
      <tabbar slot="bottom" class="menu">
      <tabbar-item :link="{name:'Users'}" :selected='true' @on-item-click='xHeaderTitle="用户"' >
        <icon slot="icon" name='users' scale="1.5"></icon> 
        <span slot="label">Users</span>
      </tabbar-item>
      <tabbar-item :link="{name:'Tools'}"  @on-item-click='xHeaderTitle="工具"'>
        <icon slot="icon" name='cogs' scale="1.5"></icon> 
        <span slot="label">Tools</span>
      </tabbar-item>
      <tabbar-item :link="{name:'Admin'}"  @on-item-click='xHeaderTitle="管理员"'>
        <icon slot="icon" name='user'></icon> 
        <span slot="label">Admin</span>
      </tabbar-item>
    </tabbar>
  </view-box>
</div>
</template>
<script>
import { Grid, GridItem, ViewBox, XHeader, Tabbar, TabbarItem } from "vux";
import { fail } from "assert";
export default {
  data() {
    return {
      showBorder: false,
      xHeaderTitle:'用户',

    };
  },
  components: {
    Grid,
    GridItem,
    ViewBox,
    XHeader,
    Tabbar,
    TabbarItem
  }
};
</script>
<style>
    .weui-tab__panel{
        padding-top: 50px;
    }
    .fa-icon{
        padding-top: 6px;
    }
    
</style>
