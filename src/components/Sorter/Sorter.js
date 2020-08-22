import React, { Component } from 'react'

import './Sorter.css'
// import SortingAlgorithm from '../SortingAlgorithm/SortingAlgorithm';

class Sorter extends Component {

    state = {
        array: [],
        colors: [],
    } 

    componentDidMount() {
        this.arrayReset();
    }

    arrayReset() {
        const new_array = []
        for( let i=0; i<20; i++) {
            new_array.push(randomNumber(30,500))
        }

        this.setState({array: new_array, colors: Array(new_array.length).fill('blueviolet')})
        // this.setState({anim: new_array})
    }

    bubblesorter = async () => {
        let arr = this.state.array
        var len = arr.length,
        i, j, flag=0;
        const colors = []
        let color = 'blueviolet'
            for (i=0; i < len; i++){
                    for (j=0; j < len-i-1; j++){
                        // this.setState({color: "yellow"})
                        
                        for (let k=0; k<len; k++) {                           
                            if(k===j || k===j+1 ) 
                            {
                                color = 'red'
                            }
                            else if(colors[k]!=='green')
                            {
                                color = 'blueviolet'
                            }
                            else {
                                color = 'green'
                            }
                            colors[k] = color
                        }
                        // console.log(colors)
                        await new Promise(resolve => setTimeout(resolve, 500));
                        this.setState({ array: arr})
                        // await new Promise(resolve => setTimeout(resolve, 1000));
                        if (arr[j] > arr[j+1]){
                            swap(arr, j, j+1);
                            // this.setState({color: "red"})
                        } 
                        // this.setState({array:arr, color: "blueviolet"})
                        // const colors = arr.map((item, index) => (this.state.array[index] === item ? 'red' : 'blueviolet'));
                        await new Promise(resolve => setTimeout(resolve, 500));
                        this.setState({colors:colors})
                    }
                    colors[len-i-1] = 'green'
                    this.setState({colors: colors });
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
                                <span class="number">{value}</span>
                            </div>
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