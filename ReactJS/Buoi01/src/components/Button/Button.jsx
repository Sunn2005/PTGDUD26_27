import "./Button.css";

function Button({ type = "primary", children, onClick }) {
  return (
    <button className={`btn btn-${type}`} onClick={onClick}>
      {children} Click
    </button>
  );
}

export default Button;
