import React from 'react';

var TimeInput = React.createClass({

    getInitialState() {
        return {
            time: this.props.initTime || ''
        }
    },

    getDefaultProps() {
        return {
            placeholder: ' ',
        };
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

    componentWillReceiveProps (nextProps) {
        if (nextProps.initTime) {
            this.onChangeHandler(nextProps.initTime);
        }
    },

    isValid (val) {

        var letterArr = val.split(':').join('').split(''),
            regexp = /^\d{0,2}?\:?\d{0,2}$/,
            valArr = [];

        if (!regexp.test(val)) {
            return false
        }

        // check each letter

        if (letterArr[0] && (
                parseInt(letterArr[0], 10) < 0 || (parseInt(letterArr[0], 10) > 2)
            )) {
            return false
        }

        if (letterArr[2] && ((
                parseInt(letterArr[2], 10) < 0 || parseInt(letterArr[2], 10) > 5)
            )) {
            return false
        }

        if (valArr.indexOf(':')) {
            valArr = val.split(':');
        } else {
            valArr.push(val);
        }

        // check mm and HH
        if (valArr[0] && valArr[0].length && (parseInt(valArr[0], 10) < 0 || parseInt(valArr[0], 10) > 23)) {
            return false
        }

        if (valArr[1] && valArr[1].length && (parseInt(valArr[1], 10) < 0 || parseInt(valArr[1], 10) > 59)) {
            return false
        }

        return true;


    },

    lastVal: '',

    onChangeHandler (val) {
        if (val == this.state.time) {
            return;
        }
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

    getType(){
        if (this.props.type) {
            return this.props.type
        }
        return 'tel'
    },

    render () {
        return (
            <input
                name={(this.props.name)? this.props.name : undefined}
                className={this.props.className}
                type={this.getType()}
                disabled={this.props.disabled}
                placeholder={this.props.placeholder}
                value={this.state.time}
                onChange={(e) => this.onChangeHandler(e.target.value)}
                onFocus={(this.props.onFocusHandler)?(e) => this.props.onFocusHandler(e):undefined}
                onBlur={(this.props.onBlurHandler)? (e) => this.props.onBlurHandler(e):undefined}
                ref={(c) => this._input = c}
                />
        );
    }
});

export default TimeInput;
