import { useState } from "react";
import "./App.css";
import Button from "./Button";

function AddTask({ onAdd }) {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!task) {
      alert("Please Enter a Task");
      return;
    }
    if (!time) {
      alert("Please Enter Time");
      return;
    }
    onAdd({
      task,
      time,
      reminder,
    });

    setTask("");
    setTime("");
    setReminder();
  };
  return (
    <form className="Task-form">
      <div className="form">
        <label htmlFor="">Task</label> <br />
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter  Task"
        />
        <br />
        <label htmlFor="">Time</label> <br />
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Enter Time"
        />
        <br />
        <input
          value={reminder}
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
          type="checkbox"
        ></input>
        <label htmlFor="">Reminder</label>
        <Button style={style} onClick={onSubmit} text={"Add Task"} />
      </div>
    </form>
  );
}
const style = {
  padding: "1em",
  border: "none",
  marginTop: ".5em",
  borderRadius: "5px",
  backgroundColor: "black",
  color: "white",
};
export default AddTask;
