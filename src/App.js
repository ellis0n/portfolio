import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Bio from "./components/Bio";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/BIO" element={<Bio></Bio>}></Route>

        {/* <Route path="/about" element={<About></About>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
