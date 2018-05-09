import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        isLogin:false,
        usersInfo:{},
        getUsersInfoDone:false,
        adminInfo:{}
    },
    mutations:{
        setLogin(state,payload){
            state.isLogin = payload.isLogin;
        },
        setUsersInfo(state,payload){
            state.usersInfo = payload;
        },
        setGetUsersInfoDone(state,payload){
            state.getUsersInfoDone = payload.done;
        },
        setAdminInfo(state,payload){
            state.adminInfo= payload;
        }
    },
    actions:{}
})
export default store