import React from 'react'
import Submission from '../shared/components/Submission/Submission'
import HelmetComponent from './HelmetComponent'

function SubmissionPage() {
    return (
        <>
            <HelmetComponent title={'Submission - International Conference on Emerging Trends in Computer Science & Engineering'} canonical={'https://etcse-conference.org/paper-submission'} />
            <Submission />
        </>
    )
}

export default SubmissionPage
