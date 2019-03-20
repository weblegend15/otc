import React, { Component, Fragment } from 'react';
import IconButton from '../Buttons/IconButton';

class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      on: props.on,
    };
  }

  closeTooltip = () => {
    this.setState({ on: false });
  }

  renderTooltip = () => {
    const { children, icon } = this.props;

    return (
      <div data-toggle='tooltip'>
        <IconButton
          onClick={() => this.closeTooltip()}
          icon={icon}
          size='lg'
          variant='link'  
        />
        {children}
        <div className='triangle' />
      </div>
    );
  }

  render() {
    const { on } = this.state;
    return (
      <Fragment>
        {on && this.renderTooltip()}
      </Fragment>
    );
  }
}

export default Tooltip;