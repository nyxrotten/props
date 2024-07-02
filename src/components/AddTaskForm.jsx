import {useState} from 'react'

function AddTaskForm( {add} ) {

    const [newTaskText, setNewTaskText] = useState("");
    const handleChange = (e) => {
        setNewTaskText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
            add(newTaskText);
            
        }
        

return (
        <>
            <form className="inputTaskBox" onSubmit={handleSubmit}>
                <input className="taskInput" type="text" placeholder="Add a new task" onChange={handleChange} ></input>
                <button type="submit" className="addTaskButton">Add task</button>
            </form>

        </>
    )

}

export default AddTaskForm
