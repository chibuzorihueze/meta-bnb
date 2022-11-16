import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home";
//import Modal from "./components/modal";
import Placetostay from "./components/places";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* {<Modal />} */}
          <Route path="/places" element={<Placetostay />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
