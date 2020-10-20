<template>
  <div class="message">
    <!--引入的顶部搜索框-->
    <search></search>
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
    <!--引入的底部导航栏-->
    <my-footer></my-footer>
  </div>
</template>
<style scoped>
/*交易  活动栏容器 */
.options{
  width: 300px;
  margin: 20px auto;
  padding: 20px;
  /* background: #eee; */
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
      //  tabbar:"message",
    }
  },
  
}
</script>
