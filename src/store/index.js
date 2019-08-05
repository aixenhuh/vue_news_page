import Vuex from 'vuex';
import Vue from 'vue';
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        // news: [],
        // ask : [],
        // jobs : [],
        users : [],
        items : {},
        list : [],
    },
    getters : {
        fetchedAsk(state) {
            return state.ask;
        },
        fetchedJobs(state) {
            return state.jobs;
        },
        fetchedNews (state) {
            return state.news;
        },
        fetchedUsers (state) {
            return state.users;
        },
        fetchedItems (state)  {
            return state.items;
        },
        fetchList (state) {
            return state.list;
        }
    },
    mutations,
    actions
});