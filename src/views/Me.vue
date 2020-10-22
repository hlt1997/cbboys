<template>
  <div>
    <!-- 登录界面 -->
      <!-- 顶部用户界面开始 -->
      <div id="header">
        <div class="shortcut" v-if="this.$store.state.isLogined == 0"> 
          <router-link to="/login">
          <img src="../../public/img/me/me.png" >
          <span class="left-margin">登录体验更多精彩</span>
          </router-link>
        </div>
        <div class="shortcut" v-else> 
          <router-link to="/">
          <img src="../../public/img/me/me.png" >
          <span class="left-margin">{{this.$store.state.username}}</span>
          </router-link>
        </div>
     </div> 
     <!-- 顶部用户界面结束 -->

     <!-- 收付查询开始 -->
     <div class="Cash_module">
       <ul>
        <li>
         <img src="../../public/img/me/waiting.png" alt="">
         <p>待付款</p>
        </li>
        <li>
         <img src="../../public/img/me/already.png" alt="">
         <p>已付款</p>
        </li>
        <li>
         <img src="../../public/img/me/Uo.png" alt="">
         <p>待收货</p>
        </li>
        <li>
         <img src="../../public/img/me/received.png" alt="">
         <p>已收货</p>
        </li>
        <li>
         <img src="../../public/img/me/comment.png" alt="">
         <p>待评价</p>
        </li>
       </ul>
      </div>
    <!-- 收付查询结束 -->

    <!-- 表单区域开始 -->
    <div class="Sheet">
        <ul>
          <li><img src="../../public/img/me/indent.png" alt="" > 全部订单</li>
          <li><img src="../../public/img/me/integral.png" alt="" class="img_integral">积分详情</li>
          <li><img src="../../public/img/me/activity.png" alt="">最新活动</li>
          <li><img src="../../public/img/me/site.png" alt="">地址管理</li>
          <li><img src="../../public/img/me/service.png" alt="">客服热线</li>
          <button @click="logout"><li><img src="../../public/img/me/logoff.png" alt="">退出登录</li></button>
        </ul>
    </div>
    <!-- 表单区域结束 -->

    <!--底部导航开始-->
    <div>
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
    <!--底部导航结束-->
  </div>
</template>
<style scoped>
 /* 个人信息背景 */
  #header{
    height: 150px;
    background: url(../../public/img/me/bg.png) no-repeat;
    background-size: cover;
    position:relative;
  }
  /* 个人信息文字*/
  .shortcut{
    position:absolute;
    top:50px;
    left: 5%;
    font:bold 25px Microsoft yahei;
  }
  /* a标记去除下划线 */
  a{
    text-decoration: none;
    color:#000;
    height: 40px;
  }
  /* 个人信息部分文字与头像距离 */
  .left-margin{
    margin-left: 15px;
  }
  /* 收付查询栏样式 */
  .Cash_module ul{
    display: flex;
    justify-content:space-around;
    flex-direction:row-reverse;
    align-items: center;
    margin-top: 10px;
    background: #fff;
    height:70px ;
  }

  /* 收付查询下img样式 */
  .Cash_module img{
    width: 30px;
    height: 32px;
  }
  /* 收付查询img图片下文字样式 */
  .Cash_module p{
    margin-top: 6px;
    font:600 10px "Microsoft yahei";
    color: #A8794A;
  }
  /* 图片左外边距（使字体中线和图片中线尽量对齐） */
  .Cash_module img:first-child{
    margin-left: 3.5px;
  }
  /* 下方表单样式 */
  .Sheet{
    display: flex;
    flex-direction:column;
    justify-content:space-around;
    align-items: left;
    margin-top: 10px;
  } 
  /* 表单下每个li的样式 */
  .Sheet li,ul button{
    border: none;
    text-align: left;
    height: 50px;
    background: #fff;
    width: 100%;
  }
  .Sheet img,button img{
    margin-top: 6px;
  }
  /* 全部订单下的外边距 */
  .Sheet ul :first-child{
    margin-bottom:10px;
  }
  .Sheet li{
    margin-bottom:4px;
    font:550 17px "Microsoft yahei";
  }
  /* 表单文字前图片大小 */
  .img_integral{
    width: 34px;
    margin:2px;
    margin-right: 13px;
    margin-left: 7px;
  }
  li img{
    margin-left: 5px;
    width: 38px;
    margin-right: 12px;
  }
  button img{
    width: 35px;
    margin-left: 0px;
    margin-right: 15px;
  }


</style>
<script>

export default {
  mounted(){
  document.querySelector('body').setAttribute('style', 'background-color:#F5F5F5')
  },
  data(){
    return{
      tabbar:'me',
      value:'',
      timer:'',
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
  },
  methods:{
    logout(){
      this.$store.commit('logout');
    }
  },
}
</script>
