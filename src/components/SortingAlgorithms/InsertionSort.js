import React from 'react'

const InsertionSort = (props) => {
    return (
        <div>
            {props.insertion.map((value, id) => ( 
                <div style = {{backgroundColor: props.colorArr[id], marginLeft: (id*12)+"px", height: "30px" }} key={id}>{value}</div>
            ))}
        </div>
    )
}

export default InsertionSort