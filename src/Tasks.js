import "./App.css";
import Task from "./Task";

function Tasks({ tasks, onDelete, onDoubleClick }) {
  return (
    <div className="Tasks">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDoubleClick={onDoubleClick}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default Tasks;
