import React from 'react';

class ProductRow extends React.Component {
  render() {
    const name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{ color: 'red' }}>
        { this.props.product.name }
      </span>;
    return (
      <tr>
        <td>{name}</td>
        <td>${this.props.product.price}</td>
      </tr>
    );
  }
}

ProductRow.propTypes = {
  product: React.PropTypes.object,
};

export default ProductRow;
