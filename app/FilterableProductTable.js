import React from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false,
    };

    this.filter = this.filter.bind(this);
    this.toggleStockOnly = this.toggleStockOnly.bind(this);
  }

  filter(newText) {
    this.setState({ filterText: newText });
  }

  toggleStockOnly() {
    this.setState({ inStockOnly: !this.state.inStockOnly });
  }

  render() {
    return (
      <div>
        Some text
        <SearchBar filter={this.filter} toggleStockOnly={this.toggleStockOnly}/>
        <ProductTable products={this.props.products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}/>
      </div>
    );
  }
}

FilterableProductTable.propTypes = {
  products: React.PropTypes.array,
};

export default FilterableProductTable;
