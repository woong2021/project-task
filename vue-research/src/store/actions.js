import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo } from '../api/index.js';

export default {
  FETCH_NEWS({ commit }){
    fetchNewsList()
      .then(({ data }) => {
        commit('SET_NEWS', data); // mutations 에 데이터 넘김
      })
      .catch(error => {
        console.log(error);
      })
  },

  FETCH_JOBS( { commit }){
    fetchJobsList()
      .then(({ data }) => {
        commit('SET_JOBS', data);
      })
      .catch(error => {
        console.log(error);
      })
  },

  FETCH_ASK({ commit }){
    fetchAskList()
      .then(({ data }) => {
        commit('SET_ASK', data);
      })
      .catch(error => {
        console.log(error);
      })
  },

  FETCH_USER({ commit }, name){
    fetchUserInfo(name)
      .then(({ data }) =>{
        commit('SET_USER', data)
      })
      .catch(error => {
        console.log(error);
      })
  }
}