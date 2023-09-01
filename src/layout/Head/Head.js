import React from 'react'
import { Helmet } from 'react-helmet'

const Head = ({ title }) => {
    return (
        <Helmet>
            <title> {title}-Capture Craze</title>
        </Helmet>
    )
}

export default Head