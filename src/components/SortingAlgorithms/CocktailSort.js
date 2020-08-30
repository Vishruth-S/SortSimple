import React from 'react'

const CocktailSort = (props) => {
    const margin = [0,0,2,4,6,2,2,4,6,2]
    return (
        <div>
            {props.cocktail.map((value, id) => ( 
                <div style = {{backgroundColor: props.speed<50? "white": props.colorArr[id], marginLeft: (margin[id]*12)+"px", height: "30px" }} key={id}>{value}</div>
            ))}
            {/* {console.log(props)} */}
        </div>
    )
}

export default CocktailSort