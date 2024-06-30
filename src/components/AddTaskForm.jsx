
function AddTaskForm() {

    const addTask = (taskText) => {
        const newId = tasks.length + 1;
        const newTaskName = taskText;
        const completedTask = false;
        const newTask = {id: newId, text: newTaskName, completed: completedTask};
        setTasks({...tasks}, newTask)
    
    
    }

return (
        <>
            <div className="inputTaskBox">
                <input className="taskInput" type="text" placeholder="Add a new task"></input>
                <button className="addTaskButton" onClick={addTask}>Add task</button>
            </div>

        </>
    )

}

export default AddTaskForm





