<template>
  <div>
    button...
    <div>{{count}}</div>
    <button @click="increment">加1</button>
    <button @click="incrementTwo">加2</button>
  </div>
</template>

<script>
import store from '../../store';
export default {
  setup() {
    // const initialNum = 2;
    // const incrementTwo = (num = initialNum) => {
    //   store.commit('increment', num);
    // };
    // return incrementTwo;
  },
  methods: {
    increment() {
      store.commit('increment', {
        amount: 1
      });
    },
    incrementTwo (num = 2) {
      store.commit('increment', {
        amount: num
      });
    }
  },
};
</script>

<style>
</style>