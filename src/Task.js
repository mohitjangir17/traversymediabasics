import "./App.css";
import Button from "./Button";

function Task({ task, onDelete, onDoubleClick }) {
  return (
    <div
      className={`Task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onDoubleClick(task.id)}
    >
      <ul>
        <li>
          <h2>{task.task}</h2>
          <h2>{task.time}</h2>
        </li>
      </ul>
      <div>
        <Button style={style} onClick={() => onDelete(task.id)} text="Delete" />
      </div>
    </div>
  );
}
var style = {
  margin: "4em",
  padding: ".5em 1em",
  backgroundColor: "red",
  border: "none",
  color: "white",
  borderRadius: "4px",
  cursor: "pointer",
};
export default Task;
