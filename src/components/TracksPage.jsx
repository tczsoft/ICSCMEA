import React from 'react'
import ConferenceTracks from '../shared/components/Tracks/ConferenceTracks'
import HelmetComponent from './HelmetComponent'

function TracksPage() {
    return (
        <>
            <HelmetComponent title={'Tracks - International Conference on Emerging Trends in Computer Science & Engineering'} canonical={'https://etcse-conference.org/Conference-tracks'} />
            <ConferenceTracks />
        </>
    )
}

export default TracksPage
