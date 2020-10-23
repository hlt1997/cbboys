<template>
  <div class='shopcart'>
    <mt-header>
      <router-link to="/" slot="left">
        <mt-button  icon="back" >
        </mt-button>
      </router-link>
    </mt-header>
    <div>
      <router-link to="/site" class='underline'>
        <span class="site">默认</span>
        <span>河南省郑州市金水区</span>
        
        <div >
          <span> 优胜北路岗杜街二号院</span>
          <img src="../../public/img/bottom-img/dayuhao.png" alt="">
        </div>
        <span>韩雪阳</span>
        <span>177****2078</span>
      </router-link>
    </div>
    <div>
      <ul class='color'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="background">
      <table></table>
      <div class="two">
        <img src="../../public/img/bottom-img/share.png" alt="">
        <span>这里需要数据</span>
        <div class='two-text'>
          <img src="../../public/img/detail/detail_img1.jpg" alt="">
          <div>
            <div>{{info[0].title}}</div>
            <span>颜色 需要数据</span>
            <div class="amount">
              <span>￥{{info[0].uprice}}</span>
              <p>
                <span @click="minus()">-</span>
                <span>{{n}}</span>
                <span @click="add()">+</span>
              </p>
            </div>
          </div>
        </div>
        <div class='delivery'>
          <router-link to="/" class="decoration">
            <span>配送</span>
            <div>
              快递运输
              <img :src="info.imageb" alt="">
            </div>
            <p>工作日、双休日与节假日均可送货</p>
          </router-link>
        </div>
        <div class='delivery'>
            <span>退换无忧</span>
            <div>
              商家赠送
            </div>
            <p class="chan-mar">{{info[0].promise}}</p>
        </div>  
        <div class='delivery-mar'>
          <span>留言</span>
          <textarea name="" id="" cols="25" rows="1" placeholder="建议留言前先与商家沟通确认" maxlength="45"></textarea>
        </div>  
      </div> 
      <div class="three">
        <table></table>
        <div>
          <span>商品金额</span>
          <p>￥{{info[0].uprice}}</p>
        </div>
        <div>
          <span>退还无忧</span>
          <p>￥0:00</p>
        </div>
        <div>
          <span>邮费</span>
          <p>￥0:00</p>
        </div>
        <div>
          <span>优惠卷</span>
          <p>无可用
            <img src="../../public/img/bottom-img/dayuhao.png" alt="">
          </p>
        </div>
        <div>
          <span>积分</span>
          <p>{{info[0].subtitle}}</p>
        </div>
        <div>
          <span>礼品卡</span>
          <p>无可用
            <img src="../../public/img/bottom-img/dayuhao.png" alt="">
          </p>
        </div>
        <hr>
        <div>
          <p>合计:
            <span>{{tatal}}</span>
          </p>
           
        </div>
      </div> 
      <div class='four'> 
        <table></table>
        <div>
          <span>发票</span>
          <p>
            不开发票 
            <img src="../../public/img/bottom-img/dayuhao.png" alt="">
          </p>
        </div>
        <div >
          <span>支付方式</span>
          <p>
            在线支付 
            <img src="../../public/img/bottom-img/dayuhao.png" alt="">
          </p>
        </div>
      </div>
      <div class='button'>
        <span>￥{{tatal}}</span>
        <router-link to="/">
          <button class="color">确定</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
 #shopcart .underline{


    text-decoration: none;
    color:#000
  }
  .shopcart .site{
    margin:left;
    background-color:red;
    color:white;
    padding:1px 2px;
    
    border-radius:3px;
  }
  .underline span{
    font-size: 10px;
    margin-left:10px;
  }
  .underline div span{
    font-size:16px;
  }
  .underline div{
    margin:3px 0 3px 0;
  }
  .underline div img{
    margin-left:170px;
  }
  .color>li{
    float:left;
    margin:15px 10px 0 11px;
    width:30px;
    display:block;
    border:1px solid rgb(221, 64, 64)
  }
  .background{
    margin-top:17px;
    height:600px;
    background:#eee;
  }
  /* two第二块样式 */
  .two{
    height:210px;
    border-radius:15px;
    margin-top:10px;
    background-color:white;
    padding-left:10px ;
  }
  .two :nth-child(1){
    font-size:14px;
    margin-right:10px
  }
  .two :nth-child(2) {
    font-size:12px
  }
  .two :nth-child(3) img{
    width:60px;
     margin-top:-50px;
  }
  .two :nth-child(3)>div{
    display: block;
    width:298px;
    height:60px;
    margin:-60px 0 0 65px
  }
  .two-text{
    margin:60px 0 0 0 
  }
  .two-text img{
    width: 60px;
    margin-top:-40px
  }
  .two-text :nth-child(2) :nth-child(1){
    margin-bottom:4px;
  }
  .two-text :nth-child(2) :nth-child(3){
    margin-top:6px
  }
  .amount p{
    margin-left:240px;
    margin-top:-10px
  }
  .amount p :nth-child(1){
    margin-right:0
  }
  .amount p :nth-child(2){
    padding:0 5px 0 5px;
    background-color:#eee
  }
  /* delivery‘配送’行样式 */
  .delivery :nth-child(1){
    font-size:10px
  }
  .delivery :nth-child(2){
    margin:-13px 0 0 270px
  }
  
  /* 设置“配送”行的右侧箭头 */
  .delivery :nth-child(2) img{
    width: 12px;
    margin-left:10px
  }
  .delivery :nth-child(3){
    font-size:10px;
    margin-left:139px
  }
  /* 清楚a标签下划线 */
  .decoration{
    text-decoration:none;
    color:black
  }
  .delivery>.chan-mar{
    margin-left:175px;
  }
  /* 取消多行文本域的拉伸效果 */
  textarea{
    resize: none;
    margin-left:120px;
    border:none
  }
  /* 修改“留言”处下移 */
  .delivery-mar{
    margin-top:15px
  }
  /* three第三块样式 */
  .three{
    width: 375px;
    height:250px;
    background-color: #fff;
    margin-top:10px;
    border-radius:15px;
    font-size:10px;
    position: absolute;
  }
  .three>div{
    margin-top:18px;
    padding-left:10px
  }
  .three>div :nth-child(2){
    margin:-13px 0 0 280px;
    width:110px
  }
  .three :nth-child(5) img{
    width:12px
  }
  .three :nth-child(5)>p{
    position: relative;
    right:-2px
  }
  .three :nth-child(6)>p{
    margin-left:120px;
    width: 220px;
  }
  .three :nth-child(7) img{
    width:12px
  }
  .three :nth-child(8){
    color:red;
    
  }
  .three :nth-child(9) p{
    position: absolute;
    right:60px
  }
  .three :nth-child(9) span{
    color:red
  }
  .four{
    position: relative;
    top:270px;
    height:100px;
    background-color: #fff;
    border-radius:15px;
    font-size:10px;
  }
  .four div{
    margin-top:25px;
    padding-left:10px;
  }
  .four div :nth-child(2){
    width:100px;
    
    margin:-15px 0 0 73%;
    
  }
  .four div :nth-child(2) img{
    width:12px;
    
  }
  .button {
    position: relative;
    background-color: #fff;
    position: fixed;
    width:100%;
    top:670px;
    position: fixed;
    height: 50px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  .button button{
    position: relative;
    border:none;
    width:30%;
    right:-35%;
    border-radius:20px;
    height:40px;
    background-color: #f00;
    color:#fff;
    outline:none;
    top:3px
  }
  .color{
    color:#fff;
  }
  .button :nth-child(1){
    margin-left:5%;
    
  }
</style>
<script>
// import "../../public/shopcart.css"
export default {
  data(){
    return{
      n:0,
      mon:'',
      display:'false',
      tatal:0,
      shopcart:'',
      info:{},
      
    }
  },
 mounted(){
   //先接受地址栏中传来的id数据
   let id=this.$route.params.id;
   console.log(id);
   //向服务器发送请求
   this.axios.get('/shopcart?id='+id).then((res)=>{
     let data=res.data.result;
     console.log(data);
     this.info=res.data.result;
     console.log(this.info)
   })
 },
  methods:{
    minus(){
      if(this.n>0){
        this.n--;
        
        this.tatal=paserInt(this.n*this.info[0].uprice).toFixed(2)
      }
    },
    add(){
      this.n++;
      
      this.tatal=this.n*this.info[0].uprice
    },
  }
}

</script>