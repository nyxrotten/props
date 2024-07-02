import deleteTask from '../App'

function Task ( {taskList, delTask, strikeTask} ) {

  
   
    return (
        <>
        <div className="taskListBox">
            { taskList.map((task) => (
                <div className="taskBox" key={task.id}>
                    <input type="checkbox" onClick={strikeTask}></input>
                    <li>{task.text}</li>
                    <button onClick={delTask}>Delete</button>
                </div>
                ))
            }
        </div>
        </>
        )
}
 
export default Task 