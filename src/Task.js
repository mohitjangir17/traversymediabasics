import "./App.css";
import Button from "./Button";

function Task({ task, onDelete }) {
  const onDeletee = () => {
    console.log("delete");
  };
  return (
    <div className="Task">
      <h2>{task.task}</h2>
      <h2>{task.time}</h2>
      <button onClick={onDeletee}></button>
      <Button onClick={onDelete} text="Delete" />
    </div>
  );
}

export default Task;
