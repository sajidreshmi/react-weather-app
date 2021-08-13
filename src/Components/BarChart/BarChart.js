import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';

import { prepareDataForBarChart } from '../../Util/helpers';

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};


const BarChart = () => {
    const { temperatures, selectedDayIndex } = useSelector(state => state.temperatures)

    const data = prepareDataForBarChart(selectedDayIndex, temperatures?.days);

    return (
        <Fragment>
            <Bar data={data} options={options} />
        </Fragment>
    )
}

export default BarChart
