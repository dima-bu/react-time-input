import React from 'react';
import ReactDOM from 'react-dom';
import TimeInput from './../src/timeInput.jsx';


var TimeWrapper = React.createClass({


	onTimeChangeHandler: function (val) {
		if (val.length === 5) {
			// do something with this value
		}
	},

	render: function() {
		return (
			<TimeInput
				initTime='11:12'
				ref="TimeInputWrapper"
				className='s-input -time'
				mountFocus='true'
				onTimeChange={this.onTimeChangeHandler}
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
