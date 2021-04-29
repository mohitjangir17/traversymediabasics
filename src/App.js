import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Tasks from "./Tasks";
import AddTask from "./AddTask";

function App() {
  var [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  // fetching tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:8080/tasks");
    const data = await res.json();

    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:8080/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  const addTask = async (task) => {
    const res = await fetch("http://localhost:8080/tasks", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random() * 10000000) + 1;
    // const newTask = { id, ...task };
    // console.log(newTask);
    // setTasks([...tasks, newTask]);
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:8080/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
    console.log("deleted");
  };

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:8080/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  const [showAddTask, setShowAddTask] = useState(true);

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
