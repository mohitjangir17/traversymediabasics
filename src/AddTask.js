import { useState } from "react";
import "./App.css";
import Button from "./Button";

function AddTask({ onAdd }) {
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please Enter a Task");
      return;
    }
    if (!time) {
      alert("Please Enter Time");
      return;
    }
    onAdd({
      text,
      time,
      reminder,
    });

    setText("");
    setTime("");
    setReminder();
  };
  return (
    <form className="Task-form">
      <label htmlFor="">Task</label> <br />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter  Task"
      ></input>{" "}
      <br />
      <label htmlFor="">Time</label> <br />
      <input
        type="text"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="Enter Time"
      ></input>{" "}
      <br />
      <input
        value={reminder}
        checked={reminder}
        onChange={(e) => setReminder(e.currentTarget.checked)}
        type="checkbox"
      ></input>
      <label htmlFor="">Reminder</label>
      <Button onClick={onSubmit} text={"Add Task"} />
    </form>
  );
}
export default AddTask;
