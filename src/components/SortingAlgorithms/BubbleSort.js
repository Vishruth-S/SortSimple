import React from 'react'

const BubbleSort = (props) => {
    return (
        <div>
            {props.bubble.map((value, id) => (
                <div key={id} style = {{backgroundColor: props.speed<50? "white" : props.colorArr[id], marginLeft: (id*20)+"px", height: "30px"}} >{value}</div>
            ))}
        </div>
    )
}

export default BubbleSort
