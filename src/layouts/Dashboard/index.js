import React, { Component } from 'react';

import { Timestamp, Card, Rating } from '../../components';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };
  }

  handleRating = (value) => {
    this.setState({ rating: value });
  }

  render() {
    const { rating } = this.state;
    return (
      <div>
        <Card className="m-4 p-4">
          dashboard
          <br />
          <Timestamp />
          <Rating
            initialRating={rating}
            onChange={this.handleRating}
          />
          <p>Current rating: {rating}</p>
        </Card>
      </div>
    );
  }
};

export default Dashboard;
