import { TEMPERATURE_VARIANTS } from './const';
import {
  convertDegType,
  temperatureInDays,
  avgPropInList,
  convertTemperatureInDays,
  prepareDataForBarChart
} from './helpers';
import { avgPropListData, dayObj, hourListResData, hoursListData, tempInDaysInput, tempInDaysRes } from './testData';

describe('initializeFormElement function', () => {
  it('should test convertDegType fn if converted to temperature is not a type', () => {
    expect(convertDegType('Dummy string', 10)).toBeNull();
  });

  it('should test convertDegType fn if converted to temperature is Celsius', () => {
    expect(convertDegType(TEMPERATURE_VARIANTS.CELSIUS, 50)).toEqual(10);
  });

  it('should test convertDegType fn if converted to temperature is Fahrenheit', () => {
    expect(convertDegType(TEMPERATURE_VARIANTS.FAHRENHEIT, 10)).toEqual(50);
  });

  it('should test temperatureInDays fn', () => {
    const hoursList = hoursListData;

    const res = tempInDaysRes;
    expect(temperatureInDays(hoursList)).toStrictEqual(res);
  });

  it('should test convertTemperatureInDays fn', () => {
    const inputObj = tempInDaysInput;

    expect(
      convertTemperatureInDays(inputObj, TEMPERATURE_VARIANTS.CELSIUS)[
        '2021-04-13'
      ]['avgTemperature']
    ).toEqual(134.96);
  });

  it('should test avgPropInList fn', () => {
    const arr = avgPropListData;
    expect(avgPropInList(arr)).toEqual(275.51);
  });

  it('should test prepareDataForBarChart fn', () => {
    const selectedDayIndex = 0;
    const daysObj = dayObj;
    const res = hourListResData;
    expect(prepareDataForBarChart(selectedDayIndex, daysObj)).toEqual(res);
  });
});
