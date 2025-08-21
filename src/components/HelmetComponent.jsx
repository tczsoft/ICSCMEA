import React from 'react';
import { Helmet } from 'react-helmet';

function HelmetComponent({ title, canonical }) {
    return (
        <Helmet>
            <title>
                {/* ICSCMEA - International Conference on Smart Computational Methods and Emerging Applications */}
                {title} </title>
            <meta name="keywords" content="ICSCMEA, International Conference, Smart Computational Methods, Emerging Applications, Artificial Intelligence, Machine Learning, Data Science, Computational Intelligence, Cloud Computing, Big Data, IoT, Robotics, Automation, Cybersecurity, Edge Computing, Quantum Computing, Blockchain, Industry 4.0, Smart Systems, Academic Conference 2025, Research and Innovation" />
            <meta name="description" content="The International Conference on Smart Computational Methods and Emerging Applications (ICSCMEA 2026) brings together global researchers, academicians, and industry experts to share innovations in AI, computational intelligence, smart systems, IoT, data analytics, cloud computing, and emerging technologies shaping the future." />
            <meta name="author" content="ICSCMEA Editorial Team" />
            <meta name="robots" content="index, follow" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="International Conference on Smart Computational Methods and Emerging Applications (ICSCMEA)" />
            <meta property="og:description" content="Join ICSCMEA 2026 to explore smart computational methods, innovative applications, and future technologies through keynote talks, technical sessions, and collaborative discussions." />
            <meta property="og:url" content="http://www.icscmea.com" />
            <meta property="og:image" content="http://www.icscmea.com/images/home/logo.png" />
            <link rel="canonical" href={canonical} />
            <link rel="icon" type="image/png" href="http://www.icscmea.com/images/home/fav.png" />
        </Helmet>

    );
}

export default HelmetComponent;
