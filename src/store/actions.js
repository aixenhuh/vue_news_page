import {fetchNewsList,fetchAskList,fetchJobsList, fetchUserInfo, fetchItemsInfo, fetchList} from '../api/index.js'
export default {
    async FETCH_NEWS({commit}) {
        const response = await fetchNewsList();
        commit('SET_NEWS', response.data);
        return response;
    },
    async FETCH_ASK({commit}) {
        const response = await fetchAskList();
        commit('SET_ASK', response.data);
        return response;
    },
    async FETCH_JOBS({commit}) {
        try{
            const response = await fetchJobsList();
            commit('SET_JOBS', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    async FETCH_USERS({commit}, name){
        const response = fetchUserInfo(name);
        commit('SET_USERS', response.data);
        return response;
    },  
    async FETCH_ITEMS({commit}, item) {
        const response = await fetchItemsInfo(item);
        commit('SET_ITEMS', response.data);
        return response;
    },
    async FETCH_LIST({commit}, pageName) {
        const response = await fetchList(pageName);
        commit('SET_LIST', response.data);
        return response;
    }
}