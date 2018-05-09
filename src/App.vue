<template>
  <div id="app" style="height:100%">
    <router-view v-transition></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
body {
  font-family: "Microsoft YaHei";
  background-color: #fbf9fe;
  color: #333;
  width: 100%;
  height: 100%
}
html{
  width: 100%;
  height: 100%
}

</style>
