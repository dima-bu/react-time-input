import React from 'react';
import ReactDOM from 'react-dom';
import TimeInput from './../src/timeInput.jsx';


var TimeWrapper = React.createClass({
	onFocusHandler:function(event){
		console.log("hello there you entered :  my name is ",event.target.name);
	},
	onBlurHandler:function(event){
		console.log("you left ");
	},
	onTimeChangeHandler: function (val) {
		if (val.length === 5) {
			// do something with this value
		}
	},

	render: function() {
		return (
			<TimeInput
				name="example"
				initTime='11:12'
				ref="TimeInputWrapper"
				className='s-input -time'
				mountFocus='true'
				onTimeChange={this.onTimeChangeHandler}
				onFocusHandler={this.onFocusHandler}
				onBlurHandler={this.onBlurHandler}
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
