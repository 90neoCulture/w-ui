/* 题目1 */
/* const arr = [
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Jack' },
  { skill: 'javascript', user: 'Tom' },
  { skill: 'html', user: 'Sue' },
  { skill: 'css', user: 'Sue' },
  { skill: 'css', user: 'Bill' },
];
// 目标:
// [
//   { skill: 'javascript', user: [ 'Chad', 'Jack', 'Tom' ], count: 3 },
//   { skill: 'html', user: [ 'Sue' ], count: 1 },
//   { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 }
// ]

function pickArr(arr) {
  let options = {};
  const { key = 'skill', merge = 'user', count = 'count' } = options;
  const ret = arr.reduce((acc, item) => {
    const cKey = item[key];
    if (!acc[cKey]) {
      acc[cKey] = { [key]: cKey, [merge]: [], [count]: 0 };
    }
    acc[cKey][merge].push(item[merge]);
    acc[cKey][count]++;
    return acc;
  }, []);
  return Object.values(ret);
}
const result = pickArr(arr);
console.log(result); */


/* 题目2 */
/* var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
// 目标：{'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1}
function formatName(data){
  const ret = data.reduce((p, c) => {
    if(!p[c]){
      p[c] = 0;
    }
    p[c]++
    return p;
  }, {});
  return ret;
}

const result = formatName(names);
console.log(result); */


/* 题目3 */
/* var people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 },
];
// 目标：
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }

function pickData(data, option) {
  const ret = data.reduce((p, c) => {
    let ckey = c[option]
    if (!p[ckey]) {
      p[ckey] = [];
    }
    p[ckey].push(c);
    return p;
  }, {});
  return ret;
}

const result = pickData(people, 'age');
console.log(result); */

