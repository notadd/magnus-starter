import { demo, sum, product, num, reverse } from './demo';

describe(`demo`, () => {
  it(`demo should return {title: string}`, () => {
    expect(demo(`1`).title).toEqual(`1`);
  });
  it('sum return a+b', () => {
    expect(sum(1, 2)).toBe(3);
  });
  it('product', () => {
    expect(product(2, 2)).toBe(4);
  });
  it('num should return {tom*5}', () => {
    expect(num(2)).toBe(10);
  });
  it('string', () => {
    expect(reverse('123456')).toBe('654321');
  });
});
