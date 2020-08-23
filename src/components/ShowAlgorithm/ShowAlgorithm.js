import React from 'react'

import BubbleSort from '../SortingAlgorithms/BubbleSort'
import SelectionSort from '../SortingAlgorithms/SelectionSort'

const ShowAlgorithm = (props) => {
    let algo = ""
    if(props.value===1) {
        algo = <BubbleSort colorArr = {props.state.Algocolor} bubble={props.state.BubblesortAlgo} />
    } else if(props.value===2) {
        algo = <SelectionSort colorArr = {props.state.AlgocolorSelect} bubble={props.state.SelectionSortAlgo} />
    }
    return (
        <div>
            <h3>Algorithm</h3>
            {algo}
        </div>
    )
}

export default ShowAlgorithm
