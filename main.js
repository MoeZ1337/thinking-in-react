import React from 'react';
import App from './app/FilterableProductTable.js';

const products = [
  {
    name: 'football',
    price: 123,
    stocked: true,
    category: 'Sporting Goods',
  },
  {
    name: 'baseball bat',
    price: 22,
    stocked: false,
    category: 'Sporting Goods',
  },
  {
    name: 'running shoes',
    price: 127773,
    stocked: true,
    category: 'Sporting Goods',
  },
  {
    name: 'ps3',
    price: 443,
    stocked: false,
    category: 'Entertainment',
  },
  {
    name: 'xbone',
    price: 1234123,
    stocked: false,
    category: 'Entertainment',
  },
  {
    name: 'pc masterrace',
    price: 44332,
    stocked: true,
    category: 'Entertainment',
  },
];

products.sort((a, b) => {
  return (a.category > b.category);
});

React.render(<App products={products}/>, document.getElementById('app'));
