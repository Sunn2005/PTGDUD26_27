import { useState } from "react";
import "./StatusBadge.css";

function StatusBadge() {
  const [status, setStatus] = useState("online");

  return (
    <div>
      <div className={`badge ${status}`}>
        {status}
      </div>

      <button onClick={() => setStatus("online")}>Online</button>
      <button onClick={() => setStatus("offline")}>Offline</button>
      <button onClick={() => setStatus("busy")}>Busy</button>
    </div>
  );
}

export default StatusBadge;
