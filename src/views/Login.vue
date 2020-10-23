<template>
<div>
    <!-- 顶部开始 -->
    <header>
        <mt-header title="请登录您的账号" class="header">
            <router-link slot="left" to="/">
            <mt-button  icon="back"></mt-button>
             </router-link>
        </mt-header>
    </header>
     <!-- 顶部结束 -->
  <div class="margin">
    <img src="../../public/img/me/login.png" alt="">
  </div>
  <!-- 账户信息开始 -->
  <div class="margin">
    <mt-field 
        type="text" 
        label="用户名：" 
        placeholder="请输入用户名"
        :attr="{maxleng:20}"
        v-model="username"
        :state="NameStatus"
        @blur.native.capture="handle1"
        class="input">
    </mt-field>
    <mt-field 
        type="password" 
        label="密码：" 
        placeholder="请输入密码"
        :attr="{maxleng:20,autocomplete:'off'}"
        v-model="password"
        :state="upwdStatus"
        @blur.native.capture="handle2"
        class="input">
    </mt-field>
    <!-- 账户信息结束 -->
   <div>    
    <!-- 登录注册按钮 -->
    <mt-button @click="handle" class="login-button margin">用户登录</mt-button>
    <mt-button  class="Register-button margin" @click="register()"> 立即注册</mt-button>
    <!-- 登录注册按钮结束 -->
   </div>
  </div>
</div>
</template>
<style scoped>
  /* a标签去除下划线 */
    a{
      text-decoration: none;
    }
    /* 图片与按钮居中 */
    .margin,.margin img{
       margin-top: 17px;
       display:block;
       margin: 17px auto;
    }
    /* 头部字体样式 */
    .header{
        background-color:#FFF;
        font:italic 20px "simhei";
        color: #000;
    }
    /* 按钮样式 */
    .Register-button{
        width: 240px;
        height: 40px;
        background-color: rgb(7,193,96);
        font:16px "Microsoft yahei";
        color: #FFF;
        border-radius: 20px;
    }
    .login-button{
        width: 240px;
        height: 40px;
        background-color: rgba(0, 183, 255, 0.815);
        font:16px "Microsoft yahei";
        color: #FFF;
        border-radius: 20px;
    }
    .input{
      margin-bottom: 10px;
    }
</style>
<script>
export default {
  data(){
    return{
      // 用户输入的用户名
      username:'',
      // 用户输入的密码
      password:'',
      // 用户名状态
      NameStatus:'',
      // 密码状态
      upwdStatus:''
    }
  },
  methods:{
    //注册页面跳转
      register(){
       this.$router.push("register")
      },
    // 校验用户名
    handle1(){
      let nameReg=/^[0-9a-zA-Z_@\.]{6,20}$/;
      // if(this.username!=""){
        if(nameReg.test(this.username)){
          this.NameStatus="success";
          return true
        }else{
          this.NameStatus="error"
          this.$toast({
            message:"用户名输入不正确",
            position:"top"
          });
          return false
        }
      // }
      
    },
    // 校验密码
    handle2(){
      let upwdReg=/^[0-9a-zA-Z_\.]{6,20}$/;
      if(upwdReg.test(this.password)){
        this.upwdStatus="success"
        return true
      }else{
        this.upwdStatus="error"
        this.$toast({
          message:"密码输入不正确",
        });
        return false
      }
    },
    handle(){
      // 点击登录执行的事件函数
      if(this.handle1()&&this.handle2()){
        let obj = {
           username:this.username,
          password:this.password
        }
        // 派遣Actions
        this.$store.dispatch('login',obj)
        // this.axios.post('/login',this.qs.stringify(obj)).then(res=>{
        //   // 如果用户登录成功跳转到主页
        //   if(res.data.code==1){
        //     //提交Mutations
        //     this.$store.commit('logined');
        //     localStorage.setItem('isLogined','1');
        //     this.$router.push('/')
        //     // 否则弹出错误提示
        //   }else{
        //     this.$messagebox('登录提示','用户名或密码错误');
        //   }
        // }) 
      }
    }
  }
}
</script>