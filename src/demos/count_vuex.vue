<template>
  <div>
    button...
    <div>{{count}}</div>
    <div>{{double}}</div>
    <button @click="increment">加1</button>
    <button @click="incrementTwo">加2</button>
  </div>
</template>

<script>
import { useStore, mapState, mapMutations, mapGetters } from 'vuex';
import { computed } from 'vue';
export default {
  setup() {
    const store = useStore();
    const countStep = 1;
    const countStepTwo = 2;
    return {
      count: computed(() => store.state.count),
      double: computed(() => store.getters.double),
      increment: () => store.commit('increment', {
        amount: countStep
      }),
      incrementTwo: () =>
        store.commit('increment', {
          amount: countStepTwo,
        }),
    };
  },
  // computed: {
  //   ...mapState(['count']),
  //   ...mapGetters(['double']),
  // },
  // methods: {
  //   ...mapMutations(['increment']),
  //   increment() {
  //     this.$store.commit('increment', {
  //       amount: 1
  //     });
  //   },
  //   incrementTwo() {
  //     this.$store.commit('increment', {
  //       amount: 2,
  //     });
  //   },
  // },
};
</script>

<style>
</style>