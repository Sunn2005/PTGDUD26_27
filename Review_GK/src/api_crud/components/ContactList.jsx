import { useEffect, useState } from "react";
import { getContacts, deleteContact } from "../api/api";
import EditContact from "./EditContact";

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts().then((res) => setContacts(res.data));
  }, []);

  const handleDelete = async (id) => {
    await deleteContact(id);
    setContacts(contacts.filter((c) => c.id !== id));
  };

  return (
    <>
      <h3>Danh sách contact</h3>

      {contacts.map((c) => (
        <div key={c.id}>
          <b>{c.name}</b> – {c.phone}

          <button onClick={() => handleDelete(c.id)}>
            Xoá
          </button>

          <EditContact id={c.id}/>
        </div>
      ))}
    </>
  );
}

export default ContactList;
