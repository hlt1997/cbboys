<template>
      <!--顶部搜索框-->
    <div class="search">
      <p>历寒优品</p>
      <input type="text" v-model="value" placeholder="请输入要搜索的商品">
      <button>搜索</button>
      <img src="../../public/img/bottom-img/11.png" alt="">
    </div>
    <!--搜索框结束-->
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
</style>
<script>
export default {
  data(){
    return{
    // 顶部搜索框变量
      value:'',
    }
  }
}
</script>