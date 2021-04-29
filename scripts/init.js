const routes = require('./index');
const fs = require('fs');


const createFile=(comp)=>{
  fs.mkdir(`../src/components/${comp}`,()=>{
    console.log('目录创建成功');
  });
  fs.writeFile(`../src/components/${comp}/index.tsx`, `
const ${comp} = function(){
  return (
    <div>${comp}...</div>
  )
}
export default ${comp};
  `, ()=>{
    console.log('写入成功');
  });
  fs.mkdir(`../src/examples/${comp}`,()=>{
    console.log('目录创建成功');
  });
  fs.writeFile(`../src/examples/${comp}/index.vue`, `
<template>
  <div>
    ${comp}...
  </div>
</template>

<script>

</script>

<style>
@import './index.less';
</style>
  `, ()=>{
    console.log('写入成功');
  });
  fs.writeFile(`../src/examples/${comp}/index.less`, '', ()=>{
    console.log('写入成功');
  });
}
// 根据路由名称批量创建文件
// routes.forEach(r => {
//   createFile(`${r.name.substr(0,1).toLocaleUpperCase()}${r.name.substr(1)}`);
// })

const createRoutes = (routes) => {
  let importArr = [];
  let routeArr = [];
  routes.forEach(r => {
    let compName = `${r.name.substr(0,1).toLocaleUpperCase()}${r.name.substr(1)}`;
    let obj = {path: `/${r.name}`,name: r.name,component: compName};
    let str = `const ${compName} = () => import('../../examples/${compName}/index.vue');`
    routeArr.push(JSON.stringify(obj));
    importArr.push(str);
  })
  fs.writeFile('routes.js', `
  ${routeArr}
  ${importArr.join('')}
  `, ()=>{
    console.log('创建路由文件成功');
  })
}
// 根据路由名称批量生成路由
// createRoutes(routes);