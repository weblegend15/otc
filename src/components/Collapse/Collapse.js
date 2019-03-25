import React, { Component } from 'react';
import BSCollapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Icon from '../Icon';

class Collapse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {
    const { title, text, ...rest } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="m-2 custom-collapse" {...rest}>
        <Row>
          <Button
            className="custom-collapse-trigger d-flex align-items-center justify-content-center"
            onClick={() => this.setState({ isOpen: !isOpen })}
            aria-controls="custom-collapse-text"
            aria-expanded={isOpen}
            variant="link"
          >
            <Icon
              className="d-flex align-items-center justify-content-center"
              name={isOpen ? 'minus' : 'plus'}
            />
            {title}
          </Button>
        </Row>
        <BSCollapse in={isOpen}>
          <div className="ml-4 my-4 p-3 custom-collapse-text">
            <div className="custom-collapse-arrow arrow" />
            <p>{text}</p>
          </div>
        </BSCollapse>
      </div>
    );
  }
}

export default Collapse;
