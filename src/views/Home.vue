<template>
  <div class="home">
    <search></search>
    <!--轮播图开始-->
    <div class="swipe">
      <mt-swipe :showIndicators="true" :auto="3000" :speed="1000">
        <mt-swipe-item v-for="(carousel, index) of carousels" :key="index">
          <router-link :to="carousel.href"
            ><img :src="carousel.img" alt=""
          /></router-link>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!--轮播图结束-->
    <!--商品展示区开始-->
    <div class="commodity">
      <div
        v-for="(list, index) of lists"
        :key="index"
        infinite-scroll-disbled="loading"
        infinite-scroll-distance="10"
      >
        <router-link :to="list.href"><img :src="list.pic" alt=""/></router-link>
        <p>
          <!-- <span>商品名称：{{list.title}}</span><br> -->
          <span>{{ list.details }}</span
          ><br />
          <span>￥</span>
          <span>{{ list.price }}</span>
        </p>
      </div>
    </div>
    <!--商品展示区结束-->
    <!--商品列表结束提示-->
    <div class="hint">
      <p>一滴都没有了~~</p>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<style scoped>
/* 总背景 */
.home {
  background: #e8e8e8;
}
/* 轮播图容器*/
.swipe {
  height: 150px;
  margin: 60px 5px 0 5px;
}
/* 轮播图下的图片*/

.swipe img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
/* 品牌容器*/

.brand {
  text-align: center;
}
/* 品牌容器下的图片*/

.brand img {
  width: 170px;
  margin-top: 10px;
}
.brand img:nth-child(odd) {
  margin-right: 10px;
}
/* 倒计时容器*/

.activity {
  margin-top: 10px;
  text-align: center;
  /* width: 300px; */
}
.activity p {
  width: 340px;
  background: #fe4a65;
  color: #fff;
  font-size: 16px;
  margin: 0 auto;
  padding: 5px;
  font-family: "微软雅黑 light";
}
/* 为商品列表添加弹性布局，换行显示*/
.commodity {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
/* 每个偶数商品加左外边距*/
.commodity div:nth-child(even) {
  margin-left: 10px;
}
/*每个商品容器 */
.commodity > div {
  width: 170px;
  font-size: 14px;
}
/* 商品图片*/
.commodity img {
  border-radius: 8px 8px 0 0;
  margin-top: 10px;
  width: 170px;
}
/*商品信息 */
.commodity p {
  height: auto;
  padding: 5px;
  border-radius: 0 0 8px 8px;
  background-color: #fff;
}
.commodity p > span:first-child {
  font-weight: 500;
  font-family: "微软雅黑";
}
.commodity p > span:nth-child(3) {
  color: red;
}
.commodity p > span:last-child {
  color: red;
  display: inline-block;
  padding-top: 10px;
  font-size: 18px;
}
/*提示信息 */
.hint p {
  margin-top: 10px;
  padding: 10px 0 10px 10px;
  border-top: 1px dashed #aaa;
  font-family: "微软雅黑";
  margin-bottom: 60px;
}
</style>
<script>
// 引入顶部搜索框组件
import Search from "../components/Search";
import MyFooter from "../components/MyFooter";

export default {
  components: {
    Search,
    MyFooter,
  },
  data() {
    return {
      // 倒计时变量
      timer: "",
      // 用于存储轮播图信息
      carousels: [],
      // 用于存储商品列表的信息
      lists: [],
    };
  },
  mounted() {
    //   setInterval(()=>{
    //     // 获取当前时间毫秒数
    //     let now = new Date().getTime();
    //     // 获取双十一的毫秒数
    //     let end = new Date('2020/11/11 00:00:00').getTime();
    //     // 差值换算成秒，向下取整
    //     let mil = parseInt((end-now) / 1000);
    //     // 计算相差的天数
    //     let day = parseInt(mil/(24*60*60));
    //     // 总的秒数和每天的秒数取余，结果就是去除天数后的部分的毫秒数
    //     let hour = mil % (24*60*60);
    //     // 换算成小时=去除天数后的秒数/每小时的秒数
    //     hour = parseInt(hour/(60*60))
    //     // 总的秒数和每小时的秒数取余，结果就是去除小时后的秒数
    //     let min = mil % (60*60);
    //     // 换算成分钟=去除小时后的秒数/每分钟的秒数
    //     min = parseInt(min/60);
    //     // 计算相差的秒数，总的秒数和每分钟的秒数取余
    //     // 余数就是剩余秒数
    //     let second = mil % 60;
    //     this.timer = `${day}天${hour}时${min}分钟${second}秒`;
    //   },1000);

    this.axios.get("/carousel").then((res) => {
      console.log(res.data.results);
      this.carousels = res.data.results;
    });
    this.axios.get("/list").then((res) => {
      console.log(res.data.results);
      this.lists = res.data.results;
    });
  },
};
</script>
