import './App.css'
import {useState} from 'react'
import AddTaskForm from './components/AddTaskForm'
import Task from './components/Task'

const App = () => {
  
  const [tasks, setTasks] = useState([
        { id: 1, text: 'Hacer la compra', completed: false },
        { id: 2, text: 'Llamar al médico', completed: true },
        { id: 3, text: 'Hacer ejercicio', completed: false }
    ]);

const returnTasks = (tasks) => {
  return tasks
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
