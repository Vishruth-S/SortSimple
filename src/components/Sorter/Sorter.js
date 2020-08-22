import React, { Component } from 'react'

import './Sorter.css'

import BubbleSort from '../SortingAlgorithms/BubbleSort'

class Sorter extends Component {

    state = {
        array: [],
        colors: [],
        BubblesortAlgo: ["for i=0 to last_Element","for j=0 to indexOf_Last_Unsorted_Element","if(left_Element>right_Element)","swap(left_Element,right_Element)"],
        Algocolor: ["white","white","white","white"],
        arrayLen: 30,
        speed: 300,
        width: "30px",
        showValue: true,
        disableInput: false,
        transition: "0.3s"
    } 

    componentDidMount() {
        this.arrayReset();
    }

    arrayReset() {
        const new_array = []
        const arrlength = this.state.arrayLen
        for( let i=0; i<arrlength; i++) {
            new_array.push(randomNumber(30,500))
        }

        this.setState({array: new_array, colors: Array(new_array.length).fill('blueviolet')})
        // this.setState({anim: new_array})
    }

    speedChangeHandler = (event) => {
        let Actualspeed = 301 - event.target.value
        this.setState(
            {speed: Actualspeed}
        )
        if(Actualspeed > 100) {
            this.setState({transition: "0.3s"})
        } else {
            this.setState({transition: "0s"})
        }
        // console.log(this.state.transition)
    }

    arraySizeHandler = (event) => {
        // console.log(this.state.arrayLen)
        this.setState({
            transition: "0s"
        })
        const new_array = []
        const arrlength = event.target.value
        let barwidth = this.barWidthCalculater(arrlength)
        this.setState({
            width: barwidth
        })
        for( let i=0; i<arrlength; i++) {
            new_array.push(randomNumber(30,500))
        }
        this.setState({arrayLen: event.target.value})
        this.setState({array: new_array, colors: Array(new_array.length).fill('blueviolet')})
        // console.log(this.state.arrayLen)
    }
    
    barWidthCalculater = (arrlength) => {
        let barwidth = "30"
        if(arrlength<25 && arrlength>20){
            barwidth = "33"
        } else if(arrlength>25 && arrlength<=30) {
            barwidth = "28"
        } 
        else if(arrlength>10 && arrlength<=20) {
            barwidth = "40"
        } else if(arrlength>30 && arrlength<=40) {
            barwidth = "20"
        } else if(arrlength>40 && arrlength<=50) {
            barwidth = "10"
        } else if(arrlength>50 && arrlength<=70) {
            barwidth = "8"
        } else if(arrlength>70) {
            barwidth = "5"
        }
        let barwidthNum = Number(barwidth)
        if(barwidthNum<30) {
            this.setState({showValue: false, transition: "0s"})
        } else {
            this.setState({showValue: true, transition: "0.3s"})
        }
        barwidth += "px"
        return barwidth;
    }

    bubblesorter = async () => {
        this.setState({
            disableInput: true
        })
        console.log(this.state.arrayLen)
        let arr = this.state.array
        var len = arr.length
        let i, j, flag=0;
        const colors = []
        let color = 'blueviolet'
        this.setState({
            Algocolor: ["yellow","white","white","white"]
        })
            for (i=0; i < len; i++){
                this.setState({
                        Algocolor: ["white","yellow","white","white"]
                    })
                    for (j=0; j < len-i-1; j++){
                        let speed = this.state.speed
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
                        await new Promise(resolve => setTimeout(resolve, speed));
                        this.setState({ array: arr})
                        // await new Promise(resolve => setTimeout(resolve, 1000));
                        this.setState({
                            Algocolor: ["white","white","yellow","white"]
                        })
                        if (arr[j] > arr[j+1]){
                            
                            colors[j] = 'pink'
                            colors[j+1] = 'pink'
                            await new Promise(resolve => setTimeout(resolve, speed));
                            this.setState({colors: colors})
                            swap(arr, j, j+1);
                            this.setState({
                                Algocolor: ["white","white","white","yellow"]
                            })
                            flag = 1
                            // this.setState({color: "red"})
                        } 
                        else {
                            await new Promise(resolve => setTimeout(resolve, speed));
                        }
                        // this.setState({array:arr, color: "blueviolet"})
                        // const colors = arr.map((item, index) => (this.state.array[index] === item ? 'red' : 'blueviolet'));
                        await new Promise(resolve => setTimeout(resolve, speed));
                        this.setState({colors:colors})
                    }
                    colors[len-i-1] = 'green'
                    this.setState({colors: colors });
                }
                this.setState({
                    disableInput: false
                })   
                this.setState({
                    Algocolor: ["yellow","white","white","white"]
                })
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
                                style={{ height: value + 'px', backgroundColor: colors[id], width: this.state.width, transition: this.state.transition }} >
                                {this.state.showValue ? <span className="number">{value}</span> : null }
                            </div>
                        </span>
                    ))}
                </div>
                <button disabled = {this.state.disableInput} onClick={() => this.arrayReset()}>New array</button>
                {/* <SortingAlgorithm arr={this.state.arr} /> */}
                <button disabled = {this.state.disableInput} onClick={this.bubblesorter}>Sort</button>
                <input type="range" min="10" max="301" onChange={this.speedChangeHandler}></input>
                <input type="range" min="10" max="100" disabled = {this.state.disableInput} onChange={this.arraySizeHandler}></input>
                <BubbleSort colorArr = {this.state.Algocolor} bubble={this.state.BubblesortAlgo} />
                
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