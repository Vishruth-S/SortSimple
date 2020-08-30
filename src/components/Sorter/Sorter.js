import React, { Component } from 'react'

import './Sorter.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import ModalGuide from '../../containers/Modal/ModalGuide'
import Navbar from '../UI/Navbar/Navbar'
import ArrayDisplay from '../../containers/ArrayDisplay/ArrayDisplay'
import ToolBar from '../UI/ToolBar/ToolBar'
import ShowAlgorithm from '../ShowAlgorithm/ShowAlgorithm'

class Sorter extends Component {

    state = {
        array: [],
        colors: [],
        arrayLen: 24,
        speed: 200,
        width: "25px",
        showValue: true,
        disableInput: false,
        transition: "0.3s",
        algorithm: 0,
        BubblesortAlgo: ["for i=0 to last_Element", "for j=0 to Last_Unsorted_Element", "if left_Element>right_Element", "swap(left_Element,right_Element)"],
        Algocolor: ["white", "white", "white", "white"],
        SelectionSortAlgo: ["Repeat (n-1) times", "set first unsorted element as min", "for each unsorted element", "if element<min", "set element as new min", "swap min with first unsorted element"],
        AlgocolorSelect: ["white", "white", "white", "white", "white", "white"],
        InsertionSortAlgo: ["Mark first element as sorted", "for each unsorted x", "temp=x", "for j=last_Sorted_Index to 0", "if temp < current element[j]", "move temp to the left by 1"],
        MergeSortAlgo: ["Split each element into partitions of size 1","recursively merge adjacent partitions","for i=leftPartIndex to rightPartIndex","if(leftValue<=rightValue)","copy leftValue","else: copy rightValue"],
        QuickSortAlgo: ["For each unsorted Partition","pivot = last_element_of_partition","partitionIndex=indexOf_first_element","for each element in partition","if(element<pivot)","swap(element, A[partitionIndex])","partitionIndex ++","swap(A[partitionIndex],pivot)"],
        AlgocolorQuick: ["white","white","White","white","white","white","white","white"]
    }

    componentDidMount() {
        this.arrayReset();
    }

    arrayReset = () => {
        const new_array = []
        const arrlength = this.state.arrayLen
        for (let i = 0; i < arrlength; i++) {
            new_array.push(randomNumber(30, 500))
        }
        let barwidth = this.barWidthCalculater(arrlength)
        this.setState({
            width: barwidth
        })
        let final_array = this.arrayHeightHandler(new_array)
        this.setState({ array: final_array, colors: Array(final_array.length).fill('blueviolet') })
    }

    speedChangeHandler = (event) => {
        let Actualspeed = 401 - event.target.value
        this.setState(
            { speed: Actualspeed }
        )
        if (Actualspeed > 300) {
            this.setState({ transition: "0.3s" })
        } else {
            this.setState({ transition: "0s" })
        }
    }

    arraySizeHandler = (event) => {
        const new_array = []
        const arrlength = event.target.value
        let barwidth = this.barWidthCalculater(arrlength)
        this.setState({
            width: barwidth
        })
        for (let i = 0; i < arrlength; i++) {
            new_array.push(randomNumber(30, 500))
        }
        let final_array = this.arrayHeightHandler(new_array)
        this.setState({ arrayLen: event.target.value })
        this.setState({ array: final_array, colors: Array(final_array.length).fill('blueviolet') })
    }

    screenSizeHandler = (barNum) => {
        let screen_width = window.innerWidth
        if (screen_width < 1400 && screen_width > 600) {
            barNum *= 0.75
            barNum = barNum.toFixed(0)
            let barwidth = barNum.toString()
            return barwidth
        } else if (screen_width <= 600 && screen_width > 400) {
            barNum *= 0.3
            barNum = barNum.toFixed(0)
            let barwidth = barNum.toString()
            return barwidth
        } else if (screen_width <= 400) {
            barNum *= 0.28
            barNum = barNum.toFixed(0)
            let barwidth = barNum.toString()
            return barwidth
        } else {
            let barwidth = barNum.toString()
            return barwidth
        }

    }

    arrayHeightHandler = (small_arr) => {
        let screen_width = window.innerWidth
        if (screen_width <= 600) {
            for (let i = 0; i < small_arr.length; i++) {
                let ele = small_arr[i]
                ele *= 0.7
                ele = ele.toFixed(0)
                small_arr[i] = Number(ele)
            }
        }
        return small_arr
    }

    barWidthCalculater = (arrlength) => {
        let barwidth = "25"
        if (arrlength < 25 && arrlength > 20) {
            barwidth = "27"
        } else if (arrlength > 25 && arrlength < 30) {
            barwidth = "23"
        }
        else if (arrlength >= 10 && arrlength <= 20) {
            barwidth = "33"
        } else if (arrlength >= 30 && arrlength < 35) {
            barwidth = "20"
        } else if (arrlength >= 35 && arrlength < 40) {
            barwidth = "17"
        } else if (arrlength >= 40 && arrlength <= 45) {
            barwidth = "14"
        } else if (arrlength > 45 && arrlength <= 50) {
            barwidth = "13"
        } else if (arrlength > 50 && arrlength <= 60) {
            barwidth = "12"
        } else if (arrlength > 60 && arrlength <= 70) {
            barwidth = "10"
        } else if (arrlength > 70 && arrlength <= 80) {
            barwidth = "8"
        } else if (arrlength > 80 && arrlength <= 90) {
            barwidth = "7"
        } else if (arrlength >= 90) {
            barwidth = "6"
        }
        let barwidthNum = Number(barwidth)
        barwidth = this.screenSizeHandler(barwidthNum)
        barwidthNum = Number(barwidth)
        if (barwidthNum < 24) {
            this.setState({ showValue: false })
        } else {
            this.setState({ showValue: true })
        }
        barwidth += "px"
        return barwidth;
    }

    ShowAlgorithmHandler = (v) => {
        if (v === "1") {
            this.setState({
                algorithm: 1
            })
        } else if (v === "2") {
            this.setState({
                algorithm: 2
            })
        } else if (v === "3") {
            this.setState({
                algorithm: 3
            })
        } else if (v === "4") {
            this.setState({
                algorithm: 4
            })
        }  else if (v === "5") {
            this.setState({
                algorithm: 5
            })
        }  else if (v === "6") {
            this.setState({
                algorithm: 6
            })
        }  else if (v === "7") {
            this.setState({
                algorithm: 7
            })
        }
    }

    bubblesorter = async () => {
        this.setState({
            disableInput: true,
            algorithm: 1,
        })
        let arr = [...this.state.array]
        var len = arr.length
        let i, j;
        const colors = []
        let color = 'blueviolet'
        this.setState({
            Algocolor: ["yellow", "white", "white", "white"]
        })
        for (i = 0; i < len; i++) {
            this.setState({
                Algocolor: ["white", "yellow", "white", "white"]
            })
            for (j = 0; j < len - i - 1; j++) {
                let speed = this.state.speed
                for (let k = 0; k < len; k++) {
                    if (k === j || k === j + 1) {
                        color = 'red'
                    }
                    else if (colors[k] !== 'green') {
                        color = 'blueviolet'
                    }
                    else {
                        color = 'green'
                    }
                    colors[k] = color
                }
                if (speed !== 0) {
                    await new Promise(resolve => setTimeout(resolve, speed));
                }
                this.setState({ array: arr })
                this.setState({
                    Algocolor: ["white", "white", "yellow", "white"]
                })
                if (arr[j] > arr[j + 1]) {
                    if (speed !== 0) {
                        colors[j] = 'pink'
                        colors[j + 1] = 'pink'
                        this.setState({ colors: colors })
                        await new Promise(resolve => setTimeout(resolve, speed));
                    }
                    swap(arr, j, j + 1);
                    this.setState({
                        Algocolor: ["white", "white", "white", "yellow"]
                    })
                }
                else {
                    if (speed !== 0) {
                        await new Promise(resolve => setTimeout(resolve, speed));
                    }
                }
                await new Promise(resolve => setTimeout(resolve, speed));
                this.setState({ colors: colors })
            }
            colors[len - i - 1] = 'green'
            this.setState({ colors: colors });
        }
        this.setState({
            disableInput: false,
            speed: 200,
            transition: "0.3s",
            Algocolor: ["white", "white", "white", "white"]
        })
    }

    selectionSorter = async () => {
        this.setState({
            disableInput: true,
            algorithm: 2,
            AlgocolorSelect: ["yellow", "white", "white", "white", "white", "white"]
        })
        let arr = [...this.state.array]
        let len = arr.length
        let i, j, min_index;
        let speed = this.state.speed
        let colors = Array(arr.length).fill('blueviolet')
        this.setState({
            colors: colors,
            AlgocolorSelect: ["white", "yellow", "white", "white", "white", "white"]
        })
        await new Promise(resolve => setTimeout(resolve, speed));
        for (i = 0; i < len - 1; i++) {
            for (let l = i; l < len; l++) {
                colors[l] = "blueviolet"
            }
            this.setState({
                colors: colors
            })
            min_index = i
            colors[min_index] = "red"
            await new Promise(resolve => setTimeout(resolve, speed));
            this.setState({
                colors: colors,
                AlgocolorSelect: ["white", "white", "yellow", "white", "white", "white"]
            })
            for (j = i + 1; j < len; j++) {
                speed = this.state.speed
                if (speed !== 0) {
                    await new Promise(resolve => setTimeout(resolve, speed * 0.3));
                }
                colors[j] = "orange"
                this.setState({
                    AlgocolorSelect: ["white", "white", "white", "yellow", "white", "white"]
                })
                if (arr[j] < arr[min_index]) {

                    min_index = j
                    colors[min_index] = "red"
                    for (let k = 0; k < min_index; k++) {
                        colors[k] = colors[k] !== "green" ? "blueviolet" : "green"
                    }

                    this.setState({
                        colors: colors,
                        AlgocolorSelect: ["white", "white", "white", "white", "yellow", "white"]
                    })
                    if (speed !== 0) {
                        await new Promise(resolve => setTimeout(resolve, speed));
                    }
                }
                colors[j - 1] = "blueviolet"
                colors[min_index] = "red"
                this.setState({
                    colors: colors
                })
                await new Promise(resolve => setTimeout(resolve, speed));
            }
            for (let m = i; m < len; m++) {
                colors[m] = colors[m] !== "red" ? "blueviolet" : "pink"
                colors[i] = "pink"
            }
            this.setState({
                colors: colors
            })
            await new Promise(resolve => setTimeout(resolve, speed));
            this.setState({
                AlgocolorSelect: ["white", "white", "white", "white", "white", "yellow"]
            })
            if (speed !== 0) {
                await new Promise(resolve => setTimeout(resolve, speed));
            }
            swap(arr, i, min_index)
            await new Promise(resolve => setTimeout(resolve, speed));
            this.setState({
                array: arr
            })
            colors[i] = "green"
            this.setState({
                colors: colors
            })
            await new Promise(resolve => setTimeout(resolve, speed));
        }
        colors[len - 1] = "green"
        colors[len - 2] = "green"
        this.setState({
            colors: colors,
            disableInput: false,
            speed: 200,
            transition: "0.3s",
            AlgocolorSelect: ["white", "white", "white", "white", "white", "white"]
        })
    }

    insertionSorter = async () => {
        this.setState({
            disableInput: true,
            algorithm: 3,
            AlgocolorSelect: ["white", "yellow", "white", "white", "white", "white"]
        })
        let arr = [...this.state.array]
        let len = arr.length
        let colors = Array(arr.length).fill('blueviolet')
        let speed = this.state.speed
        await new Promise(resolve => setTimeout(resolve, speed * 0.8));
        for (let i = 0; i < len; i++) {
            let temp = arr[i]
            if (i !== 0) {
                colors[i - 1] = 'orange'
            }
            colors[i] = 'red'
            this.setState({
                colors: colors,
                AlgocolorSelect: ["white", "white", "yellow", "white", "white", "white"]
            })
            await new Promise(resolve => setTimeout(resolve, speed));
            this.setState({
                AlgocolorSelect: ["white", "white", "white", "yellow", "white", "white"]
            })
            await new Promise(resolve => setTimeout(resolve, speed * 0.8));
            for (let j = i - 1; j >= 0; j--) {
                speed = this.state.speed
                let flag = 0
                this.setState({
                    AlgocolorSelect: ["white", "white", "white", "white", "yellow", "white"]
                })
                await new Promise(resolve => setTimeout(resolve, speed));
                if (temp < arr[j]) {
                    flag = 0
                    swap(arr, j, j + 1)
                    colors[j] = 'red'
                    colors[j + 1] = 'orange'
                    this.setState({
                        colors: colors,
                        AlgocolorSelect: ["white", "white", "white", "white", "white", "yellow"]
                    })
                    await new Promise(resolve => setTimeout(resolve, speed));
                    this.setState({
                        array: arr,
                        colors: colors
                    })
                } else {
                    flag++
                }
                if (flag === 1) {
                    let k = i
                    while (k) {
                        colors[k - 1] = 'orange'
                        k--
                    }
                    this.setState({
                        colors: colors
                    })
                    break
                }
                if (flag) {
                    colors[j] = 'orange'
                    this.setState({
                        colors: colors
                    })
                }
            }
            colors[0] = 'orange'
            this.setState({
                colors: colors
            })
        }
        colors = Array(arr.length).fill('green')
        this.setState({
            array: arr,
            colors: colors,
            AlgocolorSelect: Array(6).fill("white"),
            disableInput: false,
            speed: 200,
            transition: "0.3s"
        })

    }

    mergeSorter = async () => {
        this.setState({
            disableInput: true,
            transition: "0s",
            algorithm: 4,
        })
        let arr1 = [...this.state.array]
        let animations = getMergeSortAnimations(arr1)
        let colors = Array(arr1.length).fill('blueviolet')
        for (let i = 0; i < animations.length; i++) {
            let speed = this.state.speed
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const color = i % 3 === 0 ? "red" : "orange";
                // let algoColor = i % 3 === 0 ? ["white","white","white","yellow","yellow","white"] : ["white","white","white","white","white","yellow"];
                await new Promise(resolve => setTimeout(resolve, speed));
                colors[barOneIdx] = color;
                colors[barTwoIdx] = color;
                this.setState({
                    colors: colors,
                    // AlgocolorSelect: algoColor
                })
            } else {
                await new Promise(resolve => setTimeout(resolve, speed));
                let arr = [...this.state.array]
                const [barOneIdx, newHeight] = animations[i];
                colors[barOneIdx] = 'orange'
                arr[barOneIdx] = newHeight
                this.setState({
                    array: arr,
                    colors: colors,
                })
            }
        }
        let sorted_colors = Array(arr1.length).fill("green")
        this.setState({
            colors: sorted_colors,
            disableInput: false,
            transition: "0.3s",
            speed: 200,
            AlgocolorSelect: ["white","white","white","white","white","white"]
        })
    }


    cocktailSorter = async () => {
        this.setState({
            algorithm: 5,
            disableInput: true,
        })
        let arr = [...this.state.array]
        let swapped = true
        let n = arr.length
        let start = 0, end = n - 1
        let colors = Array(arr.length).fill('blueviolet')
        for (let k = 0; k < n; k++) {
            let speed2 = this.state.speed
            for (let i = start; i < end; ++i) {
                speed2 = this.state.speed
                colors[i] = "red"
                colors[i + 1] = "red"
                this.setState({
                    colors: colors
                })
                await new Promise(resolve => setTimeout(resolve, speed2));
                if (arr[i] > arr[i + 1]) {
                    if (speed2 !== 0) {
                        colors[i] = "pink"
                        colors[i + 1] = "pink"
                        this.setState({
                            colors: colors
                        })
                        await new Promise(resolve => setTimeout(resolve, speed2));
                    }
                    let temp = arr[i]
                    arr[i] = arr[i + 1]
                    arr[i + 1] = temp
                }
                this.setState({
                    array: arr
                })
                colors[i] = "blueviolet"
                this.setState({
                    colors: colors
                })
                if (speed2 !== 0) {
                    await new Promise(resolve => setTimeout(resolve, speed2));
                }
            }
            colors[end] = "green"
            this.setState({
                colors: colors
            })

            if (!swapped)
                break
            --end

            for (let i = end - 1; i >= start; --i) {
                speed2 = this.state.speed
                colors[i] = "orange"
                colors[i + 1] = "orange"
                this.setState({
                    colors: colors
                })
                await new Promise(resolve => setTimeout(resolve, speed2));
                if (arr[i] > arr[i + 1]) {
                    if (speed2 !== 0) {
                        colors[i] = "pink"
                        colors[i + 1] = "pink"
                        this.setState({
                            colors: colors
                        })
                        await new Promise(resolve => setTimeout(resolve, speed2));
                    }
                    let temp = arr[i]
                    arr[i] = arr[i + 1]
                    arr[i + 1] = temp
                }
                this.setState({
                    array: arr,
                })
                colors[i + 1] = "blueviolet"
                this.setState({
                    colors: colors
                })
                if (speed2 != 0) {
                    await new Promise(resolve => setTimeout(resolve, speed2));
                }
            }
            colors[start] = "green"
            this.setState({
                colors: colors
            })
            ++start;
        }
        this.setState({
            array: arr,
            disableInput: false,
            speed: 200,
            transition: "0.3s"
        })
    }

    countSorter = async () => {
        this.setState({
            disableInput: true
        })
        let arr = [...this.state.array]
        let min = Math.min(...arr)
        let max = Math.max(...arr)
        let colors = Array(arr.length).fill('blueviolet')
        let speed3 = this.state.speed
        const count = {};
        // First populate the count object
        for (let i = min; i <= max; i++) {
            count[i] = 0;
            // colors[i] = "blueviolet"
            // await new Promise(resolve => setTimeout(resolve, 10));
        }
        for (let k = 0;k<arr.length; k++) {
            speed3 = this.state.speed
            colors[k] = "red"
            this.setState({
                colors: colors
            })
            await new Promise(resolve => setTimeout(resolve, speed3));
            colors[k-1] = "blueviolet"
            if(k==arr.length-1) {
                colors[k] = "blueviolet"
            }
            this.setState({
                colors: colors
            })
            await new Promise(resolve => setTimeout(resolve, speed3));
        }
        for (let i = 0; i < arr.length; i++) {
            speed3 = this.state.speed
            colors[i]="orange"
            this.setState({
                colors: colors
            })
            await new Promise(resolve => setTimeout(resolve, speed3));
            count[arr[i]] += 1;
        }
        const sortedArr = [];
        await new Promise(resolve => setTimeout(resolve, speed3+100));
        for (let i = min; i <= max; i++) {
            while (count[i] > 0) {
                sortedArr.push(i);
                // colors.push("green")
                count[i]--;
                // this.setState({
                //     array: sortedArr,
                //     // colors: colors
                // })
            }
        }
        for(let k=0;k<sortedArr.length;k++)
        {
            speed3 = this.state.speed
            colors[k]="green"
            arr[k] = sortedArr[k]
            await new Promise(resolve => setTimeout(resolve, speed3));
            this.setState({
                array: arr,
                colors:colors
            })
        }
        this.setState({
            disableInput: false,
            speed: 200,
            transition: "0.3s"
        })
        
    }
    quickSortHelper = async () => {
        this.setState({
            disableInput: true,
            algorithm: 7
        })
        let arr = [...this.state.array]
        let start = 0, end = arr.length-1
        await this.quickSort(arr, start, end)
        let colors = Array(arr.length).fill("green") 
        this.setState({
            array: arr,
            colors: colors,
            disableInput: false,
            speed: 200,
            transition: "0.3s",
            AlgocolorQuick: ["white","white","white","white","white","white","white","white"]
        })

    }

    quickSort = async (arr, start, end) => {
        let speed = this.state.speed
        let colors = Array(arr.length).fill("blueviolet") 
        if(start>=end) {
            return
        }
        let index = await this.partition(arr, start, end)
        await sleep(speed)
        await this.quickSort(arr, start, index-1)
        this.setState({
            colors: colors
        })
        await sleep(speed)
        await this.quickSort(arr, index+1, end)
    }

    partition = async (arr, start, end) => {
        let AlgocolorQuick = ["white","yellow","yellow","white","white","white","white","white"]
        this.setState({
            AlgocolorQuick: AlgocolorQuick
        })
        let colors = [...this.state.colors]
        let speed = this.state.speed
        let pivotIndex = start
        let pivotValue = arr[end]
        colors[pivotIndex] = "blue"
        colors[end] = "red"
        await sleep(speed)
        for(let i=start; i<end; i++) {
            AlgocolorQuick = ["white","white","yellow","yellow","white","white","white","white"]
            speed = this.state.speed
            colors[pivotIndex] = "blue"
            colors[i] = colors[i]!=="blue" ? "orange" : "blue"
            this.setState({
                colors: colors,
                AlgocolorQuick: AlgocolorQuick
            })
            AlgocolorQuick = ["white","white","white","white","yellow","white","white","white"]
            this.setState({
                AlgocolorQuick: AlgocolorQuick
            })
            await sleep(speed)
            if(arr[i]<pivotValue) {
                colors[i]="pink"
                colors[pivotIndex]="pink"
                AlgocolorQuick = ["white","white","white","white","white","yellow","yellow","white"]
                this.setState({
                    colors: colors,
                    AlgocolorQuick: AlgocolorQuick
                })
                if(speed!==0) {
                    await sleep(speed)
                }
                await this.swap(arr, i, pivotIndex)
                if(speed!==0) {
                    await sleep(speed)
                }
                pivotIndex++
                this.setState({
                    array: arr
                })
            }       
            await sleep(speed)
            colors[i]="blueviolet"
            colors[pivotIndex-1] = "blueviolet"
            this.setState({
                colors: colors
            })     
        }
        await sleep(speed)
        colors[pivotIndex] = "cyan"
        colors[end] = "cyan"
        AlgocolorQuick = ["white","white","white","white","white","white","white","yellow"]
        this.setState({
            colors: colors,
            AlgocolorQuick: AlgocolorQuick
        })
        await sleep(speed)
        await this.swap(arr, pivotIndex, end)
        this.setState({
            array: arr
        })
        await sleep(speed)
        colors[pivotIndex] = "blueviolet"
        colors[end] = "blueviolet"
        this.setState({
            colors: colors
        })
        return pivotIndex
    }

    swap = async (arr, a, b) => {
        let temp = arr[a]
        arr[a] = arr[b]
        arr[b] = temp
    }
    render() {
        return (
            <div>
                <Navbar />
                {/* <ModalGuide /> */}
                <div className="main">
                    <div className="row">
                        <div className="col-lg-2 col-12 toolbar">
                            <ToolBar state={this.state} clicked={this} />
                        </div>
                        <div className="col-lg-7 col-12 array-display">
                            <ArrayDisplay state={this.state} />
                        </div>
                        <div className="col-lg-3 col-12">
                            <ShowAlgorithm value={this.state.algorithm} state={this.state} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    // console.log(animations)
    return animations
}
function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
        animations.push([i, j]);
        animations.push([i, j]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= middleIdx) {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


function swap(arr, first_Index, second_Index) {
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export default Sorter