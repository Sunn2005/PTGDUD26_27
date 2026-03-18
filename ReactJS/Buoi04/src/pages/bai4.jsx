// filepath: t:\Buoi04\src\pages\bai4.jsx
import React, { useState, useEffect } from "react";


function Bai4() {

  const [originalPosts, setOriginalPosts] = useState([]);

  const [filteredPosts, setFilteredPosts] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);


        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error("error");
        }

        const data = await response.json();

        setOriginalPosts(data);

        
        setFilteredPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); 


  useEffect(() => {
    
    if (searchTerm.trim() === "") {
      setFilteredPosts(originalPosts);
      return;
    }

    const filtered = originalPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredPosts(filtered);
  }, [searchTerm, originalPosts]);

 
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  
  if (loading) {
    return (
      <div>
        <h1>Bài 4 – Search Posts</h1>
        <p>Đang tải dữ liệu...</p>
      </div>
    );
  }


  if (error) {
    return (
      <div>
        <h1>Bài 4 – Search Posts</h1>
        <p>Lỗi: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Bài 4 – Search Posts</h1>
      <p>Tổng số posts: {originalPosts.length} | Đang hiển thị: {filteredPosts.length}</p>

      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Tìm kiếm theo title..."
    
        />
      </div>

      
      <div>
        
        {filteredPosts.length === 0 ? (
          <p>No posts found</p>
        ) : (
          
          filteredPosts.map((post) => (
            <div
              key={post.id}
        
            >
          
              <h3>
                {post.id}. {post.title}
              </h3>

             
              <p>
                {post.body}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Bai4;
