# utils

工具

## 注释写法规范

````ts
/**
 * demo 函数的返回结果
 */
export interface DemoResult {
  /**
   * 标题
   */
  title: string;
}
/**
 * @status todo or finish
 * @author imeepos
 * @description 这是一个demo,用来演示util规范
 * @param {string} uid 用户id
 * @returns {DemoResult}
 * @body 根据uid查询出User
 * @example
 * ```ts
 * demo(1)
 * ```
 */
export function demo(uid: string): DemoResult {
  return {
    title: ''
  };
}
````

## 测试规范

```ts
import { demo } from './demo';
describe(`demo`, () => {
  it(`demo should return {title: ''}`, () => {
    expect(demo(`1`).title).toEqual(``);
  });
});
```

## 跑测试

Run `ng test utils` to execute the unit tests via [Jest](https://jestjs.io).

## 使用

```ts
import { demo } from '@ganker/utils';
const demoRes = demo(`1`);
```
