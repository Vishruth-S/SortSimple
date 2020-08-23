import React from 'react'

const SelectionSort = (props) => {
    return (
        <div>
            {props.bubble.map((value, id) => (
                <div style = {{backgroundColor: props.colorArr[id]}} key={id}>{value}</div>
            ))}
        </div>
    )
}

export default SelectionSort
