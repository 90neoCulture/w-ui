<template>
  <div class="entry-container">
    <ul class="menus">
      <li v-for="(menu, index) in menuList" :key="menu.id" :class="{active: activeIndex === index}">
        <div @click="jumpToMenu(menu, index)">{{menu.name}}</div>
      </li>
    </ul>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
import { routes, router } from '../../router/index';
import { getMenuList } from '../../utils/utils';

export default {
  name: 'Entry',
  setup() {
    const res = getMenuList(routes);
    const menuList = reactive(res);
    let activeIndex = ref(0);

    const jumpToMenu = (menu, index) => {
      activeIndex.value = index;
      router.push(menu.name);
    };

    return { jumpToMenu, menuList, activeIndex };
  },
};
</script>

<style lang="less">
@import './index.less';
</style>