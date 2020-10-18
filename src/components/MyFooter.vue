<template>
  <!--底部导航开始-->
    <div class="nav">
      <mt-tabbar v-model='tabbar' fixed>
        <mt-tab-item id="index">
          首页
          <img src="../../public/img/bottom-img/index_enabled.png" slot="icon" v-if="tabbar=='index'">
          <img src="../../public/img/bottom-img/index_disabled.png" slot="icon" v-else>
        </mt-tab-item>
        <mt-tab-item id="shopcart">
          购物车
          <img src="../../public/img/bottom-img/cart_enabled.png" slot="icon" v-if="tabbar=='shopcart'">
          <img src="../../public/img/bottom-img/cart_disabled.png" slot="icon" v-else>
        </mt-tab-item>
        <mt-tab-item id="message">
          信息
          <img src="../../public/img/bottom-img/xiaoxi_enabled.png" slot="icon" v-if="tabbar=='message'">
          <img src="../../public/img/bottom-img/xiaoxi_disabled.png" slot="icon" v-else>
        </mt-tab-item>
        <mt-tab-item id="me">
          我的
          <img src="../../public/img/bottom-img/me_enabled.png" slot="icon" v-if="tabbar=='me'">
          <img src="../../public/img/bottom-img/me_disabled.png" slot="icon" v-else>
        </mt-tab-item>
      </mt-tabbar>
    </div>
</template>
<style scoped>
/*设置底部选项卡选中时的颜色 */
  a.is-selected{
    color: #d4237a !important;
  }
/* .mint-tabbar>.mint-tab-item.is-selected{
  background-color: #fff;
} */

</style>
<script>
export default {
  data(){
    return{
      // 选项卡变量
      tabbar:'index',
  }},
   watch:{
    tabbar(value){
      // 跳转到主页
      if(value=='index'){
        this.$router.push('/')
      }if(value=='me'){
      // 跳转到我的页面
        this.$router.push('/me')
      }if(value=='message'){
        // this.tabbar = 'message'
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