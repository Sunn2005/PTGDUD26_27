import { useState } from 'react'
import Bai1 from './pages/bai1';
import Bai2 from './pages/bai2';
import Bai3 from './pages/bai3';
import Bai4 from './pages/bai4';
import './App.css'

function App() {
  const [page, setPage] = useState("bai1"); // mặc định bắt đầu từ bài 1

  const renderPage = () => {
    if (page === "bai1") return <Bai1 />;
    if (page === "bai2") return <Bai2 />;
    if (page === "bai3") return <Bai3 />;
    if (page === "bai4") return <Bai4 />;
  };


  return (
    <>
     <div>
      <h1>React Week 4</h1>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setPage("bai1")}>Bài 1</button>
        <button onClick={() => setPage("bai2")}>Bài 2</button>
        <button onClick={() => setPage("bai3")}>Bài 3</button>
        <button onClick={() => setPage("bai4")}>Bài 4</button>
      </div>

      {renderPage()}
    </div>
    </>
  )
}

export default App
