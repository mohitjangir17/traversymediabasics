import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Tasks from "./Tasks";
import AddTask from "./AddTask";

function App() {
  var [tasks, setTasks] = useState([
    {
      id: "0",
      task: "Appointment at college",
      time: "12pm",
      reminder: true,
    },
    {
      id: "1",
      task: "gedi route",
      time: "6pm",
      reminder: true,
    },
    {
      id: "2",
      task: "Dinner",
      time: "9pm",
      reminder: true,
    },
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("deleted");
  };

  const toggleReminder = (id) => {
    console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <div className="App">
      <Header
        showAdd={showAddTask}
        onAdd={() => setShowAddTask(!showAddTask)}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          onDoubleClick={toggleReminder}
          tasks={tasks}
          onDelete={deleteTask}
        />
      ) : (
        <h1>No Tasks Available</h1>
      )}
    </div>
  );
}

export default App;
