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
      <div v-for="(msg,index) of msgs" :key="index">
        <div><img :src="msg.img" alt=""></div>
        <div class="chat_msg">
          <p>{{msg.shop_name}}</p>
          <p>{{msg.msg}}</p>
        </div>
      </div>
    </div>
    <!--底部导航开始-->
    
   <my-footer></my-footer>

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
  .chat_msg {
    width: 80%;
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
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
       msgs:[]
    }
  },
  mounted(){
    this.axios.get('/message').then(res=>{
      console.log(res.data)
      this.msgs = res.data.results
    })
  },
}
</script>
