/* eslint-disable import/no-anonymous-default-export */
import {
  FETCH_TEMPERATURES,
  FETCH_TEMPERATURES_SUCCESS,
  FETCH_TEMPERATURES_FAILURE,
  TO_CELSIUS_TEMPERATURES,
  TO_FAHRENHEIT_TEMPERATURES,
  SET_SELECTED_TEMPERATURE_DAY,
} from '../Actions/types';
import { TEMPERATURE_VARIANTS } from '../Util/const';
import { convertTemperatureInDays } from '../Util/helpers';

const { FAHRENHEIT, CELSIUS } = TEMPERATURE_VARIANTS;

const initialState = {
  isLoading: false,
  temperatures: null,
  error: null,
  // DEFAULT
  temperatureType: FAHRENHEIT,
  selectedDayIndex: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEMPERATURES: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case FETCH_TEMPERATURES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        temperatures: action.payload,
        selectedDayIndex: 0
      };
    }
    case FETCH_TEMPERATURES_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    }
    case TO_CELSIUS_TEMPERATURES: {
      const { temperatures } = state;
      return {
        ...state,
        temperatureType: CELSIUS,
        temperatures: temperatures
          ? {
              ...temperatures,
              days: convertTemperatureInDays(temperatures.days, CELSIUS)
            }
          : null
      };
    }
    case TO_FAHRENHEIT_TEMPERATURES: {
      const { temperatures } = state;
      return {
        ...state,
        temperatureType: FAHRENHEIT,
        temperatures: temperatures
          ? {
              ...temperatures,
              days: convertTemperatureInDays(temperatures.days, FAHRENHEIT)
            }
          : null
      };
    }
    case SET_SELECTED_TEMPERATURE_DAY: {
      return {
        ...state,
        selectedDayIndex: action.payload
      };
    }
    default:
      return state;
  }
};
