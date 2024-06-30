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

const addTask = (taskText) => {
      const newId = tasks.length + 1;
      const newTaskName = taskText;
      const completedTask = false;
      const newTask = {id: newId, text: newTaskName, completed: completedTask};
      setTasks({...tasks}, newTask)
    }


const deleteTask = (id) => {
  const taskId = id;
  setTasks(tasks.filter(task => task.id !== taskId))
}

const strikeThrough = (id) => {
  const taskId = id;
  const task = tasks.filter(task => task.id === taskId)
}

  return (
    <>
      <h1>Task list</h1>
      <AddTaskForm />
      <Task taskList={tasks}/>
    </>
  );
};

export default App;
