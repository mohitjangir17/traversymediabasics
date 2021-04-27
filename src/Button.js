import "./App.css";

function Button({ text, onClick, style }) {
  return (
    <div className="Button">
      <button style={style} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default Button;
