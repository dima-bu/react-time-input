import React from 'react';
import ReactDOM from 'react-dom';

var TimeInput = React.createClass({

	getInitialState() {
		return {
			time: this.props.initTime || ''
		}
	},

	componentDidMount() {
		if (!this.props.disabled && this.props.mountFocus) {
			setTimeout(()=> {
				this._input.focus();
			}, 0);
		}
	},

	componentDidUpdate(){

		if (this.props.mountFocus) {
			setTimeout(()=> {
				this._input.focus();
			}, 0);
		}
	},

	isValid (val) {

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

	onChangeHandler () {

		var val = this._input.value;

		if (this.isValid(val)) {

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

			this.setState({
				time: val
			});

			this.props.onTimeChange(val);

		}

	},

	render () {
		return (
			<input
				className={this.props.className || 'form-control'}
				type="tel"
				disabled={this.props.disabled}
				placeholder=" "
				value={this.state.time}
				onChange={this.onChangeHandler}
				ref={(c) => this._input = c}
			/>
		);
	}
});

export default TimeInput;
