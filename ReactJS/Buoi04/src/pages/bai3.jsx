import React, { useState, useEffect } from "react";

function Bai3() {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (userId === "") {
      setUser(null);
      setError("");
      return;
    }

    const id = parseInt(userId, 10);

    if (isNaN(id) || id < 1 || id > 10) {
      setUser(null);
      setError("User not found");
      return;
    }
    const fetchUser = async () => {
      setLoading(true);
      setError("");

      try {
    
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/" + id
        );

        if (!response.ok) {
          throw new Error("User not found");
        }

        const data = await response.json();

        if (!data || Object.keys(data).length === 0) {
          throw new Error("User not found");
        }

        setUser(data);
        setError("");
      } catch (err) {
        setUser(null);
        setError("User not found");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [userId]); 

 
  const handleInputChange = (e) => {
    setUserId(e.target.value);
  };

  return (
    <div>
      <p>Nhập userId (1-10) để xem thông tin user</p>
      <div>
        <label htmlFor="userId" >
          User ID:
        </label>
        <input
          type="text"
          id="userId"
          value={userId}
          onChange={handleInputChange}
          placeholder="Nhập số từ 1 đến 10"
        />
      </div>
      {loading && <p>Đang tải...</p>}
      {error && !loading && <p>{error}</p>}

      {user && !loading && !error && (
        <div>
          <h2>{user.name}</h2>
          <div>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Website:</strong> {user.website}
            </p>
          </div>
        </div>
      )}

      {!userId && !loading && (
        <p>Vui lòng nhập User ID để xem thông tin</p>
      )}
    </div>
  );
}

export default Bai3;
