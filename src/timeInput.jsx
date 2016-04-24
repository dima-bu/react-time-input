import React from 'react';
import ReactDOM from 'react-dom';

var TimeInput = React.createClass({

	isVlid: function (val) {

		switch (val.length) {
			case 0:
				return true;
				break;
			case 1:
				if (parseInt(val, 10) <= 2) {
					return true;
				}
				break;
			case 2:
				if (parseInt(val, 10) <= 23) {
					return true;
				}
				break;
			case 3:
				return true;
				break;
			case 4:
				if (parseInt(val.slice(3, 4), 10) <= 5) {
					return true;
				}
				break;
			case 5:
				if (parseInt(val.slice(3, 5), 10) <= 59) {
					return true;
				}
				break;
			default:
				return false;
		}

	},

	lastVal: '',

	onChangeHandler: function () {

		var val = this.refs.timeInput.value;

		if (this.isVlid(val)) {

			if (val.length === 2 && this.lastVal.length !== 3) {
				val = val + ':';
			}

			if (val.length === 2 && this.lastVal.length === 3) {
				val = val.slice(0, 1);
			}

			if (val.length > 5) {
				return false;
			}

			this.lastVal = val;
			this.props.onTimeChange(val);

		}

	},

	render: function () {
		return (
			<input
				className={this.props.className || 'form-control'}
				type="text"
				placeholder="Time"
				value={this.props.time}
				onChange={this.onChangeHandler}
				ref="timeInput"
				/>
		);
	}
});

export default TimeInput;
