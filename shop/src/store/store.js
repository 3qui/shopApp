import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const state = {
    httpError:{
        hasError:false,
        status:'',
        statusText:'',
    },
    tabbarSelect: '首页',
    footerShow:true,
    pageRouter:'/'
}

const mutations = {
    ON_HTTP_ERROR(state,payload){
        state.httpError=payload
    },
    TAB_SELECT(state, payload){
        state.tabbarSelect=payload
    },
    FOOTER_SHOW(state, payload){
        state.footerShow = payload
    }
}

const actions = {
    tab_seclect_actions(context,value){
        context.commit('TAB_SELECT',value)
    },
    footer_show_actions(context,value){
        context.commit('FOOTER_SHOW', value)
    }
}

export default new Vuex.Store({
    actions,
    state,
    mutations
})