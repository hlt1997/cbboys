<template>
  <div class="message">
    <search></search>
    <div class="options">
      <p><img src="../../public/img/bottom-img/msg_cart.png" alt=""></p>交易物流
      <p><img src="../../public/img/bottom-img/msg_huo.png" alt=""></p>活动优惠
    </div>
    <my-footer></my-footer>
  </div>
</template>
<style scoped>
.options{
  width: 300px;
  margin: 10px auto;
  padding: 20px;
  background: #eee;
  border-radius: 10px;
}
  .options>p{
    background-color: red;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    text-align: center;
    /* display: inline-block; */
    
  }
  .options>p img{
    /* vertical-align: middle; */
    /* margin-top: 7px; */
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
      // tabbar:"message"
    }
  },
  watch:{
    
  }
}
</script>
