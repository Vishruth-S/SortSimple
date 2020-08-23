
import React, { Component } from 'react'

class ToolBar extends Component {
    state = {
        value: "1",
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
        }
    }
    render() {
        return (
            <div>
                <button disabled = {this.props.state.disableInput} onClick={this.props.clicked.arrayReset}>New array</button>
                <select disabled = {this.props.state.disableInput} id="dropdown" onChange={this.optionChangeHandler}>
                    <option value="0" selected disabled>Select Algorithm</option>
                    <option value="1">BubbleSort</option>
                    <option value="2">SelectionSort</option> 
                    {/* <option value="3">SelectionSort</option>  */}
                </select>
                <button disabled = {this.props.state.disableInput} onClick={this.sortMethodHandler}>Sort</button>
                <input type="range" min="10" max="301" onChange={this.props.clicked.speedChangeHandler}></input>
                <input type="range" min="10" max="100"  disabled = {this.props.state.disableInput} onChange={this.props.clicked.arraySizeHandler}></input>
            </div>
        )
    }
}

export default ToolBar
