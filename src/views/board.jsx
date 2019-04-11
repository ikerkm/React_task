import React, { Component } from 'react';
//import './css/board.css/';
import Task from '../components/task.jsx'


class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task_name: "",
            show_task_creator: false,
            task_created: false,
            task_holder: [],
        }

    }


    openTaskCreator = () => {

        this.setState({ show_task_creator: true, });





    }

    handleChange = (e) => {
        this.setState({
            task_name: e.target.value,

        })

    }

    createTask = () => {

        this.state.task_holder.push(<Task task_name={this.state.task_name}></Task>)
        this.setState({
            show_task_creator: false,
            task_created: true,
            //task_holder: <Task task_name={this.state.task_name}></Task>,

        });

    }
    render() {

        let styler = "";
        if (this.state.show_task_creator) {

            styler = { display: 'flex' };

        } else {

            styler = { display: "none" };

        }



        return (
            <div className="container">
                <div className="Task_manager">
                    <div className="board_div">

                        <span>   New task   <input value="+" onClick={this.openTaskCreator} className="button_creator" type="button"></input></span>

                    </div>
                    <div className="task_creator_div" style={styler}>
                        <text>Task Name</text>
                        <input name="task_name" ref="task_name" onChange={this.handleChange} type="text"></input>
                        <input type="button" onClick={this.createTask} value="Create task"></input>

                    </div>
                </div>

                {this.state.task_holder.map(function (x) {
                    return x;
                })}

            </div>
        )


    }


}
export default Board;

/*
añadir tarea
borrar tarea
editar texto tarea
marcar como completada */