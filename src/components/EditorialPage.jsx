import React from 'react'
import Editorial from '../shared/components/Editorial/Editorial'
import HelmetComponent from './HelmetComponent'

function EditorialPage() {
    return (
        <>
            <section>
                <HelmetComponent title={'Editorial - International Conference on Emerging Trends in Computer Science & Engineering'} canonical={'https://etcse-conference.org/editorial'} />
                <Editorial />
            </section>
        </>
    )
}

export default EditorialPage
