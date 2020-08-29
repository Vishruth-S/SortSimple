import React from 'react'

const QuickSort = (props) => {
    const margin = [0,1,1,3,5,7,7,3]
    return (
        <div>
            {props.quick.map((value, id) => ( 
                <div style = {{backgroundColor: props.speed<50? "white": props.colorArr[id], marginLeft: (margin[id]*12)+"px", height: "30px" }} key={id}>{value}</div>
            ))}
        </div>
    )
}

export default QuickSort