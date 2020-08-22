import React from 'react'

const BubbleSort = (props) => {
    return (
        <div>
            {props.bubble.map((value, id) => (
                <div style = {{backgroundColor: props.colorArr[id]}} >{value}</div>
            ))}
        </div>
    )
}

export default BubbleSort
