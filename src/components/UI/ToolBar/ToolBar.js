
import React, { Component } from 'react'

import './ToolBar.css'

class ToolBar extends Component {
    state = {
        value: "0",
    }
    optionChangeHandler = (e) => {
        // console.log(e.target.value)
        this.setState({
            value: e.target.value
        })
        return this.props.clicked.ShowAlgorithmHandler(e.target.value)
    }
    sortMethodHandler = () => {
        // console.log(this.state.value)
        if(this.state.value==="1") {
            return this.props.clicked.bubblesorter()
        } else if(this.state.value==="2") {
            return this.props.clicked.selectionSorter()
        } else if(this.state.value==="3") {
            return this.props.clicked.insertionSorter()
        }{
            alert("Please select Algorithm")
        }
    }
    render() {
        return (
            <div>
                <div className="tool-element tool-array">
                    <button className="tool-button" disabled = {this.props.state.disableInput} onClick={this.props.clicked.arrayReset}>New array</button>
                </div>
                <div className="tool-element">
                    <div>Change Array Size</div>
                    <input type="range" min="10" max="100"  disabled = {this.props.state.disableInput} onChange={this.props.clicked.arraySizeHandler}></input>
                </div>
                <div className="tool-element tool-sort">
                    <div>Choose Sorting Algorithm</div>
                    <div >
                    <select defaultValue="0" className="selector" disabled = {this.props.state.disableInput} onChange={this.optionChangeHandler}>
                        <option className="select-option-disabled" value="0" disabled>Select Algorithm</option>
                        <option className="select-option" value="1">BubbleSort</option>
                        <option className="select-option" value="2">SelectionSort</option> 
                        <option className="select-option" value="3">InsertionSort</option> 
                        {/* <option value="3">SelectionSort</option>  */}
                    </select>
                    </div>
                </div>
                <div className="tool-element">
                    <button className="tool-button" disabled={this.props.state.disableInput} onClick={this.sortMethodHandler}>Sort</button>
                </div>
                <div className="tool-element tool-speed">
                    <div>Change Speed</div>
                    <input type="range" min="10" max="601" onChange={this.props.clicked.speedChangeHandler}></input>
                </div>
            </div>
        )
    }
}

export default ToolBar
