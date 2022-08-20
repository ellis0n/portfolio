import "./App.css";
import { Routes, Route } from "react-router-dom";
import Music from "./components/Music";
import Bio from "./components/Bio";
import Landing from "./components/Landing";
import Work from "./components/Work";
import Design from "./components/Design";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/bio" element={<Bio></Bio>}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/design" element={<Design />}></Route>
        <Route path="/music" element={<Music></Music>}></Route>
      </Routes>
    </div>
  );
}

export default App;
