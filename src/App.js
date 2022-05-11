import { Route, Routes } from "react-router-dom";
import Team from "../src/pages/Team";
import Home from "./components/Home";
import Abouts from "./pages/Abouts";
import Contacts from "./pages/Contacts";
import Error from "./pages/Error";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<Abouts />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/contact" element={<Contacts />}></Route>
        <Route path="/error" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
