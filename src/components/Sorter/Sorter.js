import React, { Component } from 'react'

import './Sorter.css'
// import SortingAlgorithm from '../SortingAlgorithm/SortingAlgorithm';

class Sorter extends Component {

    state = {
        array: [],
        colors: Array(10).fill('blueviolet'),
    } 

    componentDidMount() {
        this.arrayReset();
    }

    arrayReset() {
        const new_array = []
        for( let i=0; i<10; i++) {
            new_array.push(randomNumber(5,500))
        }

        this.setState({array: new_array, colors: Array(10).fill('blueviolet')})
        // this.setState({anim: new_array})
    }

    bubblesorter = async () => {
        let arr = this.state.array
        var len = arr.length,
        i, j, stop;
            for (i=0; i < len; i++){
                    for (j=0, stop=len-i; j < stop; j++){
                        // this.setState({color: "yellow"})
                        if (arr[j] > arr[j+1]){
                            swap(arr, j, j+1);
                            // this.setState({color: "red"})
                        } 
                        await new Promise(resolve => setTimeout(resolve, 1000));
                        // this.setState({array:arr, color: "blueviolet"})
                        // const colors = arr.map((item, index) => (this.state.array[index] === item ? 'red' : 'blueviolet'));
                        const colors = []
                        for (let k=0; k<10; k++) {
                            let color = k==j || k==j+1 ? 'red':'blueviolet'
                            colors[k] = color
                        }
                        // console.log(colors)
                        this.setState({ array: arr, colors: colors });
                    }
                }   
        // this.setState({anim:arr})
    }

    render() {
        // const array = this.state.array
        const { array, colors } = this.state;
        // console.log(array)
        return (
            <div>
                <h1>This is a sorter</h1>
                <div className="container">
                    {array.map((value, id) => (
                        <span>
                            <div 
                                className="bar" 
                                key={id} 
                                style={{ height: value + 'px', backgroundColor: colors[id] }} >
                            </div>
                            {/* <span>{value}</span> */}
                        </span>
                    ))}
                </div>
                <button onClick={() => this.arrayReset()}>New array</button>
                {/* <SortingAlgorithm arr={this.state.arr} /> */}
                <button onClick={this.bubblesorter}>Sort</button>
            </div>
        )
    }
}

function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
}  


function swap(arr, first_Index, second_Index){
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}

export default Sorter