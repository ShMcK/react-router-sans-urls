require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';

import Router from '../lib/Router';
import Route from '../lib/Route';
import First from './components/First';
import Second from './components/Second';

export class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			route: 'first',
		};
	}
	setRoute(route) {
		this.setState({route});
	}
	render() {
		return (
			<div className='container'>
				<h3>React-Router Sans-URL</h3>

				<div className='container'>
					<button onClick={this.setRoute.bind(this, 'first')}>
						First
					</button>
					<button onClick={this.setRoute.bind(this, 'second')}>
						Second
				</button>
				</div>

				<div className='container'>
					<Router route={this.state.route}>
						<Route path='first' component={<First />}/>
						<Route path='second' component={<Second />}/>
					</Router>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#app"));
