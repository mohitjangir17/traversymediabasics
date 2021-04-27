import "./App.css";
import Task from "./Task";

function Tasks({ tasks, onDelete }) {
  return (
    <div className="Tasks">
      {tasks.map((task) => (
        <Task task={task} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default Tasks;
