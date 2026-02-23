import { useState } from "react";
import { addContact } from "../api/api";

function AddContact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleAdd = async () => {
    if (!name || !phone) return;

    await addContact({
      name: name,
      phone: phone,
    });

    setName("");
    setPhone("");
    alert("Đã thêm contact");
  };

  return (
    <>
      <h3>Thêm contact</h3>

      <input
        placeholder="Tên"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Số điện thoại"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button onClick={handleAdd}>Thêm</button>
    </>
  );
}

export default AddContact;
