<template>
  <div class="message">
    <!--引入的顶部搜索框-->
    <div class="msg-search">
      <span>消息</span>
      <div>
        <input type="text" placeholder="搜索">
        <img src="../../public/img/bottom-img/search.png" alt="">
      </div>
      <img src="../../public/img/bottom-img/11.png" alt="">
      <img src="../../public/img/bottom-img/add.png" alt="">
    </div>
    
    <!--交易  活动栏-->
    <div class="options">
      <p><img src="../../public/img/bottom-img/msg_cart.png" alt=""></p>
      <span>交易物流</span>
      <p><img src="../../public/img/bottom-img/msg_huo.png" alt=""></p>
      <span>活动优惠</span>
    </div>
    <!--聊天信息列表-->
    <div class="chat">
      <div>
        <div><img src="../../public/img/bottom-img/sm_logo1.png" alt=""></div>
        <div class="chat_msg">
          <p>南极人【nanjiren】旗舰店</p>
          <p>亲，看到您的订单已经签收啦 收到以后有...</p>
        </div>
      </div>
      <div>
        <div><img src="../../public/img/bottom-img/sm_logo2.png" alt=""></div>
        <div class="chat_msg">
          <p>北极绒旗舰店</p>
          <p>亲，看到您的订单已经签收啦 收到以后有...</p>
        </div>
      </div>
      <div>
        <div><img src="../../public/img/bottom-img/sm_logo3.png" alt=""></div>
        <div class="chat_msg">
          <p>博洋家纺</p>
          <p>亲，看到您的订单已经签收啦 收到以后有...</p>
        </div>
      </div>
      <div>
        <div><img src="../../public/img/bottom-img/sm_logo4.png" alt=""></div>
        <div class="chat_msg">
          <p>历寒家纺</p>
          <p>亲，看到您的订单已经签收啦 收到以后有...</p>
        </div>
      </div>
      <div>
        <div><img src="../../public/img/bottom-img/sm_logo5.png" alt=""></div>
        <div class="chat_msg">
          <p>历寒家纺</p>
          <p>亲，看到您的订单已经签收啦 收到以后有...</p>
        </div>
      </div>
      <div>
        <div><img src="../../public/img/bottom-img/sm_logo6.png" alt=""></div>
        <div class="chat_msg">
          <p>历寒家纺</p>
          <p>亲，看到您的订单已经签收啦 收到以后有...</p>
        </div>
      </div>
      <div>
        <div><img src="../../public/img/bottom-img/sm_logo7.png" alt=""></div>
        <div class="chat_msg">
          <p>历寒家纺</p>
          <p>亲，看到您的订单已经签收啦 收到以后有...</p>
        </div>
      </div>
    </div>
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
    <!--底部导航结束-->
  </div>
</template>
<style scoped>
/*顶部导航栏容器 */
.msg-search{
  background-color: #fff;
  padding-bottom: 5px;
  z-index: 2;
  position: fixed;
  left: 0;
  right: 0px;
  top: 0px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
} 
.msg-search span{
  font-weight: bold;
}
.msg-search>img:last-child{
  width: 24px;
  height: 24px;
}
/*搜索框和放大镜容器 */
.msg-search>div{
  position: relative;
}
/*放大镜 */
.msg-search>div img{
  position: absolute;
  top: 3px;
  right:5px ;
  width: 18px;
  height: 18px;
}
/*顶部搜索栏 */
.msg-search input{
  padding: 5px;
  font-size: 14px;
  border-radius: 10px;
  background-color: #e9e9e9;
  border: 0;
}
/*交易  活动栏容器 */
.options{
  background-color: #fff;
  width: 300px;
  margin:70px auto 20px auto;
  padding: 20px;
  box-shadow: 0px 0px 2px 2px #eee;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 16px;
  font-size: "Microsoft YaHei";
}
/*交易  活动栏下的图片 */
  .options>p{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .options>p:first-child{
    background-color: #33B7F5;
  }
  .options>p:nth-child(3){
    background-color: #F9C810;
  }


/*每个聊天信息列表容器 */
  .chat{
    margin-bottom: 60px;
  }
  .chat>div{
    display: flex;
    padding-left: 10px;
    border-top: 1px solid #eee;
    padding-top: 10px;
    padding: 10px;
  }
/*每个聊天信息列表容器下的大图标 */
  .chat>div>div:first-child img{
    text-align: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 10px;
  }
/*每个聊天信息列表容器下的品牌 */
  .chat_msg>p:first-child{
    font-size: 18px;
    margin-top: 5px;
  }
  
/*每个聊天信息列表容器下的聊天信息栏 */
  .chat_msg>p:last-child{
    margin-top: 8px;
    font-size: 14px;
    color: #999;
  }
    /*设置底部选项卡选中时的颜色 */
  a.is-selected{
    color: #d4237a !important;
  }

</style>
<script>
import MyFooter from "../components/MyFooter";

import Search from "../components/Search";
export default {
  components:{
    MyFooter,Search
  },
  data(){
    return{
       tabbar:"message",
    }
  },
  watch:{
    tabbar(value){
      // 跳转到主页
      if(value=='index'){
        this.$router.push('/').catch(e=>{})
      }if(value=='me'){
      // 跳转到我的页面
        this.$router.push('/me').catch(e=>{})
      }if(value=='message'){
        // 跳转到消息页面
        this.$router.push('/message').catch(e=>{})
      }if(value=='shopcart'){
        // 跳转到购物车
        this.$router.push('/shopcart').catch(e=>{})
      }
    }
  },
}
</script>
