<template>
  <div>
    <!-- 顶部开始 -->
    <header>
        <mt-header title="请登录您的账号" class="header">
            <!-- <router-link >
                <mt-button  icon="back"></mt-button>
            </router-link> -->
        </mt-header>
    </header>
     <!-- 顶部结束 -->
     <!--表单区域-->

  <div>
    <mt-field 
        type="text" 
        label="用户名" 
        placeholder="请输入用户名"
        :attr="{maxleng:20}"
        v-model="username"
        :state="NameStatus"
        @blur.native.capture="handle1">
    </mt-field>
    <mt-field 
        type="password" 
        label="密码" 
        placeholder="请输入密码"
        :attr="{maxleng:20,autocomplete:'off'}"
        v-model="password"
        :state="upwdStatus"
        @blur.native.capture="handle2">
    </mt-field>
    <mt-button @click="handle" class="login-button">用户登录</mt-button>
  </div>
</div>
</template>
<style scoped>
    .header{
        background-color:#FFF;
        font:italic 20px "simhei";
        color: #000;
    }
    .login-button{
        width: 240px;
        height: 40px;
        background-color: rgba(0, 183, 255, 0.815);
        font:16px "Microsoft yahei";
        color: #FFF;
        border-radius: 20px;
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
        this.axios.post('/login',this.qs.stringify(obj)).then(res=>{
          // 如果用户登录成功跳转到主页
          if(res.data.code==1){
            this.$router.push('/')
            // 否则弹出错误提示
          }else{
            this.$messagebox('登录提示','用户名或密码错误')
          }
        }) 
      }
    }
  }
}
</script>