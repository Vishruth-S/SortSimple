import React from 'react'

import './ArrayDisplay.css'

const ArrayDisplay = (props) => {
    let array = props.state.array
    let colors = props.state.colors
    return (
            <div className="array-container">
                    {array.map((value, id) => (
                            <div 
                                className="bar" 
                                key={id} 
                                style={{ height: value + 'px', backgroundColor: colors[id], width: props.state.width, transition: props.state.transition }} >
                                {props.state.showValue ? <span className="number">{value}</span> : null }
                            </div>
                    ))}
                    <div className="temp-bar"></div>
                </div>
    )
}

export default ArrayDisplay
