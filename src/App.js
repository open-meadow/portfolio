import Home from "./pages/Home";

import logo from "./logo.svg";
import './components/styles/App.scss';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
