import React from 'react'

const OddevenSort = (props) => {
    const margin = [0,0,2,2,4,6,2,4,6]
    return (
        <div>
            {props.oddeven.map((value, id) => ( 
                <div style = {{backgroundColor: props.speed<50? "white": props.colorArr[id], marginLeft: (margin[id]*12)+"px", height: id===5 || id===8 ? "45px" : "30px" }} key={id}>{value}</div>
            ))}
        </div>
    )
}

export default OddevenSort