import React from 'react'

const SelectionSort = (props) => {
    return (
        <div>
            {props.selection.map((value, id) => ( 
                <div style = {{backgroundColor: props.speed<50? "white" : props.colorArr[id], marginLeft: id<=4 ? (id*20)+"px" : ((7-id)*20)+"px", height: "30px" }} key={id}>{value}</div>
            ))}
        </div>
    )
}

export default SelectionSort
