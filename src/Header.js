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
  marginTop: "3em",
};
export default Header;
