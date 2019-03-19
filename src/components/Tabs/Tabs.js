import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import TabContent from './TabContent';

class TabHeaders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabKey: props.defaultActiveTab,
    };
  }

  renderTabHeader = (header, size) => (
    <Nav.Item as="li" key={header} className={`tab-header-${size}`}>
      <Nav.Link eventKey={header}>
        <p className="pb-3">{header}</p>
      </Nav.Link>
    </Nav.Item>
  );

  activeTabContent = (child) => {
    const { props } = child;
    const { everyKey, children } = props;
    const { tabKey } = this.state;

    return (
      <React.Fragment>
        {everyKey === tabKey && <TabContent>{children}</TabContent>}
      </React.Fragment>
    );    
  }

  render() {
    const { headers, children, size } = this.props;
    const { tabKey } = this.state;
    return (
      <React.Fragment>
        <Nav
          defaultActiveKey={tabKey}
          as="ul"
          activeKey={tabKey}
          onSelect={selectedKey => this.setState({ tabKey: selectedKey }) }
        >
          { headers.map(header => this.renderTabHeader(header, size))}
        </Nav>
        { children.map(child => (this.activeTabContent(child))) }
      </React.Fragment>
    );
  }
}

export default TabHeaders;