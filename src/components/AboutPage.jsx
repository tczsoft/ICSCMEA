import React from 'react'
import About from '../shared/components/About/About'
import HelmetComponent from './HelmetComponent'

function AboutPage() {
    return (
        <>
            <HelmetComponent title={'About - International Conference on Emerging Trends in Computer Science & Engineering'} canonical={'https://etcse-conference.org/about'} />
            <About />
        </>
    )
}

export default AboutPage
