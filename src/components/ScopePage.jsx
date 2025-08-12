import React from 'react'
import Scope from '../shared/components/Scope/Scope'
import HelmetComponent from './HelmetComponent'

function ScopePage() {
    return (
        <>
            <section>
                <HelmetComponent title={'Scope - International Conference on Emerging Trends in Computer Science & Engineering'} canonical={'https://etcse-conference.org/scope'} />
                <Scope />
            </section>
        </>
    )
}

export default ScopePage
