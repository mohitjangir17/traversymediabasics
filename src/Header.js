import "./App.css";
import Button from "./Button";

const Header = ({ onAdd, showAdd }) => {
  return (
    <div className="Header">
      <h1>Task Tracker</h1>
      <Button
        text={showAdd ? "Close" : "Add"}
        onClick={() => onAdd()}
        style={style}
      />
    </div>
  );
};
var style = {
  marginTop: "2em",
  padding: ".5em 1em",
  backgroundColor: "green",
  border: "none",
  color: "white",
  borderRadius: "4px",
  cursor: "pointer",
};
export default Header;
