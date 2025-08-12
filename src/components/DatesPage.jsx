import React from 'react'
import Dates from '../shared/components/Dates/Dates'
import HelmetComponent from './HelmetComponent'

function DatesPage() {
    return (
        <>
            <HelmetComponent title={'Dates - International Conference on Emerging Trends in Computer Science & Engineering'} canonical={'https://etcse-conference.org/dates'} />
            <Dates />
        </>
    )
}

export default DatesPage
