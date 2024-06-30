import deleteTask from '../App'

function Task ( {taskList} ) {


    return (
        <>
        <div className="taskListBox">
            { taskList.map((task) => (
                <div className="taskBox" key={task.id}>
                    <input type="checkbox"></input>
                    <li>{task.text}</li>
                    <button>Borrar</button> 
                </div>
                ))
            }
        </div>
        </>
        )
}
 
export default Task 