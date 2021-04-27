import "./App.css";
import Button from "./Button";

function Header() {
  return (
    <div className="Header">
      <h1>Task Tracker</h1>
      <Button style={style} text="Add" />
    </div>
  );
}
var style = {
  marginTop: "3em",
};
export default Header;
