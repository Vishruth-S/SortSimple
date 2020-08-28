import React from 'react'

const MergeSort = (props) => {
    return (
        <div>
            {props.merge.map((value, id) => ( 
                <div style = {{backgroundColor: props.speed<50? "white": props.colorArr[id], marginLeft: (id*12)+"px", height: "30px" }} key={id}>{value}</div>
            ))}
        </div>
    )
}

export default MergeSort