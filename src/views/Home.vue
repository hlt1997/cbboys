<template>
  <div class="home">

    <mt-tabbar v-model='tabbar' fixed>
      <mt-tab-item id="index">
        首页
        <img src="../../public/img/bottom-img/index_enabled.png" slot="icon" v-if="tabbar!='index'">
        <img src="../../public/img/bottom-img/index_disabled.png" slot="icon" v-else>
      </mt-tab-item>
      <mt-tab-item id="shopcart">
        购物车
        <img src="../../public/img/bottom-img/cart_enabled.png" slot="icon" v-if="tabbar!='shopcart'">
        <img src="../../public/img/bottom-img/cart_disabled.png" slot="icon" v-else>
      </mt-tab-item>
      <mt-tab-item id="message">
        信息
        <img src="../../public/img/bottom-img/xiaoxi_enabled.png" slot="icon" v-if="tabbar!='message'">
        <img src="../../public/img/bottom-img/xiaoxi_disabled.png" slot="icon" v-else>
      </mt-tab-item>
      <mt-tab-item id="me">
        我的
        <img src="../../public/img/bottom-img/me_enabled.png" slot="icon" v-if="tabbar!='me'">
        <img src="../../public/img/bottom-img/me_disabled.png" slot="icon" v-else>
      </mt-tab-item>
    </mt-tabbar>

   

  </div>
</template>

<script>


export default {
  data(){
    return{
      //active:"1",
      tabbar:'index'
    }
  },
  watch:{
    tabbar(value){
      if(value=='index'){
        this.$router.push('/')
      }if(value=='me'){
        this.$router.push('/me')
      }if(value=='message'){
        this.$router.push('/message')
      }if(value=='shopcart'){
        this.$router.push('/shopcart')
      }
    }
  }
}
</script>
