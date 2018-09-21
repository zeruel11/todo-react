import React, { Component } from "react";
import "./ToDo.css";
import ToDoItem from "./components/ToDoItem";
import Logo from "./assets/logo.png";

class ToDo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //  this is where data resides
            list: [
                {
                    todo: "clean the room"
                },
                {
                    todo: "buy milk"
                }
            ],
            todo: ""
        };
    }

    createNewToDoItem = () => {
        this.setState(({ list, todo }) => ({
            list: [
                ...list,
                {
                    todo
                }
            ],
            todo: ""
        }));
    };

    handleKeyPress = e => {
        if (e.target.value !== "") {
            if (e.key === "Enter") {
                this.createNewToDoItem();
            }
        }
    };

    handleInput = e => {
        this.setState({
            todo: e.target.value
        });
    };

    // emit back to parent from child
    deleteItem = indexToDelete => {
        this.setState(({ list }) => ({
            list: list.filter((toDo, index) => index !== indexToDelete)
        }));
    };

    render() {
        return (
            <div className="ToDo">
                <img className="Logo" src={Logo} alt="React Logo" />
                <h1 className="ToDo-Header">React To Do</h1>
                <div className="ToDo-Container">
                    <div className="ToDo-Content">
                        {this.state.list.map((item, key) => {
                            return (
                                <ToDoItem
                                    key={key}
                                    item={item.todo}
                                    deleteItem={this.deleteItem.bind(this, key)}
                                />
                            );
                        })}
                    </div>

                    <div>
                        <input
                            type="text"
                            value={this.state.todo}
                            onChange={this.handleInput}
                            onKeyPress={this.handleKeyPress}
                        />
                        <button className="ToDo-Add" onClick={this.createNewToDoItem}>
                            +
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDo;
