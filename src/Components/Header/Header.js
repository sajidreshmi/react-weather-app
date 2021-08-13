import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { convertToCelsius, convertToFahrenheit } from '../../Actions/temperatureActions';
import RadioLabel from '../RadioLabel/RadioLabel';
import { TEMPERATURE_VARIANTS } from '../../Util/const';
import CustomButton from '../Button/CustomButton'

import classes from './Header.module.css'

const Header = () => {
    const { temperatureType } = useSelector(state => state.temperatures);
    const { CELSIUS, FAHRENHEIT } = TEMPERATURE_VARIANTS;
    const dispatch = useDispatch()
    const radioChangeHandler = (event) => {
        const tempVal = event.target.value;
        if (tempVal === FAHRENHEIT) {
            dispatch(convertToFahrenheit())
        } else {
            dispatch(convertToCelsius())
        }
    };
    return (
        <Fragment>
            <AppBar position="fixed">
                <Toolbar>{/* content */}</Toolbar>
            </AppBar>
            <RadioGroup
                aria-label="temperatureType"
                name="temperatureType"
                value={temperatureType}
                onChange={radioChangeHandler}
                className={classes.RadioGroup}
            >
                <FormControlLabel
                    value={FAHRENHEIT}
                    control={<Radio color={'primary'} />}
                    label={<RadioLabel>{FAHRENHEIT}</RadioLabel>}
                />
                <FormControlLabel
                    value={CELSIUS}
                    control={<Radio color={'primary'} />}
                    label={<RadioLabel>{CELSIUS}</RadioLabel>}
                />
            </RadioGroup>
            <CustomButton>Refresh</CustomButton>
        </Fragment>
    )
}

export default Header
