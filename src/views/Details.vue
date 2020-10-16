<template>
  <div class="details">
    <header>
      <!-- 顶部导航栏 -->
      <mt-header fixed>
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
      <div class="love">
        <router-link to="/" class="love-router">
          <img src="../../public/img/details-image/xin.png" alt="">
          推荐
        </router-link>
        <router-link to="/" class="love-router">
          <img src="../../public/img/details-image/人员.png" alt="">
          帮我选
        </router-link>
        <router-link to="/" class="love-router">
          <img src="../../public/img/details-image/链接1.png" alt="">
          分享
        </router-link>
      </div>
    </div>
    <div class="three">
      <table>
        <tr>
          <td>选择</td>
          <td>
            <router-link to="/" class="three-router">
              <span>尺寸 / 颜色分类</span>
              <div><img src="../../public/img/detail/detail_img1.jpg" class="three-img">
              <img src="../../public/img/details-image/大于号.png" class="three-image">
              </div>
            </router-link>
          </td>
        </tr>
        <tr>
          <td>发货</td>
          <td>
            <router-link to="/site" class="three-router">
              <span>江苏 | 快递：免运费
                <img src="../../public/img/details-image/大于号.png" class="three-image">
              </span>
              <div class="three-site">
                配送至：
                <span></span>
              </div>
            </router-link>
          </td>
        </tr>
        <tr>
          <td>保障</td>
          <td>
            <router-link to="/" class="three-router">
              假一赔四 · 退货运费险 · 极速退款
              <img src="../../public/img/details-image/大于号.png" class="three-image">
            </router-link> 
          </td>
        </tr>
        <tr>
          <td>权益</td>
          <td>
            <router-link to="/" class="three-router">
              凭芝麻分先用后付，收货满意再付   
              <span class="three-position">开通</span> <img src="../../public/img/details-image/大于号.png" class="three-image">
            </router-link>
          </td>
        </tr>
        <tr>
          <td>参数</td>
          <td>
            <router-link to="/" class="three-router">
              品牌 产地 . . .
              <img src="../../public/img/details-image/大于号.png" class="three-image">
            </router-link>
          </td>
        </tr>
      </table>
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
  /* 第二栏的导航栏 */
  .details .love{
    font-size: 4px;
    color:#999;
    display: flex;
    justify-content: space-around;
    padding:10px 0;
  }
  /* 第二栏的导航栏的链接样式 */
  .details .love-router{
    text-decoration: none;
    color: #999;
    display: inline-block;
  }
  /* 第三栏选择 */
  .details .three-img{
    width: 30px;
    margin-top: 10px;
  }
  /* 第三栏导航栏的整体结构 */
  .details .three{
    margin: 15px 10px;
    background: #fff;
    border-radius: 5px;
    font-size: 12px;
  }
  /* touter-link链接样式删除 */
  .details .three-router{
    text-decoration: none;
    color: #000;
  }
  /* 第三栏中第一个td元素的字体颜色 */
  .details .three>table td:first-child{
    color: #999;
    padding: 10px;
  }
  /* 第三栏的配送地址样式 */
  .details .three-site{
    color: #999;
    padding-top: 10px ;
    padding-bottom:10px ;
  }
  /* 第三栏右尖括号">"样式 */
  .details .three-image{
    position: absolute;
    right: 30px;
  }
  /* 第三栏开通样式 */
  .details .three-position{ 
    position: absolute;
    right: 60px;
    color:#f00;
  }
</style>