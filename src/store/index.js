import Vuex from 'vuex';
import Vue from 'vue';
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        news: [],
        ask : [],
        jobs : []
    },
    getters: {
        fetchedAsk (state) {
            return state.ask;
        },
        fetchedNews (state) {
            return state.news;
        }
    },
    mutations,
    actions
});