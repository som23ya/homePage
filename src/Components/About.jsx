import React from 'react';

function About(props) {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={props.image} alt=''/>
            </div>
            <div className='about-text'>
                <h2> {props.title} </h2>
                <p>Vistaar is an online platform designed to provide a Centralized location for Employers to post about job Openings. The easy and user-friendly user interface of Vistaar makes it very easy for Job Seekers to look for their required Job of interest.
It is designed especially to target the less educated section of the society by focussing on the Blue-Collar Jobs in their area. This platform allows Job Seekers to go through open listings of Jobs that are updated regularly and apply to the required Jobs by mentioning skills, education, experience, etc. A Job Seeker can Filter posted Jobs based on Site and type, Check the complete Description of Jobs, and apply on the go.</p>
            </div>
            
        </div>
    )
}

export default About;
