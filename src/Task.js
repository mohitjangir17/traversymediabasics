import "./App.css";
import Button from "./Button";

function Task({ task, onDelete }) {
  return (
    <div className="Task">
      <ul>
        <li>
          <h2>{task.task}</h2>
          <h2>{task.time}</h2>
        </li>
      </ul>
      <div>
        <Button style={style} onClick={onDelete} text="Delete" />
      </div>
    </div>
  );
}
var style = {
  marginTop: "4em",
};
export default Task;
