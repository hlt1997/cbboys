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
          <!-- 更多按钮 -->
            <mt-button icon="more" ></mt-button>
          </router-link>
        </div>
      </mt-header>
    </header>
    <div class="swipe"> 
      <mt-swipe :auto="5000">
        <mt-swipe-item>
           <img v-lazy="info.imagea" >
        </mt-swipe-item>
        <mt-swipe-item>
           <img v-lazy="info.imageb" >
        </mt-swipe-item>
      </mt-swipe>    
    </div>
    <!-- 第二栏开始 -->
    <!-- 第二栏设置唯一父元素    -- money-->
    <div class="money">
      <!-- 第二栏商品价格 -->
      <div class="price">¥{{info.price}}</div>
      <!-- 第二栏商品标题 -->
      <span class="cotton">{{info.title}}</span>
      <!-- 第二栏商品详情介绍 -->
      <div class="recommend">{{info.subtitle}}</div>
      <!-- 第二栏末尾导航栏 -->
      <div class="love">
      <!-- 第二栏末尾推荐导航标志 -->
        <router-link to="/" class="love-router">
          <img src="../../public/img/details-image/xin.png" alt="">
          推荐
        </router-link>
        <!-- 第二栏末尾帮我选导航标志 -->
        <router-link to="/" class="love-router">
          <img src="../../public/img/details-image/人员.png" alt="">
          帮我选
        </router-link>
        <!-- 第二栏末尾分享链接标志 -->
        <router-link to="/" class="love-router">
          <img src="../../public/img/details-image/链接1.png" alt="">
          分享
        </router-link>
      </div>
    </div>
    <!-- 第二栏结束 -->
    <!-- 第三栏开始 -->
    <!-- 设置唯一父元素 --  three -->
    <div class="three">
      <!-- 使用表格样式，避免过多重复的div和p标签的使用 -->
      <table>
        <tr>
          <td>选择</td>
          <td>
            <!-- 颜色分类图片链接 -->
            <router-link :to="`${info.href}`" class="three-router">
              <span>尺寸 / 颜色分类</span>
              <!-- 四张小图片的样式   - v-for遍历数据库找数据 -->
              <div>
                <img v-lazy="info.imagec" class="three-img">
                <img v-lazy="info.imaged" class="three-img">
                <img v-lazy="info.imagee" class="three-img">
                <img v-lazy="info.imagef" class="three-img">
              <!-- 末尾尖括号图片 -->
              <img src="../../public/img/details-image/大于号.png" class="three-image">
              </div>
            </router-link>
          </td>
        </tr>
        <tr>
          <td>发货</td>
          <td>
            <!-- 快递链接导航 -->
            <router-link to="/site" class="three-router">
              <span>江苏 | 快递：免运费
                <!-- 末尾尖括号导航栏-->
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
            <!-- 保障栏链接导航 -->
            <router-link to="/" class="three-router">
              假一赔四 · 退货运费险 · 极速退款
              <!-- 末尾尖括号导航 -->
              <img src="../../public/img/details-image/大于号.png" class="three-image">
            </router-link> 
          </td>
        </tr>
        <tr>
          <td>权益</td>
          <td>
            <!-- 芝麻分导航栏 -->
            <router-link to="/" class="three-router">
              凭芝麻分先用后付，收货满意再付   
              <span class="three-position">开通</span> 
              <!-- 末尾尖括号导航 -->
              <img src="../../public/img/details-image/大于号.png" class="three-image">
            </router-link>
          </td>
        </tr>
        <tr>
          <td>参数</td>
          <td>
            <!-- 参数导航栏链接 -->
            <router-link to="/" class="three-router">
              品牌 产地 . . .
              <!-- 末尾尖括号导航 -->
              <img src="../../public/img/details-image/大于号.png" class="three-image">
            </router-link>
          </td>
        </tr>
      </table>
    </div>
    <!-- 第三栏结束 -->
    <!-- 第四栏开始 -->
    <!-- 给第四栏创建一个唯一父元素 -->
    <div class="four">
      <div class="four-son">
        <div>
          <!-- 第一层标签（宝贝介绍） -->
          <div>
            <span class="four-baby">宝贝评价(234)</span>
            <router-link to="/" class="four-all">查看全部 > </router-link>
          </div>
          <!-- 各种各样的评价，以及汇总 -->
          <div>
            <button class="four-button">性价比高(99)</button>
            <button class="four-button">质量好(84)</button>
            <button class="four-button">很舒适(73)</button>
          
            <div>
              <!-- 某某用户的评价，最近几天的 -->
              <img src="../../public/img/details-image/头像 男孩.png" alt="">
              <span>用户名</span>
              <div class="four-product">暗室逢灯卡时间划分空间按时付款就好撒空间发件爱神的箭返回尽快发货</div>
              <!-- 用户上传的照片 -->
              <div class="four-img-fu">
                <img v-lazy="info.imagec" class="four-img">
                <img v-lazy="info.imaged" class="four-img">
                <img v-lazy="info.imagee" class="four-img">
                <img v-lazy="info.imagef" class="four-img">
              </div>
            </div>
          
          </div>
        </div>
        <hr>
        <div>
          <!-- 询问买过的人，以及店家详细信息 -->
          <div>
            <span class="four-baby">问大家(1234)</span>
            <router-link to="/" class="four-all">查看全部 ></router-link>
          </div>
          <!-- 问题提问区 -->
          <div class="four-last-fu">
            <span class="four-last">问</span>
            <span>着安徽科技护肤的撒娇和飞机撒副科级</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 第四栏结束 -->
    <!-- 第五栏开始 -->
    <p class="baby-product">宝贝详情</p>
    <!-- 公益公告 -->
    <div class="good-baby">
      <img src="../../public/img/details-image/公益.png" class="good-baby-img">
      <div>
        <div>公益宝贝</div>
        <div class="good-baby-text">每笔成交将为 <span class="good-baby-span">免费午餐基金</span> 捐赠 <span class="good-baby-span">0.02元</span> ， 已累计捐赠 <span class="good-baby-span">98658</span> 笔。</div>
      </div>
    </div>
    <div class="products">
      <img v-lazy="info.imagec" class="products-img">
      <img v-lazy="info.imaged" class="products-img">
      <img v-lazy="info.imagee" class="products-img">
      <img v-lazy="info.imagef" class="products-img">
      <!-- 底部详情页信息 -->
      <div class="products-table">
        <table>
          <tr>
            <td class="products-td">价格说明</td>
          </tr>
          <tr>
            <td>
              <span class="products-spot">·</span>
              <span class="products-text">划线价格</span>
            </td>
          </tr>
          <tr>
            <td>
              商品的专柜价、吊牌价、正品零售价、厂商指导价或该商品的曾经展示过的销售价等，<span class="products-text">并非原价</span> ,仅供参考
            </td>
          </tr>
          <tr>
            <td>
              <span class="products-spot">·</span>
              <span class="products-text">未划线价格</span>
            </td>
          </tr>
          <tr>
            <td>商品的 <span class="products-text">实时标价</span> ,不因表述的差异改变性质。具体成交价格根据商品参加活动，或会员使用优惠券、积分等发生变化，最终以定单结算页价格为准</td>
          </tr>
          <tr>
            <td>
              <span class="products-spot">·</span>
              <span>商家详情页 (含主图) 以图片或文字形式标注的一口价、促销价、优惠价等价格可能是在使用优惠券、慢件或特定优惠活动和时段等情形下的价格，具体请以结算页面的标价、优惠条件或活动规则为准。</span>
            </td>
          </tr>
          <tr>
            <td>
              <span class="products-spot">·</span>
              <span>此说明仅当出现价格比较时有效，具体请参见《淘宝价格发布规范》。若商家单独对划线价格进行说明的，以商家的表述为准。</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <!-- 底部固定导航栏 --店铺--客服---收藏---加入购物车---立即购买 -->
    <div class="last-down">
        <ul class="last-ul">
          <li>
            <ul>
              <!-- 店铺连接   -->
              <router-link to="/">
              <!-- 店铺下的图片以及文字的内容 -->
                <li><img src="../../public/img/details-image/店铺.png" class="last-img"></li>
                <li>店铺</li>
              </router-link>
            </ul>
          </li>
          <li>
            <ul>
              <!-- 客服导航栏的内容 -->
              <router-link to="/">             
                <li><img src="../../public/img/details-image/客服.png" class="last-img"></li>
                <li>客服</li>
              </router-link>
            </ul>
          </li>
          <li>
            <ul>
              <div class="last-ul-div">
                <!-- 收藏栏的内容 -->
                <li>
                  <!-- 点击函数--lastImg--用v-if--来实现图片切换效果 -->
                  <img src="../../public/img/details-image/收藏2.png"   class="last-img" v-if="downIcon == false"  @click="lastImg">
                  <!-- 点击函数--isLastImg--用v-else--来实现图片切换效果 -->
                  <img src="../../public/img/details-image/收藏1.png" class="last-img" v-else @click="isLastImg">
                </li>
                <!-- class名，点击函数出发后方便查找中间的内容，便于修改 -->
                <li class="collect">收藏</li>
              </div>
            </ul>
          </li>
          <li class="last-li-button">
            <!-- 加入购物车的内容以及立即购买的内容 -->
            <router-link to="/">
              <button class="last-button">加入购物车</button>   
            </router-link>  
            <router-link to="/shopcart">
              <button class="last-button">立即购买</button>
            </router-link>          
          </li>
        </ul>
    </div>
  </div>
</template>

<style scoped>     
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
      height: 350px;
    }
    /* 顶部轮播图样式 */
    .details .swipe{
      height: 350px;
      margin: 0 10px;
    }
    /*第二栏 价格，详情介绍 总布局*/
    .details .money{
      margin: 10px 10px;
      background: #fff;
      border-radius: 5px;
    }
    /* 第二栏价格 */
    .details .price{
      color: red;
      font-weight: bold;
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
      padding: 5px;
      margin: 5px;
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
      margin-left: 10px;
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
    /* 第四栏导航全体布局 */
    .details .four{
      
      margin: 15px 10px;
      background: #fff;
      border-radius: 5px;
      font-size: 12px;
    }
    /* 第四栏宝贝评价样式 */
    .details .four-baby{
      font-size: 18px;
      font-weight: bold;
    }
    /* 第四栏查看全部样式 */
    .details .four-all{
      position: absolute;
      right: 30px;
      color: #f00;
      text-decoration: none;
    } 
    /* 第四栏子元素布局 */
    .details .four-son{
      padding: 10px;
    }
    /* 第四栏按钮样式 */
    .details .four-button{
      border: none;
      background: pink;
      padding: 5px 8px;
      border-radius:15px;
      margin:10px  20px 10px 0;
    }
    /* 第四栏图片 */
    .details .four-img{
      width: 70px;
      margin-right: 5px;
    }
    /* 第四栏图片第一个孩子的样式 */
    .details .four-img-fu :first-child{
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    /* 第四栏图片最后一个孩子的样式 */
    .details .four-img-fu :last-child{
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    /* 第四栏用户介绍详情 */
    .details .four-product{
      margin: 10px 0;
    }
    /* 第四栏问的标签样式 */
    .details .four-last{
      background: #f00;
      color: #fff;
      padding: 2px;
      border-radius: 3px;
      display: inline-block;
      margin-right: 5px;
    }
    /* 每张图片间的间距 */
    .details .four-last-fu{
      margin: 10px 0;
    }
    /* 公益宝贝样式 */
    .details .good-baby{
      display: flex;
      align-items: center;
      margin: 0 10px;
      border-radius:5px ;
    }
    /* 公益图片样式 */
    .details .good-baby-img{
      width: 40px;
      margin: 10px;
      border-radius: 50px;
    }
    /* 公益文本样式 */
    .details .good-baby-text{
      font-size: 12px;
      margin-top: 5px;
      color: #999;
    }
    /* 公益文本文字样式中个别字体颜色 */
    .details .good-baby-span{
      color: #000;
    }
    /* 底部宝贝详情样式 */
    .details .baby-product{
      text-align: center;
      margin:10px 0;
      font-size: 14px;
      color: #666;
    }
    /* 公益宝贝主体背景 */
    .details .good-baby{
     
      background: #fff;
      padding: 10px 0;
    }
    /* 详情页图片样式 */
    .details .products{
      margin-top: 10px;
      margin-bottom: 53px;
    }
    .details .products-img{
      width: 100%;
     
    }
    /* 底部价格说明总体文字样式 */
    .details .products-table td{
      color: #999;
      display: inline-block;
      margin: 10px 10px 0 10px;
      font-size: 12px;
    }
    /* 底部文字样式 */
    .details .products-table .products-td{
      color: #666;
      font-size: 14px;
    }
    /* 底部不同字体区 */
    .details .products-text{
      color: #000;
      font-weight: bold;
    }
    /* 底部导航栏  ---点样式 */
    .details .products-spot{
      color: #f00;
      display: inline-block;
      margin-right: 10px;
      font-size: 20px;
    }
    /* 底部信息表格背景样式 */
    .details .products-table{
      background: #FFF;
      padding: 5px;
      margin-bottom:100px ;
    }
    /* 底部固定导航栏 */
    .details .last-ul{
      display: flex;
      /* justify-content: space-around; */
    }
    /* 底部导航栏图片的样式 */
    .details .last-img{
      width: 20px;
    }
    /* li 下的 ul 文字中的样式，以及对齐方式 */
    .details .last-down>.last-ul>li>ul{
      text-align: center;
     
      font-size: 12px;
    }
    /* 每个最小--li--之间的距离 */
    .details .last-down>.last-ul>li>ul li{
      margin: 5px 0;
    }
    /* 底部导航栏背景颜色 */
    .details .last-down{
      background-color: #fff;
      position: fixed;
      bottom: 0;
      width: 375px;
    }
    .details .last-down>.last-ul>li{
      margin: 0 10px; 
    }
    /* 底部导航栏---收藏---宽度设置 */
    .details .last-ul-div{
      width: 36px;
    }
    /* 底部链接--店铺--客服--收藏--样式 */
    .details .last-down>.last-ul>li>ul :last-child{
      text-decoration: none;
      color: #999;
    }
    /*最后 底部button样式 */
    .details .last-button{
      border: 0;
      padding:5px 10px;
      color: #fff;
      font-weight: bloder;
      margin-top: 10px;
      font-size: 14px;
    }
    /* 底部(--加入购物车--)导航栏的链接 */
    .details .last-li-button :first-child button{
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
      background: linear-gradient(to right, #FFD700 , #ffa500);
    }
    /* 底部(--立即购买--)导航链接 */
    .details .last-li-button :last-child button{
      border-top-right-radius:15px;
      border-bottom-right-radius:15px;
      background:linear-gradient(to right ,#f30 , #f00 );
      padding:5px 17px;
    }
    .details .last-down ul{
      list-style: none;
      padding-left:0 ;
    }
</style>

<script>
export default {
   data(){
     return {
      //  变量downIcon先为true
       downIcon:false,
       info:[],
       tu:[]
     }
   },
  methods:{
    // 收藏点击函数，
    lastImg(){
      this.downIcon = true;
      // 找到要修改的的元素，并获取中间的文本内容，修改文本内容为“以收藏”
      document.querySelector('.collect').innerHTML = "已收藏"
    },
    // 以收藏点击函数
    isLastImg(){
      this.downIcon = false;
      // 找到要修改的元素，并获取中间的文本内容，修改文本内容为“收藏”
      document.querySelector('.collect').innerHTML = "收藏"
    }
  },
  mounted(){
    // this.$router,路由
    // this.$router,路由请求信息
    // 1.获取地址栏中的ID
    let id = this.$route.params.id;
    console.log(id);
     //2.向服务器发送请求
     this.axios.get('/details?id=' + id).then(res=>{
       let data = res.data.result;
      //  console.log(data);
      data.imagea = require('../../public/img/detail/' + data.imagea);
      data.imageb = require('../../public/img/detail/' + data.imageb);
      data.imagec = require('../../public/img/detail/' + data.imagec);
      data.imaged = require('../../public/img/detail/' + data.imaged);
      data.imagee = require('../../public/img/detail/' + data.imagee);
      data.imagef = require('../../public/img/detail/' + data.imagef);
      this.info = data;
     })
   }
}
</script>