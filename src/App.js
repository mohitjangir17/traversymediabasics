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
    console.log("delete", id);
  };

  return (
    <div className="App">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
