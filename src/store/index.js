import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //标识用户是否已经登录
    isLogined:localStorage.getItem('isLogined') ? localStorage.getItem('isLogined') : 0,
    username:localStorage.getItem('username')?localStorage.getItem('username'):''
  },
  mutations: {
    logined(state,payload){
      state.isLogined = 1;
      state.username = payload.username;
      localStorage.setItem('username',payload.username);
    },
    logout(state){
      state.isLogined = 0;
      state.username = '0';
      localStorage.removeItem('isLogined');
      localStorage.removeItem('username');
    }
  },
  actions: {
    login(context,payload){
      //发送异步请求
      axios.post('/login',qs.stringify(payload)).then(res=>{
        // 如果用户登录成功跳转到主页
        if(res.data.code==1){
          //提交Mutations
          context.commit('logined',res.data.info);
          localStorage.setItem('isLogined','1');
          router.push('/me');
        } else {

        }
      });
    }
  },
  modules: {
    
  }
})
