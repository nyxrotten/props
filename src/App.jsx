import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

const addTask = (inputAddTask) => {
  const newId = tasks.length + 1;
  const newTaskName = "Hacer colada";
  const completedTask = false;
  const newTask = {id: newId, text: newTaskName, completed: completedTask};
  setTasks(...tasks, newTask)
}

const deleteTask = (id) => {
  const taskId = id;
  setTasks(tasks.filter(task => task.id !== taskId))
}

  return (
    <></>
  );
};

export default App;
