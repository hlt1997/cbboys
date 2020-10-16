<template>
  <div class="home">
    <!--顶部搜索框-->
    <div class="search">
      <p>历寒优品</p>
      <input type="text" v-model="value" placeholder="请输入要搜索的商品">
      <button>搜索</button>
      <img src="../../public/img/bottom-img/11.png" alt="">
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
    <!--中部品牌栏开始-->
    <div class="brand">
      <img src="../../public/img/bottom-img/nanjiren.jpg" alt="">
      <img src="../../public/img/bottom-img/boyang.jpg" alt="">
      <img src="../../public/img/bottom-img/beiji.jpg" alt="">
      <img src="../../public/img/bottom-img/shuixing.jpg" alt="">
    </div>
    <!--中部品牌栏结束-->
    <!--双十一活动栏开始-->
    <div class="activity">
      <p>双十一活动开始倒计时:{{timer}}欢迎抢购！</p>
    </div>
    <!--双十一活动栏结束-->
    <!--商品展示区开始-->
    <div class="commodity">
      <div>
        <img src="../../public/img/index/index_01.jpg" alt="">
        <p>商品描述</p>
      </div>
      <div>
        <img src="../../public/img/index/index_02.jpg" alt="">
        <p>商品描述</p>
      </div>
      <div>
        <img src="../../public/img/index/index_03.jpg" alt="">
        <p>商品描述</p>
      </div>
      <div>
        <img src="../../public/img/index/index_04.jpg" alt="">
        <p>商品描述</p>
      </div>
      <div>
        <img src="../../public/img/index/index_05.jpg" alt="">
        <p>商品描述</p>
      </div>
      <div>
        <img src="../../public/img/index/index_06.jpg" alt="">
        <p>商品描述</p>
      </div>
      <div>
        <img src="../../public/img/index/index_07.jpg" alt="">
        <p>商品描述</p>
      </div>
      <div>
        <img src="../../public/img/index/index_08.jpg" alt="">
        <p>商品描述</p>
      </div>
    </div>
    <!--商品展示区结束-->

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
  </div>
  <!--底部导航结束-->



</template>
<style scoped>
  .search img{
    width: 35px;
    float: right;
    margin-right: 10px;
  }
  .search p{
    float: left;
    background: red;
    padding: 5px 5px 0 5px;
    color: #fff;
    width: 40px;
    margin-left: 10px;
    border-radius: 10px;
    font-size: 16px;
    font-family: "华文行楷";
  }
  .search{
    margin-top: 10px;
    text-align: center;
  }
  .search input{
    border: 1px solid red;
    border-radius: 15px 0 0 15px;
    height: 30px;
    font-size: 14px;
  }
  .search button{
    height: 34px;
    border-radius: 0 15px 15px 0;
    vertical-align: top;
    outline: none;
    color: #fff;
    background: red;
    border: none;
    font-size: 14px;
    padding: 0 8px;
  }
  .swipe{
    margin-top: 20px;
    height: 150px;
  }
  .swipe img{
    width: 100%;
  }
  .brand{
    text-align: center;
  }
  .brand img{
    width: 160px;
    margin-top:10px;
  }
  .brand img:nth-child(odd){
    margin-right: 10px;
  }
  .activity{
    margin-top: 10px;
    text-align: center;
  }
  .activity p{
    background: red;
    color: #fff;
    font-size: 20px;
    /* font-family: "华文行楷"; */
    padding: 5px ;
  }
  .commodity div{
    text-align: center;
    position: relative;
    color: red;
  }
  .commodity img{
    margin-top: 10px;
  }
  .commodity p{
    position: absolute;
    left: 20px;
    bottom: 20px;
    /* z-index: 100; */
  }
</style>
<script>

export default {
  data(){
    return{
      tabbar:'index',
      value:'',
      timer:'',
    }
  },
  mounted(){
    setInterval(()=>{
      // 获取当前时间毫秒数
      let now = new Date().getTime();
      // 获取双十一的毫秒数
      let end = new Date('2020/11/11 00:00:00').getTime();
      // 差值换算成秒，向下取整
      let mil = parseInt((end-now) / 1000);
      // 计算相差的天数
      let day = parseInt(mil/(24*60*60));
      // 总的秒数和每天的秒数取余，结果就是去除天数后的部分的毫秒数
      let hour = mil % (24*60*60);
      // 换算成小时=去除天数后的秒数/每小时的秒数
      hour = parseInt(hour/(60*60))
      // 总的秒数和每小时的秒数取余，结果就是去除小时后的秒数
      let min = mil % (60*60);
      // 换算成分钟=去除小时后的秒数/每分钟的秒数
      min = parseInt(min/60);
      // 计算相差的秒数，总的秒数和每分钟的秒数取余
      // 余数就是剩余秒数
      let second = mil % 60;
      this.timer = `${day}天${hour}时${min}分钟${second}秒`;
    },1000)
    
    
  },
  // watch:{
  //   tabbar(value){
  //     if(value=='index'){
  //       this.$router.push('/')
  //     }if(value=='me'){
  //       this.$router.push('/me')
  //     }if(value=='message'){
  //       this.$router.push('/message')
  //     }if(value=='shopcart'){
  //       this.$router.push('/shopcart')
  //     }
  //   }
  // }
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
