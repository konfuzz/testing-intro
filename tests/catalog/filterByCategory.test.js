const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const filtered = filterByCategory(products, 'all');
    expect(filtered.map(x => x.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const filtered = filterByCategory(products, undefined);
    expect(filtered.map(x => x.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const filtered = filterByCategory(products, '');
    expect(filtered.map(x => x.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("'electronics' возвращает товары с ID [1, 2]", () => {
    const filtered = filterByCategory(products, 'electronics');
    expect(filtered.map(x => x.id)).toEqual([1, 2]);
  });
  test("'books' возвращает товары с ID [3, 6]", () => {
    const filtered = filterByCategory(products, 'books');
    expect(filtered.map(x => x.id)).toEqual([3, 6]);
  });
  test("'home' возвращает товары с ID [4, 5]", () => {
    const filtered = filterByCategory(products, 'home');
    expect(filtered.map(x => x.id)).toEqual([4, 5]);
  });
  test("'clothes' возвращает пустой массив", () => {
    const filtered = filterByCategory(products, 'clothes');
    expect(filtered).toEqual([]);
  });
  test("'toys' возвращает пустой массив", () => {
    const filtered = filterByCategory(products, 'toys');
    expect(filtered).toEqual([]);
  });
  test("'sports' возвращает пустой массив", () => {
     const filtered = filterByCategory(products, 'sports');
     expect(filtered).toEqual([]);
  });
});
