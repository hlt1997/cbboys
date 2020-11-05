<template>
   <!--底部导航开始-->
    <div class="nav">
      <mt-tabbar v-model='tabbar' fixed>
        <mt-tab-item id="index">
          首页
          <img src="../../public/img/bottom-img/index_enabled.png" slot="icon" v-if="tabbar=='index'">
          <img src="../../public/img/bottom-img/index_disabled.png" slot="icon" v-else>
        </mt-tab-item>
        <mt-tab-item id="shop">
          购物车
          <img src="../../public/img/bottom-img/cart_enabled.png" slot="icon" v-if="tabbar=='shop'">
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
    <!--底部导航结束-->

</template>
<style scoped>

/* .mint-tabbar>.mint-tab-item.is-selected{
  background-color: #fff;
} */

</style>
<script>
export default {
  data(){
    return{
      // 选项卡变量\
      tabbar:'index'
  }},
  mounted(){
    console.log(this.$route.path)
    if(this.$route.path=='/index'){
      this.tabbar = 'index'
    }
    else if(this.$route.path=='/me'){
      this.tabbar = 'me'

    }
    else if(this.$route.path=='/message'){
      this.tabbar = 'message'

    }
    else if(this.$route.path=='/shop'){
      this.tabbar = 'shop'
    }
  },
   watch:{
    tabbar(value){
      // 跳转到主页
      console.log(this.tabbar)
      if(value=='index'){
        this.$router.push('/').catch(e=>{})
      }if(value=='me'){
      // 跳转到我的页面
        this.$router.push('/me').catch(e=>{})
      }if(value=='message'){
        // 跳转到消息页面
        this.$router.push('/message').catch(e=>{})
      }if(value=='shop'){
        // 跳转到购物车
        this.$router.push('/shop').catch(e=>{})
      }
    }
  } ,
  '$route': {
        deep: true,
        handler(to,from) {
            if(to.path != from.path){
                this.$router.push(to.path);
            }
        }
    }
}
 
</script>