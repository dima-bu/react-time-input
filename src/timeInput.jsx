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

        var isValid = true,
            letterArr = val.split(':').join('').split(''),
            regexp = /^\d{0,2}?\:?\d{0,2}$/,
            valArr = [];

        if (!regexp.test(val)) {
            isValid = false
        }

        // check each letter

        if (letterArr[0] && (
                parseInt(letterArr[0], 10) < 0 || (parseInt(letterArr[0], 10) > 2)
            )) {
            isValid = false
        }

        if (letterArr[2] && ((
                parseInt(letterArr[2], 10) < 0 || parseInt(letterArr[2], 10) > 5)
            )) {
            isValid = false
        }

        if (valArr.indexOf(':')) {
            valArr = val.split(':');
        } else {
            valArr.push(val);
        }

        // check mm and HH
        if (valArr[0] && valArr[0].length && (parseInt(valArr[0], 10) < 0 || parseInt(valArr[0], 10) > 23)) {
            isValid = false
        }

        if (valArr[1] && valArr[1].length && (parseInt(valArr[1], 10) < 0 || parseInt(valArr[1], 10) > 59)) {
            isValid = false
        }

        return isValid;


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

            if (val.length === 5) {
                this.props.onTimeChange(val);
            }

        }

    },

    render () {
        return (
            <input
                className={this.props.className}
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
