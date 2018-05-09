<template>
  <div> 
    <group title="当前好友容量">
     <cell title="当前好友人数">8</cell>
    </group>
    <ve-gauge :data="chartData2" :settings="chartSettings2"></ve-gauge>    
    <group title="性别比例">
     <cell title="性别">男:4 女:2 其他:0</cell>
    </group>
    <ve-pie :data="chartData" :settings="chartSettings"  :colors="['#5ab1ef', '#fa6e86','#19d4ae']"></ve-pie>
  </div>
</template>

<script>
  import{Group,Cell} from 'vux';
   export default  {
    components:{
      Group,Cell
    },
    created: function () {
      this.chartData = {
        columns: ['人数', '性别'],
        rows: [
          { '性别': '男', '人数': 5 },
          { '性别': '女', '人数': 1 },
          { '性别': '其他', '人数': 0 }
        ]
      }
      this.chartSettings = {
        dimension: '性别',
        metrics: '人数'
      }
      this.chartData2 = {
        columns: ['type', 'value'],
        rows: [
          { type: '占比', value: 0.1 }
        ]
      }
      this.chartSettings2 = {
        dataType: {
          '占比': 'percent'
        },
        seriesMap: {
          '占比': {
            min: 0,
            max: 1
          }
        }
      }
    
    }
  }
</script>