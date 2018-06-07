<template>
  <div id="app">
    <MyHeader :seller="seller"></MyHeader>
    <div class="tab">
      <div class="tab-itme">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-itme">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-itme">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import MyHeader from "./components/MyHeader";
  const dataInfo=require('./data.json');
  export default {
    data(){
      return {
        seller:[]
      };
    },
    created(){
      this.seller=dataInfo.seller;
    },
    components:{
      MyHeader
    }
  }
</script>


<style lang="less">
  *{margin:0;
    padding:0;
  }
  html,body{
    height: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
    .tab{
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 80px;
      line-height: 80px;
      .tab-itme{
        flex: 1;
        text-align: center;
        .router-link-active{
          color: rgb(240,20,20);
        }
        a {
          display: block;
          font-size: 28px;
          color: rgb(77,85,93);
          text-decoration: none;
        }
      }
    }
  }
</style>

