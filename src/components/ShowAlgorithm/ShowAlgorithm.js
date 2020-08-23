import React from 'react'

import BubbleSort from '../SortingAlgorithms/BubbleSort'
import SelectionSort from '../SortingAlgorithms/SelectionSort'

import './ShowAlgorithm.css'

const ShowAlgorithm = (props) => {
    let algo = ""
    if(props.value===1) {
        algo = <BubbleSort colorArr = {props.state.Algocolor} bubble={props.state.BubblesortAlgo} />
    } else if(props.value===2) {
        algo = <SelectionSort colorArr = {props.state.AlgocolorSelect} selection={props.state.SelectionSortAlgo} />
    }
    return (
        <div>
            <h3 className="head">ALGORITHM</h3>
            <span className="algo-text">{algo}</span>
        </div>
    )
}

export default ShowAlgorithm
