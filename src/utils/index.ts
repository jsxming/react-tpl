import {cloneDeep} from 'lodash-es';
const obj = {
  name: 'name',
};
const obj2 = cloneDeep(obj);
console.log(obj2, '----------------------------------');
export const add = (a: number, b: number) => {
  return a + b;
};
