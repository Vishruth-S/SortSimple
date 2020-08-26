import React, { Component } from 'react'

import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import './ModalGuide.css'

import robotimg1 from '../../Assets/img/robot.jpg'
import robotimg2 from '../../Assets/img/robot2.jpg'
import robotimg3 from '../../Assets/img/robot3.jpg'
import robotimg4 from '../../Assets/img/robot4.jpg'
import robotimg5 from '../../Assets/img/robot5.jpg'
import sorter1 from '../../Assets/img/sorter1.png'

class ModalGuide extends Component {
    state = {
        show: true,
        page: 0,
        pagedisplay: ["block","none","none","none","none","none","none","none"]
    }
    hideModal = () => {
        this.setState({
            show: false
        })
    } 
    nextPage = () => {
        let nextpage = this.state.page
        nextpage++
        let pagedisplay = [...this.state.pagedisplay]
        pagedisplay = Array(pagedisplay.length).fill("none")
        pagedisplay[nextpage] = "block"
        this.setState({
            page: nextpage,
            pagedisplay: pagedisplay
        })
    }
    previousPage = () => {
        let prevpage = this.state.page
        prevpage--
        let pagedisplay = [...this.state.pagedisplay]
        pagedisplay = Array(pagedisplay.length).fill("none")
        pagedisplay[prevpage] = "block"
        this.setState({
            page: prevpage,
            pagedisplay: pagedisplay
        })
    }
    render() {
        return (
            <Modal show={this.state.show}>
                <div style={{display: this.state.pagedisplay[0]}}>
                    <Modal.Header><h5 className="heading1">Welcome to SortSimple, A sorting algorithm visualiser</h5></Modal.Header>
                    <Modal.Body>
                        <div className="robot-img-div"><img className="robot-img" src={robotimg1} alt="img"/></div>
                        <p>This short guide will walk you through the features of this application.</p>
                        <p>If you want to dive right in, feel free to press the "Skip" button. Otherwise, press next</p>
                    </Modal.Body>
                </div>
                <div style={{display: this.state.pagedisplay[1]}}>
                    <Modal.Header><h5>So what is a sorting Algorithm?</h5></Modal.Header>
                    <Modal.Body>
                        <div className="robot-img-div"><img className="robot-img" src={robotimg5} alt="img" /></div>
                        <p>A sorting algorithm is a method for reorganizing a large number of items into a specific order, such as alphabetical, highest-to-lowest value or shortest-to-longest distance.</p>
                        <p>This application visualizes various sorting algorithms in action!</p>
                    </Modal.Body>
                </div>
                <div style={{display: this.state.pagedisplay[2]}}>
                    <Modal.Header><h5>About this visualiser</h5></Modal.Header>
                    <Modal.Body>
                        <div className="robot-img-div"><img className="robot-img" src={robotimg3} alt="img" /></div>
                        <p>Here, an array of bars of random heights are displayed. You can change the size of the array using the "change array size" slider.</p>
                        <p>Minimum is 10 elements and maximum is 100 elements.</p>
                        <p>Note that larger the array, more will be the sorting time</p>
                    </Modal.Body>
                </div>
                <div style={{display: this.state.pagedisplay[3]}}>
                    <Modal.Header><h5>Selcting an algorithm</h5></Modal.Header>
                    <Modal.Body>
                        <div className=".robot-img-div"><img className="sorter-img" src={sorter1} alt="img" /></div>
                        <p>You can select any of the listed algorithms from the "select algorithm" drop-down menu</p>
                        <p>This will also display the selected algorithm on the right</p>
                    </Modal.Body>
                </div>
                <div style={{display: this.state.pagedisplay[4]}}>
                    <Modal.Header><h5>Meet the algorithms!</h5></Modal.Header>
                    <Modal.Body>
                        <p>Not all algorithms are created equal. Here are the all algorithms listed with a brief description</p>
                        <p>BubbleSort</p>
                        <p>SelectionSort</p>
                        <p>InsertionSort</p>
                    </Modal.Body>
                </div>
                <div style={{display: this.state.pagedisplay[5]}}>
                    <Modal.Header><h5>Get sorting :)</h5></Modal.Header>
                    <Modal.Body>
                        <div className="robot-img-div"><img className="robot-img" src={robotimg2} alt="img" /></div>
                        <p>Once you finish adjusting the array size and choosing an algorithm, Click on the "Sort" button to begin the action!</p>
                        <p>You can adjust the animation speed anytime using the "change speed" slider.</p>
                    </Modal.Body>
                </div>
                <div style={{display: this.state.pagedisplay[6]}}>
                    <Modal.Header><h5>Enjoy !</h5></Modal.Header>
                    <Modal.Body>
                        <div className="robot-img-div"><img className="robot-img" src={robotimg4} alt="img" /></div>
                        <p>I hope you have just as much fun using this visualising tool as I had building it.</p>
                        <p>You can check out the source code for this project in my Github</p>
                    </Modal.Body>
                </div>
                <Modal.Footer>
                    <button onClick={this.previousPage} style={{display:this.state.page===0 ? "none" : "block"}}>Previous</button>
                    <button onClick={this.nextPage} style={{display:this.state.page===6 ? "none" : "block"}}>Next</button>
                    <button onClick={this.hideModal} style={{display:this.state.page===6 ? "block" : "none"}}>Finish</button>
                    <button onClick={this.hideModal}>Cancel</button>
                </Modal.Footer>
            </Modal>
          );
    }
};

export default ModalGuide