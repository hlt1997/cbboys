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
    <!--商品列表结束提示-->
    <div class="hint">
      <p>一滴都没有了~~</p>
    </div>
    <my-footer></my-footer>
  </div>
  <!--底部导航结束-->
</template>
<style scoped>
/* 顶部搜索框下的图片*/
  .search img{
    width: 35px;
    float: right;
    margin-right: 10px;
  }
/* 顶部搜索框左侧文字*/

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
/* 顶部搜索栏容器*/

  .search{
    margin-top: 10px;
    text-align: center;
  }
/* 顶部搜索框*/

  .search input{
    border: 1px solid red;
    border-radius: 15px 0 0 15px;
    height: 30px;
    font-size: 14px;
  }
/* 顶部搜索按钮*/

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
/* 轮播图容器*/

  .swipe{
    margin-top: 20px;
    height: 150px;
  }
/* 轮播图下的图片*/

  .swipe img{
    width: 100%;
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
    color: red;
  }
  /* 每个偶数商品加左外边距*/
  .commodity div:nth-child(even){
    margin-left: 10px;
  }
  /* 商品图片*/
  .commodity img{
    margin-bottom: 10px;
    margin-top: 10px;
    width: 170px;
  }
  /*提示信息 */
  .hint p{
    margin-top: 10px;
    padding:10px 0 10px 10px;
    border-top: 1px dashed #aaa;
    font-family: '微软雅黑';
    margin-bottom: 60px;
  }
  
</style>
<script>
  import MyFooter from "../components/MyFooter";

export default {
  components:{
    MyFooter
  },
  data(){
    return{
      // 顶部搜索框变量
      value:'',
      // 倒计时变量
      timer:'',
      // 用于存储轮播图信息
      carousels:[]
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
    },1000);
    this.axios.get('/carousel').then(res=>{
      console.log(res.data.results)
      this.carousels = res.data.results
    });
    this.axios.get('/list').then(res=>{
      console.log(res.data.results)
    })
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
  }
}
</script>
