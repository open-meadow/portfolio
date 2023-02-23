import Home from "./pages/Home";
import Projects from "./pages/Projects";

import './components/styles/App.scss';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/project" element={<Projects/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
