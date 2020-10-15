<template>
  <div>
    <!-- 登录界面 -->
    <div>
      <!-- 顶部用户界面开始 -->
      <div id="header">
        <div class="shortcut"> 
          <router-link to="/login">
          <img src="../../public/img/me.png" >
          <span class="left-margin">登录体验更多精彩</span>
          </router-link>
        </div>
      <!-- 顶部用户界面结束 -->
      </div>
    </div>
  </div>
</template>
<style scoped>
  #header{
    height: 150px;
    background-color: aqua;
    position:relative;
  }
  .shortcut{
    position:absolute;
    top:50px;
    left: 5%;
    font:bold 25px Microsoft yahei;
  }
  a{
    text-decoration: none;
    height: 40px;
  }
  .left-margin{
    margin-left: 15px;
  }
 
</style>