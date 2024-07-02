import './App.css'
import {useState} from 'react'
import AddTaskForm from './components/AddTaskForm'
import Task from './components/Task'

const App = () => {
  
  const [tasks, setTasks] = useState([
        { id: 1, text: 'Shop groceries', completed: false },
        { id: 2, text: 'Call the doctor', completed: true },
        { id: 3, text: 'Workout', completed: false }
    ]);

const addTask = (newTaskText) => {
  const newTask = {
  id: tasks.length + 1,
  text: newTaskText,
  completed: false }
  
  setTasks({...tasks}, newTask);
  }


const deleteTask = (taskId) => {
  setTasks(tasks.filter(task => task.id !== taskId))
}

const strikeThrough = () => {
  tasks.map((task) => (task.completed === false) ? (console.log("no terminado" + task.text)) : (console.log("terminado" + task.text)))

}

  return (
    <>
      <h1>Task list</h1>
      <AddTaskForm add={addTask} setTasks={setTasks}/>
      <Task taskList={tasks} delTask={deleteTask} strikeTask={strikeThrough}/>
    </>
  );
};

export default App;
