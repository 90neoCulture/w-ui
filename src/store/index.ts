import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  getters: {
    double(state, getters){
      return state.count * 2;
    }
  },
  mutations: {
    increment(state, payload) {
      console.log(payload.amount);
      
      const num = payload.amount || 1;
      state.count += num;
    },
  },
})

export default store;
