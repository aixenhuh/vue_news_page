import {fetchNewsList,fetchAskList,fetchJobsList, fetchUserInfo, fetchItemsInfo} from '../api/index.js'
export default {
    FETCH_NEWS(context) {
        fetchNewsList().then(response=> {
            context.commit('SET_NEWS', response.data);
        }).catch(error => {
            console.log(error);
        })
    },
    FETCH_ASK({commit}) {
        fetchAskList().then(({data}) => {
            commit('SET_ASK', data);
        }).catch(err => console.log(err));
    },
    FETCH_JOBS({commit}) {
        fetchJobsList().then(({data}) => {
            commit('SET_JOBS', data);
        }).catch(err => console.log(err))
    },
    FETCH_USERS({commit}, name){
        fetchUserInfo(name).then(({data}) => {
            commit('SET_USERS', data)
        }).catch(err => console.log(err))
    },
    FETCH_ITEMS({commit}, item) {
        fetchItemsInfo(item).then(({data}) => {
            commit('SET_ITEMS', data)
        }).catch(err => console.log(err))
    }
}