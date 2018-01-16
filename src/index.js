import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Smoke extends React.Component {
	render() {
	return (
		<button className="smoke">
			{this.props.value}
		</button>
	);
	}
}

class Stats extends React.Component {
	render() {
		return (
			<div className="status">
				<h1>You don't want to buy any death sticks</h1>
			</div>
		);
	}
}

class Clock extends React.Component {
	renderButton(i) {
		return <Smoke value={i} />;
	}

	render() {
		const status = 'Time between';

		return (
			<div>
				<div className="status">{status}</div>
				<div className="timer">{this.getTime()}</div>
				<div className="row3">
					{this.renderButton('smoke')}
					{this.renderButton('cheat')}
					{this.renderButton(' ')}
				</div>
				<div className="row2">
					{this.renderButton('new pack')}
					<Stats />
				</div>
			</div>
		);
	}
}

class Life extends React.Component {
	render() {
		return (
			<div className="life">
				<div className="clock">
					<Clock />
				</div>
				<div className="life-choices">
					<div>{/*status*/}</div>
					<ol>{/* todo */}</ol>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<Life />, document.getElementById('root')
);

