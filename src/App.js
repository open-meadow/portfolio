import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { BlogListPage } from "./pages/BlogListPage.tsx";
import { AboutPage } from "./pages/AboutPage.tsx";
import "./components/styles/App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Resume } from "./pages/Resume.tsx";
import { ProjectPage } from "./pages/ProjectPage.tsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<ProjectPage/>}></Route>
          <Route path="/project/:id" element={<Projects />}></Route>
          <Route path="/blogs" element={<BlogListPage/>}></Route>
          {/* <Route path="/blog/:id" element={<BlogPage />}></Route> */}
          <Route path="/about" element={<AboutPage/>}></Route>
          <Route path="/resume" element={<Resume/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
