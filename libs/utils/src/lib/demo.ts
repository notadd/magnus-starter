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
export function demo(title: string): DemoResult {
  return {
    title: title
  };
}

/**
 * @status finish
 * @author xiaoni-h
 * @solver zhangyan 2019.07.05
 * @description 这是一个关于函数的加法
 * @param {number}
 * @returns {number}
 * @body 输出它们的和
 */
export function sum(a: number, b: number): number {
  return a + b;
}

/**
 * @status finish
 * @author tangxiaonuo
 * @solver xiaomi-h 2019.07.05
 * @description 这是一个关于函数的乘法
 * @param {number}
 * @returns {number}
 * @body 输出它们的乘积(product)
 */
export function product(a: number, b: number): number {
  return a * b;
}

/**
 * @status finish
 * @author xiaoni-h
 * @solver  tangxiaonuo 2009.07.05
 * @param {number}
 * @description 这是一个从带返回的函数返回值
 * @returns {number}
 * @body 让接受参数的函数*5
 */
export function num(tom: number): number {
  return tom * 5;
}

/**
 * @status finish
 * @author tangxiaonuo
 * @solver zhixilu
 * @description 这是一个关于字符串反转
 * @param {string}
 * @returns {string}
 * @body 输出它们反转后的字符串
 */
export function reverse(rev: string): string {
  let str: string = '';
  for (let i = rev.length - 1; i >= 0; i--) {
    str += rev.charAt(i);
    //第二种方法
    //const arr = rev.split('');
    // let str: string = '';
    // for (let i = arr.length - 1; i >= 0; i--) {
    //   str += arr[i];
    // }
  }
  return str;
}
