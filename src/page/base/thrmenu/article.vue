<template>
  <div style="height: 100vh;background:#fff;">
    <br/>
    <div>
      <ul class="tabs">
        <li v-for=" item in list" :class="itemActive == item?'liTabs':''" @click="handleClick(item)">{{item}}</li>
      </ul>
    </div>

  </div>
</template>

<script>
  import { Tabs, TabPane ,Row,Col} from 'element-ui';
export default {
  name:"activeTab",
  components:{
    ELTabs: Tabs,
    ELTabPane: TabPane,
    ElRow: Row,
    ElCol: Col,
  },
  data () {
    return {
      itemActive:'',
      activeTab:'1',
      activeName:'1',
      list:['文章审批','通过文章','打回文章','撤回文章']
    }
  },
  methods:{
    handleClick(obj){
      this.itemActive = obj
    }
  },
}
</script>

<style scoped>
  .tabs{
    margin:0 20px 0;
    border-bottom: 1px solid #e4e7ed;
    height: 36px;
  }
  .tabs>li{
    float: left;
    font-size:14px ;
    line-height: 36px;
    height: 36px;
    padding:0 10px;
    border-left: 1px solid #e4e7ed;
    border-top: 1px solid #e4e7ed;
    border-bottom: 1px solid transparent;
    cursor: pointer;
    position: relative;
  }
  .tabs>li:hover{
    color: #409EFF;
  }
  .tabs>li:last-child{
    border-right: 1px solid #e4e7ed !important;
  }
  .liTabs{
    border-bottom: 1px solid transparent !important;
    border-bottom-color: #fff !important;
    color: #409EFF;
  }
</style>
