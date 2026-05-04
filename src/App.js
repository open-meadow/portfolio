import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog.tsx";
import "./components/styles/App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/project/:id" element={<Projects />}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
