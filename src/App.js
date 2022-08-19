import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        {/* <Route path="/app" element={<Application></Application>}></Route>
        <Route path="/about" element={<About></About>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
