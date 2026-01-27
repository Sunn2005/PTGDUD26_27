import { useState } from "react";

function StudentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <input
        placeholder="Tên"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <h3>Thông tin nhập:</h3>
      <p>Tên: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default StudentForm;
