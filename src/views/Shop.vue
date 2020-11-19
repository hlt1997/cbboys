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
        <input type="checkbox" v-model="item.is_checked" @click="check(item)">
        <!-- <span>{{item.is_checked}}</span> -->
        <img :src="item.pic" alt="">
        <div class="pro_details">
          <p>{{item.title}} <button :data-i="index">×</button></p>
          <p>{{item.details}}</p>
          <p>¥{{item.price.toFixed(2)}}</p>
        </div>
        <button :data-i="index" :data-n="-1">-</button>
        <span>{{item.count}}</span>
        <button :data-i="index" :data-n="+1">+</button>
      </li>
    </ul>
      <div class="all">
        <span><input type="checkbox" v-model="is_check" @click="cheAll">全选</span>
        <span>总价：￥{{total.toFixed(2)}}</span> 
        <span>结算</span>
      </div>
      <my-footer></my-footer>
  </div>  
</template>
<style scoped>

  .cart button{
    background: #fff;
    border: 1px solid #e8e8e8;
  }
  /*设置底部选项卡选中时的颜色 */
  a.is-selected{
    color: #d4237a !important;
  }
  /*顶部导航栏容器 */
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
  /*商品列表容器*/
  .product{
    margin-bottom: 90px;
    
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
  /*价格及信息容器*/
  .pro_details{
    margin:0 10px
  }
  .pro_details>p:first-child{
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: bold;
  }
  .pro_details>p:nth-child(2){
    width: 150px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 10px;
  }
  .pro_details>p:last-child{
    margin-bottom: 10px;
    font-size: 18px;
    color: red;
  }
  .product button{
    outline: none;
  }
  .product>li>button:first-child{
    padding-right: 5px;
    border: 1px solid #666;
  }
  /*底部总价容器*/
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
  .all>span:last-child{
    display: inline-block;
    text-align: center;
    width: 80px;
    height: 30px;
    background: orange;
    color: #fff;
    border-radius: 10px;
    line-height: 30px;
  }
</style>
<script>
import Search from "../components/Search";
import MyFooter from "../components/MyFooter";

  
export default {
  components:{
    Search,MyFooter
  },
  data(){
    return{
      // 用于存储商品信息
      shops:[],
      // 用于存储商品是否选中
      is_check:false
    }
  },
  mounted(){
    console.log(this.tabbar)
    this.axios.get('/cart').then(res=>{
      this.shops = res.data.results
      // console.log(this.shops[0].is_checked)
    })
  },
  methods:{
    // 商品处理事件，包括是否选中，加减商品，删除商品
    handle(e){
      // 当点击的标签是<button>且内容是×就删除当前点击的商品
      if(e.target.nodeName == "BUTTON" && e.target.innerHTML == '×'){
        let i = e.target.dataset.i;
        this.shops.splice(i,1)
      }
      // 否则点击的标签是<button>时
      else if(e.target.nodeName == "BUTTON"){
        // 得到用自定义属性保存的下标index
        let i = e.target.dataset.i;
        // 当前点击的数量加或减
        this.shops[i].count+=parseInt(e.target.dataset.n) ;
        // 当点击减到1时，始终为1
        if(this.shops[i].count<1){
          this.shops[i].count = 1;
        }
        // 如果点击的是input时,当点击取消选中一个时就取消全选
      }else if(e.target.nodeName == "INPUT"){
        }
    },
    check(){
      let select = this.shops.every(item=>{
        // console.log(item.is_checked)
        // console.log(item.is_checked)
          return item.is_checked == true;
          
        })
        console.log(select.length)
        // select.length == this.shops.length ? this.is_check = true : this.is_check = false
        this.is_check = select
    },
    // 当点击全选时，商品全部选中
    cheAll(){
      // 如果点击当前的按钮为false，点击后则为true，就让所有按钮变为true，即可全部选中
      if(this.is_check==false){
        for(let key of this.shops){
          key.is_checked = true
        }
      }else{
        for(let key of this.shops){
          key.is_checked = false
        }
      }
    }
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
}
</script>