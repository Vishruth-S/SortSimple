import React from 'react'

const MergeSort = (props) => {
    const margin = [0,2,4,6,8,6]
    return (
        <div>
            {props.merge.map((value, id) => ( 
                <div style = {{backgroundColor: props.speed<50? "white": props.colorArr[id], marginLeft: (margin[id]*12)+"px", height: "30px" }} key={id}>{value}</div>
            ))}
        </div>
    )
}

export default MergeSort