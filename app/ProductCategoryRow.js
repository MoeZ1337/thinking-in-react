import React from 'react';

class ProductCategoryRow extends React.Component {
  render() {
    return (<tr><th colSapn="2">{this.props.category}</th></tr>);
  }
}

ProductCategoryRow.propTypes = {
  category: React.PropTypes.string,
};

export default ProductCategoryRow;
