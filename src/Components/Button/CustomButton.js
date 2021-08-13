import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchTemperatures } from '../../Actions/temperatureActions';

import classes from './CustomButton.module.css'

const CustomButton = (props) => {
    const dispatch = useDispatch()
    const refreshButtonOnclickHandler = () => {
        dispatch(fetchTemperatures())
    }
    return (
        <button 
            onClick={refreshButtonOnclickHandler}
            className={`${classes.button} ${props.className}`}>{props.children}</button>
    );
}

export default CustomButton;