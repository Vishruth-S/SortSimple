import React, { Component } from 'react'

import './Sorter.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from '../UI/Navbar/Navbar'
import ArrayDisplay from '../../containers/ArrayDisplay/ArrayDisplay'
import ToolBar from '../UI/ToolBar/ToolBar'
import ShowAlgorithm from '../ShowAlgorithm/ShowAlgorithm'

class Sorter extends Component {

    state = {
        array: [],
        colors: [],
        arrayLen: 30,
        speed: 300,
        width: "25px",
        showValue: true,
        disableInput: false,
        transition: "0.3s",
        algorithm: 0,
        BubblesortAlgo: ["for i=0 to last_Element","for j=0 to indexOf_Last_Unsorted_Element","if(left_Element>right_Element)","swap(left_Element,right_Element)"],
        Algocolor: ["white","white","white","white"],
        SelectionSortAlgo: ["Repeat (n-1) times","set first unsorted element as min","for each unsorted element","if element<min","set element as new min","swap min with first unsorted element"],
        AlgocolorSelect: ["white","white","white","white","white","white"],
        InsertionSortAlgo: ["Mark first element as sorted","for each unsorted x","temp=x","for j=last_Sorted_Index to 0","if temp < current element[j]","move temp to the left by 1"]
    } 

    componentDidMount() {
        this.arrayReset();
    }

    arrayReset = () => {
        const new_array = []
        const arrlength = this.state.arrayLen
        for( let i=0; i<arrlength; i++) {
            new_array.push(randomNumber(30,500))
        }

        this.setState({array: new_array, colors: Array(new_array.length).fill('blueviolet')})
        // this.setState({anim: new_array})
    }

    speedChangeHandler = (event) => {
        let Actualspeed = 601 - event.target.value
        this.setState(
            {speed: Actualspeed}
        )
        if(Actualspeed > 200) {
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
        let barwidth = "25"
        if(arrlength<25 && arrlength>20){
            barwidth = "30"
        } else if(arrlength>25 && arrlength<30) {
            barwidth = "26"
        } 
        else if(arrlength>=10 && arrlength<=20) {
            barwidth = "40"
        } else if(arrlength>=30 && arrlength<40) {
            barwidth = "20"
        } else if(arrlength>=40 && arrlength<=50) {
            barwidth = "15"
        } else if(arrlength>50 && arrlength<=60) {
            barwidth = "12"
        } else if(arrlength>60 && arrlength<=70) {
            barwidth = "10"
        } else if(arrlength>70 && arrlength<=80) {
            barwidth = "8"
        } else if(arrlength>80 && arrlength<=90) {
            barwidth = "7"
        } else if(arrlength>=90) {
            barwidth = "6"
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

    ShowAlgorithmHandler = (v) => {
        if(v==="1") {
            this.setState({
                algorithm: 1
            })
        } else if(v==="2") {
            this.setState({
                algorithm: 2
            })
        } else if(v==="3") {
            this.setState({
                algorithm: 3
            })
        }
    }

    bubblesorter = async () => {
        this.setState({
            disableInput: true,
            algorithm: 1,
        })
        // console.log(this.state.arrayLen)
        let arr = this.state.array
        var len = arr.length
        let i, j;
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
                    Algocolor: ["white","white","white","white"]
                })
        // this.setState({anim:arr})
    }

    selectionSorter = async ()=> {
        this.setState({
            disableInput: true,
            algorithm: 2,
            AlgocolorSelect: ["yellow","white","white","white","white","white"]
        })
        let arr = this.state.array
        let len = arr.length
        let i,j, min_index;
        let speed = this.state.speed
        const colors = Array(arr.length).fill('blueviolet')
        this.setState({
            colors:colors,
            AlgocolorSelect: ["white","yellow","white","white","white","white"]
        })
        await new Promise(resolve => setTimeout(resolve, speed));
        for(i=0;i<len-1;i++) {
            for(let l=i;l<len;l++) {
                colors[l]="blueviolet"
            }
            this.setState({
                colors:colors
            })
            min_index = i
            colors[min_index]="red"
                await new Promise(resolve => setTimeout(resolve, speed));
                this.setState({
                    colors:colors,
                    AlgocolorSelect: ["white","white","yellow","white","white","white"]
                })
            for(j=i+1;j<len;j++) 
            {
                speed = this.state.speed
                await new Promise(resolve => setTimeout(resolve, speed*0.3));
                colors[j]="orange"
                    // colors[len-1]="orange"
                // console.log(colors)
                this.setState({
                    AlgocolorSelect: ["white","white","white","yellow","white","white"]
                })
                if(arr[j] < arr[min_index])
                {
                    
                    min_index = j    
                    colors[min_index]="red"
                    for(let k=0;k<min_index;k++) {
                        colors[k]=colors[k]!=="green" ? "blueviolet" : "green"
                    }
                    
                    this.setState({
                        colors:colors,
                        AlgocolorSelect: ["white","white","white","white","yellow","white"]
                    })
                    await new Promise(resolve => setTimeout(resolve, speed));
                }
                colors[j-1]="blueviolet"
                colors[min_index]="red"
                this.setState({
                    colors:colors
                })
                await new Promise(resolve => setTimeout(resolve, speed));
            }
            for(let m=i;m<len;m++) {
                colors[m] = colors[m]!=="red" ? "blueviolet" : "pink"
                colors[i]="pink"
            }
            this.setState({
                colors:colors
            })
            await new Promise(resolve => setTimeout(resolve, speed));
            this.setState({
                AlgocolorSelect: ["white","white","white","white","white","yellow"]
            })
            await new Promise(resolve => setTimeout(resolve, speed));
            swap(arr, i, min_index)
            await new Promise(resolve => setTimeout(resolve, speed));
            this.setState({
                array: arr
            })
            colors[i]="green"
            this.setState({
                colors:colors
            })
            await new Promise(resolve => setTimeout(resolve, speed));
        }
        colors[len-1]="green"
        colors[len-2]="green"
        this.setState({
            colors:colors,
            disableInput: false,
            AlgocolorSelect: ["white","white","white","white","white","white"]
        })
    }

    insertionSorter = async () => {
        this.setState({
            disableInput: true,
            algorithm: 3,
            AlgocolorSelect: ["white","yellow","white","white","white","white"]
        })
        let arr = this.state.array
        let len = arr.length
        let colors = Array(arr.length).fill('blueviolet')
        let speed = this.state.speed
        await new Promise(resolve => setTimeout(resolve, speed*0.8));
        for(let i=0;i<len;i++) {
            let temp = arr[i]
            if(i!==0) {
                colors[i-1]='orange'
            }
            colors[i]='red'
            // colors[i+1]='red'
            this.setState({
                colors:colors,
                AlgocolorSelect: ["white","white","yellow","white","white","white"]
            })
            await new Promise(resolve => setTimeout(resolve, speed));
            this.setState({
                AlgocolorSelect: ["white","white","white","yellow","white","white"]
            })
            await new Promise(resolve => setTimeout(resolve, speed*0.8));
            for(let j=i-1;j>=0;j--) {
                speed = this.state.speed
                let flag=0
                this.setState({
                    AlgocolorSelect: ["white","white","white","white","yellow","white"]
                })
                await new Promise(resolve => setTimeout(resolve, speed));
                if(temp<arr[j]) {
                    flag=0
                    swap(arr, j, j+1)
                    colors[j]='red'
                    colors[j+1]='orange'
                    this.setState({
                        colors:colors,
                        AlgocolorSelect: ["white","white","white","white","white","yellow"]
                    })
                    await new Promise(resolve => setTimeout(resolve, speed));
                    this.setState({
                        array: arr,
                        colors:colors
                    })
                    // await new Promise(resolve => setTimeout(resolve, 1000));
                } else {
                    flag++
                }
                if(flag===1)
                {
                    let k=i
                    while(k) {
                        colors[k-1]='orange'
                        k--
                    }
                    this.setState({
                        colors:colors
                    })
                    break
                }
                // await new Promise(resolve => setTimeout(resolve, speed));
                if(flag) {
                    colors[j]='orange'
                    this.setState({
                        colors:colors
                    })
                }
            }
            colors[0]='orange'
            this.setState({
                colors:colors
            })
        }
        colors = Array(arr.length).fill('green')
        this.setState({
            array: arr,
            colors: colors,
            AlgocolorSelect: Array(6).fill("white"),
            disableInput: false,
        })
        
    }

    render() {
        // console.log(this.state.speed)
        return (
            <div>
                <Navbar />
                <div className="main">
                    <div className="row">
                        <div className="col-2 toolbar">
                            <ToolBar state={this.state} clicked={this}/>
                        </div>
                        <div className="col-7 array-display">
                            <ArrayDisplay state={this.state} />
                        </div>
                        <div className="col-3">
                            <ShowAlgorithm value={this.state.algorithm} state={this.state} />
                        </div>
                    </div>
                </div>
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