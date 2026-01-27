import { useState } from "react";
import Button from "../Button/Button";
import "./Alert.css";

function Alert() {
  const [type, setType] = useState("");

  if (!type) return (
    <div className="alert-buttons">
      <Button type="success" onClick={() => setType("success")}>Success</Button>
      <Button type="danger" onClick={() => setType("error")}>Error</Button>
      <Button type="primary" onClick={() => setType("warning")}>Warning</Button>
    </div>
  );

  return (
    <div className={`alert alert-${type}`}>
      <span>{type.toUpperCase()} MESSAGE</span>
      <button className="close" onClick={() => setType("")}>×</button>
    </div>
  );
}

export default Alert;
