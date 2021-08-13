import axios from 'axios'

import { FORECAST_API } from '../Util/const';
import { temperatureInDays } from '../Util/helpers';
import {
  FETCH_TEMPERATURES,
  FETCH_TEMPERATURES_SUCCESS,
  FETCH_TEMPERATURES_FAILURE,
  TO_CELSIUS_TEMPERATURES,
  TO_FAHRENHEIT_TEMPERATURES,
  SET_SELECTED_TEMPERATURE_DAY,
} from './types';

export const fetchTemperatures = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_TEMPERATURES
    });
    const { data } = await axios.get(FORECAST_API)

    dispatch({
      type: FETCH_TEMPERATURES_SUCCESS,
      payload: {
        ...data,
        days: temperatureInDays(data.list)
      }
    });
  } catch (error) {
    dispatch({
      type: FETCH_TEMPERATURES_FAILURE,
      payload: error
    });
  }
};

export const convertToCelsius = () => (dispatch) => {
  dispatch({
    type: TO_CELSIUS_TEMPERATURES
  });
};

export const convertToFahrenheit = () => {
  return (dispatch) => {
    dispatch({
      type: TO_FAHRENHEIT_TEMPERATURES
    });
  }
};

export const setSelectedDayIndex = (index) => (dispatch) => {
  dispatch({
    type: SET_SELECTED_TEMPERATURE_DAY,
    payload: index
  });
};
