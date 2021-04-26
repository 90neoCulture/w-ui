import { Store } from 'vuex';

const store = new Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state, payload) {
      let {count} = state;
      count += payload.amount;
    },
  },
});

export default store;
