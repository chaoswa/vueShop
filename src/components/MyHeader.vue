<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper"></div>
  </div>
</template>

<script>
export default {
  name: 'MyHeader',//geiwwwwwwwwwwwwwwwwwwwwww
  props: {
    seller: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .header{
    color: #fff;
    background: #000;
    .content-wrapper{
      padding: 48px 24px 36px 48px;
      .avatar{
        display:inline-block;
      }
      .content{
        display:inline-block;
        margin-left: 32px;
        .title{
          margin: 4px 0 16px 0;
          .brand{
            display: inline-block;
            width: 60px;
            height: 36px;
          }
        }
      }
    }
  }
</style>
