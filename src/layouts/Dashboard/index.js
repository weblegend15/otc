import React, { Component } from 'react';
import { Timestamp, Card, Rating, Pagination, Badge } from '../../components';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      currentPage: 0,
    };
  }

  handleRating = value => {
    this.setState({ rating: value });
  };

  handlePageChange = value => {
    this.setState({ currentPage: value });
  };

  render() {
    const { rating, currentPage } = this.state;
    return (
      <Card className="m-4 p-4 text-center">
        <Timestamp />
        <hr />
        <Rating initialRating={rating} onChange={this.handleRating} />
        <p>Current rating: {rating}</p>
        <hr />
        <Pagination
          total={105}
          perPage={10}
          currentPage={currentPage}
          onChange={this.handlePageChange}
        />
        <p>Current Page: {currentPage + 1}</p>
        <hr />
      </Card>
    );
  }
}

export default Dashboard;
