import React, { Component } from 'react';

import Collapse from 'react-bootstrap/Collapse';

import Row from '../../Row';
import Col from '../../Col';
import Badge from '../../Badge';
import Button from '../../Button';
import GeneralAvatar from '../../Avatar/GeneralAvatar';

import { OFFER_STATUS_CLASS } from '../../../config';

export default class VouchesProposals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenVouches: false,
      isOpenProposals: false,
    };
  }

  handleClick = part => () => {
    const { isOpenProposals, isOpenVouches } = this.state;
    if (part === 'vouches') {
      this.setState({ isOpenVouches: !isOpenVouches, isOpenProposals: false });
    } else {
      this.setState({
        isOpenProposals: !isOpenProposals,
        isOpenVouches: false,
      });
    }
  };

  renderVouchesList = () => {
    const { vouches } = this.props;
    return (
      <div
        id="vouches-collapse-list"
        className="w-100 border-top border-default-color"
      >
        <Row className="px-4 py-2 mx-0">Vouches</Row>
        {vouches.map(item => (
          <Row
            key={item._id}
            className="border-bottom border-default-color mx-0 py-2 px-4"
          >
            <GeneralAvatar
              data={{
                firstName: 'John',
                lastName: 'Smith',
                location: 'London, UK',
              }}
            />
          </Row>
        ))}
      </div>
    );
  };

  renderProposalsList = () => {
    const { proposals } = this.props;
    return (
      <div
        id="proposals-collapse-list"
        className="w-100 border-top border-default-color"
      >
        <Row className="mx-0 py-2 px-4">
          <Col md={5} className="p-0">
            Proposals
          </Col>
          <Col md={3} className="p-0 text-center">
            Vouches
          </Col>
          <Col md={4} className="p-0" />
        </Row>
        {proposals.map(item => (
          <Row className="mx-0 border-bottom border-default-color px-4 py-2 d-flex align-items-center">
            <Col md={5} className="p-0">
              <GeneralAvatar
                data={{
                  firstName: 'John',
                  lastName: 'Smith',
                  location: 'London, UK',
                }}
              />
            </Col>
            <Col
              md={3}
              className="text-primary font-weight-bold p-0 text-center"
            >
              2
            </Col>
            <Col
              md={4}
              className={`text-uppercase font-weight-bold p-0 text-right text-${
                OFFER_STATUS_CLASS[item.status.toLowerCase()]
              }`}
            >
              {item.status}
            </Col>
          </Row>
        ))}
      </div>
    );
  };

  render() {
    const { vouches, proposals } = this.props;

    const { isOpenVouches, isOpenProposals } = this.state;
    return (
      <div className="d-flex flex-column align-items-center justify-content-center">
        <Row className="mx-0 mb-3">
          <Button
            className="mr-3 text-primary"
            onClick={this.handleClick('vouches')}
            aria-controls="vouches-collapse-list"
            aria-expanded={isOpenVouches}
            variant="outline-link"
          >
            Vouches{' '}
            <Badge
              variant="primary"
              className="px-0 text-center font-weight-semibold rounded-circle"
            >
              {vouches.length}
            </Badge>
          </Button>
          <Button
            className="text-primary"
            onClick={this.handleClick('proposals')}
            aria-controls="proposals-collapse-list"
            aria-expanded={isOpenProposals}
            variant="outline-link"
          >
            Proposals{' '}
            <Badge
              variant="primary"
              className="px-0 text-center font-weight-semibold rounded-circle"
            >
              {proposals.length}
            </Badge>
          </Button>
        </Row>
        <Collapse in={isOpenVouches}>{this.renderVouchesList()}</Collapse>
        <Collapse in={isOpenProposals}>{this.renderProposalsList()}</Collapse>
      </div>
    );
  }
}
