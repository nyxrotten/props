function Task ( {taskList} ) {

    return (
        <>
        <div className="taskListBox">
            { taskList.map((task) => (
                <div className="taskBox">
                    <li>{task.text}</li>
                    <button>Borrar</button>
                    <input type="checkbox"></input>
                </div>
                ))
            }
        </div>
        </>
        )
}

export default Task 