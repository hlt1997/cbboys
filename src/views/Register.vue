<template>
  <div>
    <!--顶部开始-->
    <mt-header title="账号注册" class="header"></mt-header>
    <!--顶部结束-->
    <div>
      <img src="../../public/img/me/login.png" alt="">
      <!-- 账户信息开始 -->
      <mt-field 
        type="text"
        label="用户名："
        placeholder="请输入用户名"
        :attr="{maxlength:20}"
        v-model="username" 
        :state="NameStatus"
        @blur.native.capture="handle1"
        class="input"> 
      </mt-field>
      <mt-field 
        type="password"
        label="密码："
        placeholder="请输入密码"
        :attr="{maxlength:20,autocomplete:'off'}"
        v-model="password"
        :state="pwdStatus"
        @blur.native.capture="handle2"
        class="input"> 
      </mt-field>
      <mt-field 
        type="password"
        label="确认密码："
        placeholder="请再次输入密码"
        :attr="{maxlength:20,autocomplete:'off'}"
        v-model="conpassword"
        :state="conpwdStatus"
        @blur.native.capture="handle3"
        class="input"> 
      </mt-field>
      <!-- 账户信息结束 -->
      <!-- 登录注册按钮开始 -->
      <div  class="L_button">
       <mt-button @click="handle" class="register-button">免费注册</mt-button>
       <mt-button  class="login-button" @click="login()"> 已有账号,返回登录</mt-button>
      </div>
      <!-- 登录注册按钮结束 -->
    </div>    
  </div>
</template>
<style scoped>
  /* 顶部文字样式 */
  .header{
        background-color:#FFF;
        font:italic 20px "simhei";
        color: #000;
  }
  /* 注册登录按钮样式 */
    .register-button,.login-button{
      display:block;
      margin:17px auto;
      width: 240px;
      height: 40px;
      font:16px "Microsoft yahei";
      color: #FFF;
      border-radius: 20px;
      background-color: rgba(0, 183, 255, 0.815);
    }
    .login-button{
        background-color: rgb(7,193,96);
        margin-top: 17px;
    }
    /* a标签去除下划线 */
    a{
      text-decoration: none;
    }
    /* 图片居中 */
    img{
      display:block;
      margin:auto;
    }
    .input{
      margin-bottom: 10px;
    }
</style>
<script>
  export default {
    data(){
      return{
        username:'',
        password:'',
        conpassword:'',
        NameStatus:'',
        pwdStatus:'',
        conpwdStatus:''
      }
    },
    methods:{
      //返回登录跳转
      login(){
       this.$router.push("/login")
      },
      handle1(){
        // 1.验证用户名是否正确
        let userReg=/^[0-9a-zA-Z_@\.]{6,20}$/;
        if(userReg.test(this.username)){
          // console.log("用户名正确")
          this.NameStatus="success";
          return true
        }else{
          // console.log("用户名非法");
          this.NameStatus="error";
          // this.$toast("用户名非法")
          this.$toast({
            message:"用户名不正确",
            position:"top",
          });
          return false
        }
      },
      handle2(){
        // 2.验证密码是否正确
        let upwd=/^[0-9a-zA-Z_\.]{6,20}$/
        if(upwd.test(this.password)){
          // console.log("用户名正确")
          this.pwdStatus="success";
          return true
        }else{
          this.$toast({
            message:"密码不正确",
            position:"bottom"
          });
          this.pwdStatus="error";
          return false
        }
      },
      handle3(){
        // 3.验证确认密码是否正确
        if(this.conpassword!=""){
          if(this.password!=this.conpassword){
            this.$toast({
              message:"两次密码不一致",
              position:"bottom",
            });
            return false
            this.conpwdStatus="error";

          }else{
            this.conpwdStatus="success";
            return true
          }
        }
      },
      handle(){
        if(this.handle1() && this.handle2() && this.handle3()){
          // 将获取到的信息提交到web服务器
          this.axios.post('/register','username=' + this.username + '&password=' + this.password).then(res=>{
            // console.log(res.data)
            // 用户注册成功，跳转到登录页面
            if(res.data.code==1){
              // this.$toast({message:'注册成功'})
              this.$router.push('/login')
            }else{
              // this.$toast({message:'用户名已存在'})
              this.$messagebox('注册提示','用户名已被占用')
            }
          });
        }
      }
    }
  }
</script>