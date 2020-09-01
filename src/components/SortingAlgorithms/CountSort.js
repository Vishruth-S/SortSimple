import React from 'react'

const CountSort = (props) => {
    const margin = [0,0,0,2,2,0,2,0,2,2]
    const height = [30, 30, 30, 20, 30, 30, 30, 30, 20, 20]
    return (
        <div>
            {props.count.map((value, id) => ( 
                <div style = {{backgroundColor: props.speed<50? "white": props.colorArr[id], marginLeft: (margin[id]*12)+"px", height: height[id]+"px" }} key={id}>{value}</div>
            ))}
        </div>
    )
}

export default CountSort
