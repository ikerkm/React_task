import React, { Component } from 'react';
//import './css/board.css/';

class Task extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task_name: this.props.task_name,

        }

    }


    render() {


        //  console.log(this.state.task_name);



        return (
            <div><text>{this.state.task_name}</text></div>
        )


    }


}
export default Task;