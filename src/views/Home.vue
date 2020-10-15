<template>
  <div class="home">
    <!--顶部搜索框-->
    <div class="search">
      <input type="text" v-model="value" placeholder="请输入要搜索的商品">
      <button>搜索</button>
    </div>
    <!--搜索框结束-->
    <!--轮播图开始-->
    <div class="swipe">
      <mt-swipe
        :showIndicators="true"
        :auto="3000"
        :speed="1000">
        <mt-swipe-item><img src="../../public/img/carousel/banner1.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../public/img/carousel/banner2.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../public/img/carousel/banner3.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../public/img/carousel/banner4.jpg" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>
    
    <!--轮播图结束-->

<<<<<<< HEAD
    <!--底部导航开始-->
    <div>
      <mt-tabbar v-model='tabbar' fixed>
        <mt-tab-item id="index">
          首页
          <img src="../../public/img/index_enabled.png" slot="icon" v-if="tabbar=='index'">
          <img src="../../public/img/index_disabled.png" slot="icon" v-else>
        </mt-tab-item>
        <mt-tab-item id="shopcart">
          购物车
          <img src="../../public/img/cart_enabled.png" slot="icon" v-if="tabbar=='shopcart'">
          <img src="../../public/img/cart_disabled.png" slot="icon" v-else>
        </mt-tab-item>
        <mt-tab-item id="message">
          信息
          <img src="../../public/img/xiaoxi_enabled.png" slot="icon" v-if="tabbar=='message'">
          <img src="../../public/img/xiaoxi_disabled.png" slot="icon" v-else>
        </mt-tab-item>
        <mt-tab-item id="me">
          我的
          <img src="../../public/img/me_enabled.png" slot="icon" v-if="tabbar=='me'">
          <img src="../../public/img/me_disabled.png" slot="icon" v-else>
        </mt-tab-item>
      </mt-tabbar>
    </div>
=======
    <mt-tabbar v-model='tabbar' fixed>
      <mt-tab-item id="index">
        首页
        <img src="../../public/img/index_enabled.png" slot="icon" v-if="tabbar!='index'">
        <img src="../../public/img/index_disabled.png" slot="icon" v-else>
      </mt-tab-item>
      <mt-tab-item id="shopcart">
        购物车
        <img src="../../public/img/cart_enabled.png" slot="icon" v-if="tabbar!='shopcart'">
        <img src="../../public/img/cart_disabled.png" slot="icon" v-else>
      </mt-tab-item>
      <mt-tab-item id="message">
        信息
        <img src="../../public/img/xiaoxi_enabled.png" slot="icon" v-if="tabbar!='message'">
        <img src="../../public/img/xiaoxi_disabled.png" slot="icon" v-else>
      </mt-tab-item>
      <mt-tab-item id="me">
        我的
        <img src="../../public/img/me_enabled.png" slot="icon" v-if="tabbar!='me'">
        <img src="../../public/img/me_disabled.png" slot="icon" v-else>
      </mt-tab-item>
    </mt-tabbar>

   

>>>>>>> e50a1a768bec0b7f42f5a7658826e7c7f5b1b587
  </div>
</template>
<style scoped>
  .search input{
    border: 1px solid red;
    border-radius: 3px 0 0 3px;
    height: 30px;
  }
  .search button{
    height: 34px;
    border-radius: 0 3px 3px 0;
    vertical-align: top;
    outline: none;
    color: #fff;
    background: red;
    border: none;
  }
  .swipe{
    margin-top: 20px;
    height: 150px;
  }
  .swipe img{
    width: 100%;
  }
</style>
<script>
export default {
  data(){
    return{
      tabbar:'index',
      value:''
    }
  },
  watch:{
    tabbar(value){
      // 跳转到主页
      if(value=='index'){
        this.$router.push('/')
      }if(value=='me'){
      // 跳转到我的页面
        this.$router.push('/me')
      }if(value=='message'){
        // 跳转到消息页面
        this.$router.push('/message')
      }if(value=='shopcart'){
        // 跳转到购物车
        this.$router.push('/shopcart')
      }
    }
  }
}
</script>
