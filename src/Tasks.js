import "./App.css";
import Task from "./Task";

function Tasks({ tasks, onDelete }) {
  return (
    <div className="Tasks">
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onDelete={onDelete} />
        </li>
      ))}
    </div>
  );
}

export default Tasks;
