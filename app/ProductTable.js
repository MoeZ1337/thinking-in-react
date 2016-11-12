import React from 'react';

import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
  render() {
    const rows = [];
    let lastCategory = null;
    this.props.products.map(
      (product) => {
        if (product.name.indexOf(this.props.filterText) === -1 ||
           (!product.stocked && this.props.inStockOnly)) {
          return;
        }
        if (product.category !== lastCategory) {
          rows.push(
            <ProductCategoryRow category={product.category} key={product.category}/>
          );
        }
        rows.push(<ProductRow product={product} key={product.name}/>);
        lastCategory = product.category;
      }
    );
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>{this.props.filterText}</td></tr>
          {rows}
        </tbody>
      </table>
    );
  }
}

ProductTable.propTypes = {
  products: React.PropTypes.array,
  filterText: React.PropTypes.string,
  inStockOnly: React.PropTypes.bool,
};

export default ProductTable;
