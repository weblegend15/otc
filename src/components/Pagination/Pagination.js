import React, { Component } from 'react';
import Icon from '../Icon';
import Button from '../Button';

const PaginationButton = ({ onClick, disabled, iconName }) => (
  <Button variant="link" onClick={onClick} disabled={disabled}>
    <Icon name={`angle-${iconName}`} className="h4 m-0" color="light" />
  </Button>
);

class CustomPagination extends Component {
  onPageChange = pageNum => {
    const { onChange } = this.props;
    onChange(pageNum);
  };

  onPrev = () => {
    const { currentPage } = this.props;
    this.onPageChange(currentPage - 1);
  };

  onNext = () => {
    const { currentPage } = this.props;
    this.onPageChange(currentPage + 1);
  };

  get pageCount() {
    const { total, perPage } = this.props;
    return Math.ceil(total / perPage) || 1;
  }

  renderPages = () => {
    const { currentPage, perPage, total } = this.props;
    const { pageCount } = this;
    const from = currentPage * perPage + 1;
    const to =
      currentPage === pageCount - 1 ? total : (currentPage + 1) * perPage;

    if (total === 1) {
      return <p className="my-0 mx-3">1 of 1</p>;
    }

    return <p className="my-0 mx-3">{`${from} .. ${to}  of  ${total}`}</p>;
  };

  render() {
    const { currentPage, onChange, className } = this.props;
    const { pageCount } = this;

    return (
      <div
        className={`pagination d-flex flex-row justify-content-center align-items-center ${className}`}
      >
        <PaginationButton
          onClick={() => onChange(0)}
          disabled={currentPage === 0}
          iconName="double-left"
        />
        <PaginationButton
          onClick={this.onPrev}
          disabled={currentPage === 0}
          iconName="left"
        />
        {this.renderPages()}
        <PaginationButton
          onClick={this.onNext}
          disabled={currentPage === pageCount - 1}
          iconName="right"
        />
        <PaginationButton
          onClick={() => onChange(pageCount - 1)}
          disabled={currentPage === pageCount - 1}
          iconName="double-right"
        />
      </div>
    );
  }
}

export default CustomPagination;
