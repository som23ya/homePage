import React from 'react'

function FeatureBox(props) {
    return (
        <div>
            <div className='a-box'>
                <div className='a-b-img'>
                    <img src={props.image}/>
                </div>
                <div className='s-b-text'>
                    <p> {props.para} </p>
                </div>

            </div>
        </div>
    )
}

export default FeatureBox;
