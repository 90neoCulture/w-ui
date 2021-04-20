<template>
  <button @click="add">{{count}}</button>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup() {
    let count = ref(2);
    function add() {
      count.value += 1;
    }
    return { count, add };
  },
};
</script>
