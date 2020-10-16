<template>
  <div class="details">
    <header>
      <!-- 顶部导航栏 -->
      <mt-header>
        <!-- 左边的返回键 -->
        <div slot='left'>
          <router-link to='/'>
            <mt-button icon='back'></mt-button>
          </router-link>
        </div>
        <!-- 右边链接键 -->
        <div slot="right">
          <!-- 分享链接 -->
          <router-link to="/">
            <img src="../../public/img/details-image/链接.png" alt="" class="img-header">
          </router-link>
          <!-- 购物车链接 -->
          <router-link to="/shopcart">
            <img src="../../public/img/details-image/购物车.png" class="img-header">
          </router-link>
          <!-- 更多链接 -->
          <router-link to="/" class="img-header">
            <mt-button icon="more" ></mt-button>
          </router-link>
        </div>
      </mt-header>
    </header>
    <div>
      <img src="../../public/img/detail/detail_img1.jpg" class="sideshow">
    </div>
    <div class="money">
      <div class="price">55</div>
      <span class="cotton">棉被</span>
      <div class="recommend">10斤被子东信棉</div>
    </div>
  </div>
</template>
<style  scoped>
.details{
  background: #e8e8e8;
}
/* 顶部导航栏中img的外边距 */
  .details .img-header{
    margin: 0 10px;
  }
  /* 顶部导航栏图片 */
  .details .sideshow{
    width: 100%;
    height: 300px;
  }
  /*第二栏 价格，详情介绍 总布局*/
  .details .money{
    margin: 10px 10px;
    background: #fff;
    border-radius: 5px;
  }
  /* 第二栏价格 */
  .details .price{
    
    padding: 10px;
  }
  /* 第二栏cb字体 */
  .details .cotton{
    padding: 5px 10px;
    border-radius: 10px;
    font-size: 12px;
    background: #f00;
    display: inline-block;
    margin-left:10px ;
    color: #FFF;
  }
  /* 第二栏详情介绍 */
  .details .recommend{
    font-weight: bold;
    font-family: "Microsoft Yahei";
  }
</style>