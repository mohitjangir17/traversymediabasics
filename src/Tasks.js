import "./App.css";
import Task from "./Task";

function Tasks({ tasks, key }) {
  console.log(tasks);
  return (
    <div className="Tasks">
      {tasks.map((task) => (
        <li>
          <Task key={task.id} task={task} />
        </li>
      ))}
    </div>
  );
}

export default Tasks;
