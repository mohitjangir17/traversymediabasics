import "./App.css";
import Button from "./Button";

function Header() {
  return (
    <div className="Header">
      <h1>Task Tracker</h1>
      <Button text="Add" />
    </div>
  );
}

export default Header;
