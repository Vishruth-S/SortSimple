import React, { useState } from 'react'

import './ShowComplexity.css'

import 'font-awesome/css/font-awesome.min.css';

const ShowComplexity = (props) => {
    const [showTable, setshowTable] = useState(true)
    const complexities = [<React.Fragment>O(1)</React.Fragment>, <React.Fragment>O(n)</React.Fragment>, <React.Fragment>O(n<sup>2</sup>)</React.Fragment>, <React.Fragment>O(nlogn)</React.Fragment>, <React.Fragment>O(n+k)</React.Fragment>, <React.Fragment>O(k)</React.Fragment>]
    const group1 = [1, 3, 5, 8]
    let time1 = "", time2 = "", time3 = "", space = "", inPlace = "", stable = ""
    if (group1.includes(props.algorithm)) {
        time1 = complexities[2]
        time2 = complexities[2]
        time3 = complexities[1]
        space = complexities[0]
        inPlace = "Yes"
        stable = "Yes"
    } else if (props.algorithm === 2) {
        time1 = complexities[2]
        time2 = complexities[2]
        time3 = complexities[2]
        space = complexities[0]
        inPlace = "Yes"
        stable = "No"
    } else if (props.algorithm === 4) {
        time1 = complexities[3]
        time2 = complexities[3]
        time3 = complexities[3]
        space = complexities[1]
        inPlace = "No"
        stable = "Yes"
    } else if (props.algorithm === 6) {
        time1 = complexities[4]
        time2 = complexities[4]
        time3 = complexities[4]
        space = complexities[5]
        inPlace = "No"
        stable = "Yes"
    } else if (props.algorithm === 7) {
        time1 = complexities[2]
        time2 = complexities[3]
        time3 = complexities[3]
        space = complexities[0]
        inPlace = "Yes"
        stable = "No"
    }



    return (
        <div className="complexity" style={{ display: props.algorithm ? "block" : "none" }}>
            <div>
                <button className="complex-show-btn" style={{ display: showTable ? "none" : "block" }} onClick={() => setshowTable(!showTable)}> <i className="fa fa-arrow-right"></i>Show Complexity</button>
                <button className="complex-hide-btn" style={{ display: !showTable ? "none" : "block" }} onClick={() => setshowTable(!showTable)}><i className="fa fa-times-circle"></i>Hide</button>
            </div>
            <div style={{ display: showTable ? "block" : "none" }}>
                <div className="complexity-head">
                    <h4 className="complexity-heading">COMPLEXITY</h4>
                </div>
                <div className="time-complexity">
                    <span>Time </span>
                    <table className="table1" style={{ width: "70%" }}>
                        <tbody>
                            <tr>
                                <td>Worst</td>
                                <td>Average</td>
                                <td>Best</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <th>{time1}</th>
                                <th>{time2}</th>
                                <th>{time3}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <table style={{ width: "70%" }}>
                    <tbody>
                        <tr>
                            <td className="space-column">Space: <b>{space}</b></td>
                            <td className="space-column">In-place: <b>{inPlace}</b></td>
                            <td className="space-column">Stable: <b>{stable}</b></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ShowComplexity
