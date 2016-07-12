import * as React from 'react';

export default class Route extends React.Component {
  render() {
    return this.props.component;
  }
}

Route.propTypes = {
  path: React.PropTypes.string.isRequired,
  component: React.PropTypes.element,
};
