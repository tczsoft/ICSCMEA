import React from 'react'
import Contact from '../shared/components/Contact/Contact'
import HelmetComponent from './HelmetComponent'

function ContactPage() {
    return (
        <>
            <HelmetComponent title={'Contact - International Conference on Emerging Trends in Computer Science & Engineering'} canonical={'https://etcse-conference.org/contact'} />
            <Contact />
        </>
    )
}

export default ContactPage
