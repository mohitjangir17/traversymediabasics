import "./App.css";

function Task({ task }) {
  return (
    <div className="Task">
      <h2>{task.task}</h2>
      <h2>{task.time}</h2>
    </div>
  );
}

export default Task;
