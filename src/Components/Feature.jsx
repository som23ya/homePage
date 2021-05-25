import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage from '../images/feature_1.png';
import featureimage1 from '../images/feature_2.png';
import featureimage2 from '../images/feature_3.png';

function Feature() {
    return (
        <div id='features'>
            <h1><span>Features</span></h1>
            <div className='a-container'>
                <FeatureBox image={featureimage} para='Jobs to individuals from lower income households with profile based on skills and knowledge.'/>
                <FeatureBox image={featureimage1} para='One can filter jobs by site (on-site, remote, in office) and by type (full time, contract, part time, one time sevice).'/>
                <FeatureBox image={featureimage2} para='Live ChatBot to ask various queries as well as Chat options with the service provider.'/>
            </div>
        </div>
    )
}

export default Feature;
