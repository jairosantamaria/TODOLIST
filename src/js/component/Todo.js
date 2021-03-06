import React, { useState } from "react";

function Todo() {
    const [task, setTask] = useState("");
    const [listTask, setListTask] = useState("");

    const putTask = () => {
        if (task != "") {
            setListTask([...listTask, task]);
        }
    };
    //delete task

    return (
        <div className="container">
            <div className="todo-box">
                <h1>To Do</h1>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="add new tasl"
                        onChange={e => {
                            setTask(e.target.value);
                        }}
                    />
                    <div className="input-group-append">
                        <button
                            onClick={puTask}
                            className="btn btn-outline-secondary"
                            type="button">
                            confirm
                         </button>
                    </div>
                </div>
                <ul className="List-group">
                    {ListTask.map((item, index) => {
                        return (
                            <li key={index} className="List-group-item">
                                {item}
                            </li>
                        );
                    })
                    }
                </ul>
                <small className="text-muted">Mucho por hacer</small>
            </div>
        </div>
    );
}