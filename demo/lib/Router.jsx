import * as React from 'react';

export default class Router extends React.Component {
  render() {
    const p = this.props;
    return (
      <div>{p.children.filter(route => p.route === route.props.path)}</div>
    );
  }
}

Router.propTypes = {
  route: React.PropTypes.string.isRequired,
  children: React.PropTypes.arrayOf(
    React.PropTypes.element
  )
};
