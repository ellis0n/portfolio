import "./App.css";
import { Routes, Route } from "react-router-dom";
import Music from "./components/Music";
import Bio from "./components/Bio";
import Landing from "./components/Landing";
import Work from "./components/Work";
import Design from "./components/Design";
import Videos from "./components/Videos";
import Conditioner from "./components/Conditioner/Conditioner";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/bio" element={<Bio></Bio>}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/design" element={<Design />}></Route>
        <Route path="/music" element={<Music></Music>}></Route>
        <Route path="/conditioner" element={<Conditioner />}></Route>
        <Route path="/videos" element={<Videos></Videos>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
