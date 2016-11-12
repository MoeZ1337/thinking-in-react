import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.inputChanged = this.inputChanged.bind(this);
  }

  inputChanged() {
    this.props.filter(this.searchInput.value);
  }

  render() {
    return (
      <div>
        <input ref={node => this.searchInput = node} type="text" placeholder="Search..." onChange={this.inputChanged}/>
        <input type="checkbox" onClick={this.props.toggleStockOnly}/>
        <label>Only show products in stock</label>
      </div>
    );
  }
}

SearchBar.propTypes = {
  filter: React.PropTypes.func.isRequired,
  toggleStockOnly: React.PropTypes.func.isRequired,
};

export default SearchBar;
