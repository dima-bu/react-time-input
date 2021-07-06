import React, { useState, useEffect, useRef } from 'react'
import {isValid } from "./validate"

const TimeInput = ({initTime, disabled, mountFocus, onTimeChange, type, onFocusHandler, placeholder, className, name, onBlurHandler}) => {

    const [time, setTime] = useState(initTime || '');

    const _input = useRef(null)

    useEffect(() => {
        if (!disabled && mountFocus) {
            setTimeout(() => {
                _input.current.focus();
            }, 0);
        }
    });

    let lastVal = '';

    const onChangeHandler = (val) => {
        if (val == time) {
            return;
        }
        if (isValid(val)) {
            if (val.length === 2 && lastVal.length !== 3 && val.indexOf(':') === -1) {
                val = val + ':';
            }

            if (val.length === 2 && lastVal.length === 3) {
                val = val.slice(0, 1);
            }

            if (val.length > 5) {
                return false;
            }

            lastVal = val;

            setTime(val);

            if (val.length === 5) {
                onTimeChange(val);
            }
        }
    }

    const getType = () => {
        if (type) {
            return type;
        }
        return 'tel'
    }

    return (
        <input
            name={name ? name : undefined}
            className={className}
            type={getType()}
            disabled={disabled}
            placeholder={placeholder}
            value={time}
            onChange={(e) => onChangeHandler(e.target.value)}
            onFocus={(onFocusHandler) ? (e) => onFocusHandler(e) : undefined}
            onBlur={(onBlurHandler) ? (e) => onBlurHandler(e) : undefined}
            ref={_input}
        />
    );

}

TimeInput.defaultProps = {
    placeholder: ' '
}

export default TimeInput