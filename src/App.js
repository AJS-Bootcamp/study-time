import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ToDo from "./pages/ToDo";
import Study from "./pages/Study";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./pages/ContactPage";

import "./App.css";
import ContactPage from "./pages/ContactPage";

function App() {
  return (

     <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="todo" element={<ToDo />} />
        <Route path="study" element={<Study />} />
        <Route path="ContactPage" element={<ContactPage />} />
      </Routes>
      <Footer />
     </BrowserRouter>

  );
}

export default App;
