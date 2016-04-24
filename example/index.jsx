//require("./node_modules/bootstrap/dist/css/bootstrap.min.css")
import React from 'react';
import ReactDOM from 'react-dom';
import TimeInput from './../src/timeInput.jsx';


var TimeWrapper = React.createClass({

	getInitialState: function () {
		return {time: '11:22'};
	},

	onTimeChangeHandler: function (timeInput) {
		this.setState({
			time: timeInput
		});
	},

	render: function() {
		return (
			<TimeInput
				className='form-control'
				onTimeChange={this.onTimeChangeHandler}
				time={this.state.time}
				/>
		);
	}
});


export class App extends React.Component {
	render() {
		return (
				<TimeWrapper/>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
