import React from 'react'

import BubbleSort from '../SortingAlgorithms/BubbleSort'
import SelectionSort from '../SortingAlgorithms/SelectionSort'
import InsertionSort from '../SortingAlgorithms/InsertionSort'

import './ShowAlgorithm.css'

const ShowAlgorithm = (props) => {
    let algo = "{Select Algorithm}"
    if(props.value===1) {
        algo = <BubbleSort colorArr = {props.state.Algocolor} bubble={props.state.BubblesortAlgo} />
    } else if(props.value===2) {
        algo = <SelectionSort colorArr = {props.state.AlgocolorSelect} selection={props.state.SelectionSortAlgo} />
    } else if(props.value===3) {
        algo = <InsertionSort colorArr = {props.state.AlgocolorSelect} insertion={props.state.InsertionSortAlgo} />
    }
    return (
        <div>
            <h3 className="head">ALGORITHM</h3>
            <div className="algo-text">{algo}</div>
        </div>
    )
}

export default ShowAlgorithm
