<template>
  <div class="cart">
    <div class="nav">
      <div>
        <span>购物车</span>
        <span>管理</span> 
      </div>
      <p>共{{counts}}件商品</p>
    </div>
    <ul class="product" @click="handle">
      <li v-for="(item,index) of shops" :key="index" >
        <input type="checkbox" v-model="item.is_checked">
        <!-- <span>{{item.is_checked}}</span> -->
        <img :src="item.pic" alt="">
        <div class="pro_details">
          <p>{{item.title}} <button :data-i="index">×</button></p>
          <p>{{item.details}}</p>
          <p>{{item.price}}</p>
        </div>
        <button :data-i="index" :data-n="-1">-</button>
        <span>{{item.count}}</span>
        <button :data-i="index" :data-n="+1">+</button>
      </li>
     
      
    </ul>
     <div class="all">
        <span><input type="checkbox" v-model="is_check" @click="cheAll">全选</span>
        <span>总价：￥{{total.toFixed(2)}}</span> 
      </div>
    <div>
      
    </div>
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
  </div>  
</template>
<style scoped>
  /*设置底部选项卡选中时的颜色 */
  a.is-selected{
    color: #d4237a !important;
  }
  .cart{
    /* background-color: #eeeeee; */
  }
  .nav{
    padding: 10px;
  }
  .nav>div{
    display: flex;
    justify-content: space-between;
  }
  .nav>div>span:first-child{
    font-size: 24px;
    font-weight: bold;
  }
  .product{
    margin-bottom: 55px;
  }
  .product li{
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 2px 2px #eee;
    height: 100px;
    margin: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
  .product img{
    width: 80px;
    margin-left: 10px;
  }
  .pro_details{
    margin:0 10px
  }
  .pro_details>p:first-child{
    font-size: 18px;
    margin-bottom: 25px;
    font-weight: bold;
  }
  .pro_details>p:last-child{
    font-size: 14px;
    margin-bottom: 10px;
  }
  .product button{
    outline: none;
  }
  .product>li>button:first-child{
    padding-right: 5px;
    border: 1px solid #666;
  }
  .all{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 55px;
    border-top: 1px solid #eee;
    background-color: #fff;
    padding-left: 10px;
    padding-right: 10px;
    height: 50px;
  }
</style>
<script>
export default {
  data(){
    return{
      tabbar:'shop',
      shops:[],
      is_check:false
    }
  },
  methods:{
    handle(e){
      if(e.target.nodeName == "BUTTON" && e.target.innerHTML == '×'){
        // console.log(e)
        let i = e.target.dataset.i;
        // console.log(i)
        this.shops.splice(i,1)
      }
      else{
        let i = e.target.dataset.i;
        this.shops[i].count+=parseInt(e.target.dataset.n) ;
        if(this.shops[i].count<1){
          this.shops[i].count = 1;
        }
      }
    },
    cheAll(){
      if(this.is_check==false){
        for(let key of this.shops){
          key.is_checked = true
          console.log(key.is_checked)
        }
      }
    }
  },
  mounted(){
    this.axios.get('/cart').then(res=>{
      this.shops = res.data.results
      // console.log(this.shops[0].is_checked)
    })
  },
  computed:{
    total(){
      let total = 0;
      for(let p of this.shops){
        if(p.is_checked){
          total += p.price*p.count
        }
      }
      // console.log(this.shops)
      return total;
    },
    counts(){
      let counts = 0;
      for(let p of this.shops){
        counts +=p.count
      }
      return counts;
    }
  },
  watch:{
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
  }
}
</script>