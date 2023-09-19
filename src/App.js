import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import ToDo from "./pages/ToDo";
import Study from "./pages/Study";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="todo" element={<ToDo />} />
        <Route path="study" element={<Study />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
