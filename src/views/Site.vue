<template>
  <div class='site'>
    <mt-header>
      <router-link to="/shopcart" slot='left'>
        <mt-button icon='back'></mt-button>
      </router-link>
      <div slot="right">
      <div  >
        <img src="../../public/img/bottom-img/share1.png" alt="">
      </div>
      </div>
    </mt-header>
    <div class='site-history'>
      收货地址
    </div>
   
    <div class='button' >
      <router-link to="/newsite">
        <button>+新增收货地址</button>
      </router-link>
    </div>
    
  </div>
</template>
<style scoped>
  
  .site .site-history{
    
    width:100%;
    text-align:center;
    margin-top:10px
  }
  .site .button{
    position: absolute;
    bottom:3px;
    width:100%;
    position:fixed;
  }
  .site .button button{
    border:none;
    width:90%;
    margin-left:5%;
    border-radius:20px;
    height:40px;
    background-color: #f00;
    color:#fff;
    outline:none;
    
  }
</style>