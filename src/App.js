import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Tasks from "./Tasks";

function App() {
  var [tasks, setTasks] = useState([
    {
      id: "0",
      task: "Appointment at college",
      time: "12pm",
    },
    {
      id: "1",
      task: "gedi route",
      time: "6pm",
    },
    {
      id: "2",
      task: "Dinner",
      time: "9pm",
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("deleted");
  };

  return (
    <div className="App">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        <h1>No Tasks Available</h1>
      )}
    </div>
  );
}

export default App;
