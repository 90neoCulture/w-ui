import { nanoid } from 'nanoid';

interface menuType {
  id: undefined | string;
  name: string;
  path: undefined | string;
  redirect: undefined | string;
  children: undefined | menuType[];
  component: () => void | undefined;
}

export const getMenuList = (routes: menuType[]) => {
  let arr = [];
  routes.forEach((route: menuType) => {
    if (route.children) {
      const result = route.children.map((r: menuType) => {
        return { ...r, id: nanoid() };
      });
      arr.push(...result);
    }
  });
  return arr;
};
