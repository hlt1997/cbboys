<template>
  <div id='shopcart'>
    <mt-header></mt-header>
    <div>
      <router-link to="/site" class='underline'>
        <span class="site">默认</span>
        <span>河南省郑州市金水区</span>
        
        <div ><span> 优胜北路岗杜街二号院</span><img src="../../public/img/bottom-img/dayuhao.png" alt=""></div>
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
        <div>
          <img src="../../public/img/carousel/banner4.jpg" alt="">
          <table >
            <tr>
              <td colspan="2">文字过多需要省略号</td>
            </tr>
            <tr>
              <td colspan='2'>颜色 需要变量</td>
            </tr>
            <tr>
              <td class='width'>￥{{mon}}</td>
              <td>
                <div class="count">
                <span @click='minus()'>-</span>
                <span>{{n}}</span>
                <span @click='add()'>+</span></div>
              </td>
            </tr>
          </table>
        </div>
        <div>配送
         <div class>快递运输
           <img src="../../public/img/bottom-img/dayuhao.png" alt=""><br>
          工作日、双休日与节假日均可送货
         </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import "../../public/shopcart.css"
export default {
  data(){
    return{
      n:1,
      mon:'',
    }
    },
  methods:{
    minus(){
      if(this.n>0){
        this.n--
      }
    },
    add(){
      this.n++
    }
  }
}

</script>