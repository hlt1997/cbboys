<template>
  <div class="home">
    <search></search>
    <!--轮播图开始-->
    <div class="swipe">
      <mt-swipe
        :showIndicators="true"
        :auto="3000"
        :speed="1000">
        <mt-swipe-item v-for="(carousel,index) of carousels" :key="index">
          <router-link :to="carousel.href"><img :src="carousel.img" alt=""></router-link>
        </mt-swipe-item>
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
      <p>双十一活动开始倒计时:</p>
      <p>{{timer}}</p>
      <p>欢迎抢购，提前预约有优惠哦！</p>
    </div>
    <!--双十一活动栏结束-->
    <!--商品展示区开始-->
    <div class="commodity">
      <div v-for="(list,index) of lists" :key="index">
        <router-link :to="list.href"><img :src="list.pic" alt=""></router-link>
        <p>
          <!-- <span>商品名称：{{list.title}}</span><br> -->
          <span>{{list.details}}</span><br>
          <span>￥</span>
          <span>{{list.price}}</span>
          
        </p>
      </div>
    </div>
    <!--商品展示区结束-->
    <!--商品列表结束提示-->
    <div class="hint">
      <p>一滴都没有了~~</p>
    </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 2e10df724a6ffcadd40993463d8d85c96be457ce


    <my-footer></my-footer>

<<<<<<< HEAD
=======

>>>>>>> 0b5193df5b74340380cb1bbaba909529444687ab
>>>>>>> 9e7a6e670fc8e7bfdf406ceee9db3c56e3f9cf74
>>>>>>> 2e10df724a6ffcadd40993463d8d85c96be457ce
>>>>>>> 4bc2f1612b796ad833af007cf529689362f73f5e
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> 0b5193df5b74340380cb1bbaba909529444687ab
>>>>>>> 9e7a6e670fc8e7bfdf406ceee9db3c56e3f9cf74
>>>>>>> 2e10df724a6ffcadd40993463d8d85c96be457ce
>>>>>>> 4bc2f1612b796ad833af007cf529689362f73f5e
  </div>
</template>

<style scoped>
/* 总背景 */
.home{
  background: #e8e8e8;
}
/* 轮播图容器*/
  .swipe{
    margin: auto;
    margin-top: 60px;
    height: 150px;
  }
/* 轮播图下的图片*/

  .swipe img{
    width: 100%;
    height: 100%;
    border-radius: 10px;

  }
/* 品牌容器*/

  .brand{
    text-align: center;
  }
/* 品牌容器下的图片*/

  .brand img{
    width: 170px;
    margin-top:10px;
  }
  .brand img:nth-child(odd){
    margin-right: 10px;
  }
/* 倒计时容器*/
  
  .activity{
    margin-top: 10px;
    text-align: center;
    /* width: 300px; */
  }
  .activity p{
    width: 340px;
    background: red;
    color: #fff;
    font-size: 16px;
    margin: 0 auto;
    padding: 5px ;
    font-family: '微软雅黑 light';
  }
  /* 为商品列表添加弹性布局，换行显示*/
  .commodity {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  /* 每个偶数商品加左外边距*/
  .commodity div:nth-child(even){
    margin-left: 10px; 
  }
  /*每个商品容器 */
  .commodity>div{
    width: 170px;
    font-size: 14px;
  }
  /* 商品图片*/
  .commodity img{
    border-radius: 8px 8px 0 0;
    margin-top: 10px;
    width: 170px;

  }
  /*商品信息 */
  .commodity p{
    height: auto;
    padding: 5px;
    border-radius: 0 0 8px 8px;
    background-color: #fff;
  }
  .commodity p>span:first-child{
    font-weight: 500;
    font-family: '微软雅黑';

  }
  .commodity p>span:nth-child(3){
    color: red;
  }
  .commodity p>span:last-child{
    color: red;
    display: inline-block;
    padding-top: 10px;
    font-size: 18px;
  }
  /*提示信息 */
  .hint p{
    margin-top: 10px;
    padding:10px 0 10px 10px;
    border-top: 1px dashed #aaa;
    font-family: '微软雅黑';
    margin-bottom: 60px;
  }
  /*设置底部选项卡选中时的颜色 */
  a.is-selected{
    color: #d4237a !important;
  }
</style>
<script>
// 引入顶部搜索框组件
import Search from "../components/Search";

export default {
  components:{
    Search
  },
  data(){
    return{
      tabbar:'index',
      // 倒计时变量
      timer:'',
      // 用于存储轮播图信息
      carousels:[],
      // 用于存储商品列表的信息
      lists:[],
     
    }
  },
<<<<<<< HEAD


  mounted(){
=======
  mounted(){
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD

  mounted(){
=======








  mounted(){

>>>>>>> 0b5193df5b74340380cb1bbaba909529444687ab
>>>>>>> 9e7a6e670fc8e7bfdf406ceee9db3c56e3f9cf74
>>>>>>> 2e10df724a6ffcadd40993463d8d85c96be457ce
>>>>>>> 4bc2f1612b796ad833af007cf529689362f73f5e
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
    },1000);
<<<<<<< HEAD

       this.axios.get('/carousel').then(res=>{
         console.log(res.data.results)
         this.carousels = res.data.results
       });
       this.axios.get('/list').then(res=>{
         console.log(res.data.results);
         this.lists = res.data.results
       })
  },
   watch:{
=======
    this.axios.get('/carousel').then(res=>{
         console.log(res.data.results)
         this.carousels = res.data.results
       });
       this.axios.get('/list').then(res=>{
         console.log(res.data.results);
         this.lists = res.data.results
       })
  },
 // 监听导航栏底部的变化
  watch:{
<<<<<<< HEAD
=======
=======
 
   watch:{
>>>>>>> 0b5193df5b74340380cb1bbaba909529444687ab
>>>>>>> 9e7a6e670fc8e7bfdf406ceee9db3c56e3f9cf74
>>>>>>> 2e10df724a6ffcadd40993463d8d85c96be457ce
>>>>>>> 4bc2f1612b796ad833af007cf529689362f73f5e
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
      }if(value=='shop'){
        // 跳转到购物车
        this.$router.push('/shop').catch(e=>{})
      }
    }
<<<<<<< HEAD
=======
  }
}
<<<<<<< HEAD

=======
=======
        this.$router.push('/shopcart').catch(e=>{})
       }
      }
    }
  }
>>>>>>> 2e10df724a6ffcadd40993463d8d85c96be457ce

<<<<<<< HEAD
=======


<<<<<<< HEAD
=======
   
>>>>>>> 0b5193df5b74340380cb1bbaba909529444687ab
>>>>>>> 9e7a6e670fc8e7bfdf406ceee9db3c56e3f9cf74
>>>>>>> 2e10df724a6ffcadd40993463d8d85c96be457ce
>>>>>>> 4bc2f1612b796ad833af007cf529689362f73f5e
</script>
