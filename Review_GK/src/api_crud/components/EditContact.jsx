import { useState } from "react";
import { updateContact } from "../api/api";

function EditContact({ id }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleEdit = async () => {
    if (!name || !phone) return;

    await updateContact(id, {
      name: name,
      phone: phone,
    });

    alert("Đã sửa contact");
    setName("");
    setPhone("");
  };

  return (
    <>
    <div>
       <input
        placeholder="Tên mới"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="SĐT mới"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button onClick={handleEdit}>Sửa</button>
    </div>
     
    </>
  );
}

export default EditContact;
