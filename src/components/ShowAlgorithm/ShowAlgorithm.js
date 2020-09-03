import React, { useState } from 'react'

import BubbleSort from '../SortingAlgorithms/BubbleSort'
import SelectionSort from '../SortingAlgorithms/SelectionSort'
import InsertionSort from '../SortingAlgorithms/InsertionSort'
import MergeSort from '../SortingAlgorithms/MergeSort'
import QuickSort from '../SortingAlgorithms/QuickSort'
import CocktailSort from '../SortingAlgorithms/CocktailSort'
import OddevenSort from '../SortingAlgorithms/OddevenSort'
import CountSort from '../SortingAlgorithms/CountSort'

import './ShowAlgorithm.css'
import 'font-awesome/css/font-awesome.min.css';

const ShowAlgorithm = (props) => {
    const [showAlgo, setshowAlgo] = useState(true)
    let algo = "{Select Algorithm}"
    if (props.value === 1) {
        algo = <BubbleSort colorArr={props.state.Algocolor} bubble={props.state.BubblesortAlgo} speed={props.state.speed} />
    } else if (props.value === 2) {
        algo = <SelectionSort colorArr={props.state.AlgocolorSelect} selection={props.state.SelectionSortAlgo} speed={props.state.speed} />
    } else if (props.value === 3) {
        algo = <InsertionSort colorArr={props.state.AlgocolorSelect} insertion={props.state.InsertionSortAlgo} speed={props.state.speed} />
    } else if (props.value === 4) {
        algo = <MergeSort colorArr={props.state.AlgocolorSelect} merge={props.state.MergeSortAlgo} speed={props.state.speed} />
    } else if (props.value === 5) {
        algo = <CocktailSort colorArr={props.state.AlgocolorCocktail} cocktail={props.state.CocktailAlgo} speed={props.state.speed} />
    } else if (props.value === 6) {
        algo = <CountSort colorArr={props.state.AlgocolorCount} count={props.state.CountSortAlgo} speed={props.state.speed} />
    } else if (props.value === 7) {
        algo = <QuickSort colorArr={props.state.AlgocolorQuick} quick={props.state.QuickSortAlgo} speed={props.state.speed} />
    } else if (props.value === 8) {
        algo = <OddevenSort colorArr={props.state.AlgocolorOddeven} oddeven={props.state.OddevenSortAlgo} speed={props.state.speed} />
    }
    return (
        <div>
            <div>
                <button className="complex-show-btn" style={{ display: showAlgo ? "none" : "block" }} onClick={() => setshowAlgo(!showAlgo)}> <i className="fa fa-arrow-right"></i>Show Algorithm</button>
                <button className="complex-hide-btn" style={{ display: !showAlgo || props.value === 0 ? "none" : "block" }} onClick={() => setshowAlgo(!showAlgo)}><i className="fa fa-times-circle"></i>Hide</button>
            </div>
            <div style={{ display: showAlgo ? "block" : "none" }}>
                <h3 className="head">ALGORITHM</h3>
                <div className="algo-text">{algo}</div>
            </div>
        </div>
    )
}

export default ShowAlgorithm
