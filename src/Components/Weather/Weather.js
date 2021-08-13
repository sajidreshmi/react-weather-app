import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from '@material-ui/core'

import BarChart from '../BarChart/BarChart'
import Error from '../Error/Error'
import Header from '../Header/Header'
import Slider from '../Slider/Slider'
import Spinner from '../Spinner/Spinner'

import { fetchTemperatures } from '../../Actions/temperatureActions'

const Weather = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTemperatures())

    }, [dispatch])
    const { isLoading, error } = useSelector(state => state.temperatures)
    return (
        isLoading ? (
            <Spinner />
        ) : error ? (
            <Error />
        ) : (
            <>
                <Header />
                <Container maxWidth="md">
                    <Slider />
                    <BarChart />
                </Container>
            </>
        )

    )

}

export default Weather
