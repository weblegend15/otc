import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { Card, Rating, Icon, Avatar } from '../../components';

class Sidebar extends Component {
  renderSidebarLink = (url, iconName, text) => {
    return (
      <Link to={url} className="text-secondary">
        <Icon name={iconName} className="text-light h4 mr-4 mb-0" />
        <p className="mb-0">{text}</p>
      </Link>
    );
  };

  renderSocialIcon = (url, iconName) => {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="p-0"
        variant="link"
      >
        <Icon name={iconName} className="text-light h4" />
      </a>
    );
  };

  render() {
    const { currentUser, className } = this.props;

    return (
      <Card
        className={`app-sidebar d-none d-md-block border-0 mr-md-4 ${className}`}
      >
        <Card.Body className="p-0">
          <Row className="px-5 py-4 m-0">
            <Avatar data={currentUser} editable location="London, UK" />
          </Row>
          <Row className="app-sidebar-status px-5 py-4 m-0 text-primary">
            <Icon name="check-circle" className="mb-0 mr-3 h4" />
            <p className="my-auto d-inline">KYC/AML Verified</p>
          </Row>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem className="text-center p-0">
            <Row className="app-sidebar-review flex-column px-5 py-4 m-0">
              <Rating readonly initialRating={3.5} />
              <Link
                className="mt-3 text-secondary justify-content-center"
                to="/app/groups"
              >
                <p className="mb-0">All Feedback</p>
                <Icon
                  name="arrow-right"
                  className="h4 ml-2 mb-0 text-primary"
                />
              </Link>
            </Row>
            <Row className="d-flex justify-content-start px-5 pt-4 pb-3 m-0">
              {this.renderSidebarLink('/app/groups', 'star', 'Current Offers')}
            </Row>
            <Row className="d-flex justify-content-start px-5 pt-3 pb-4 m-0">
              {this.renderSidebarLink('/app/groups', 'history', 'Past Offers')}
            </Row>
          </ListGroupItem>
          <ListGroupItem className="px-5 py-4">
            {this.renderSidebarLink('/app/groups', 'users', 'My Groups')}
          </ListGroupItem>
          <ListGroupItem className="px-5 py-4">
            {this.renderSidebarLink('/app/groups', 'cog', 'Settings')}
          </ListGroupItem>
        </ListGroup>
        <Card.Body className="p-5 d-flex flex-row justify-content-around align-items-center">
          {this.renderSocialIcon('https://www.linkedin.com', 'linkedin')}
          {this.renderSocialIcon('https://www.linkedin.com', 'paper-plane')}
          {this.renderSocialIcon('https://www.facebook.com', 'facebook')}
          {this.renderSocialIcon('https://www.twitter.com', 'twitter')}
        </Card.Body>
      </Card>
    );
  }
}

export default Sidebar;
