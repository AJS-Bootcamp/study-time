import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Study from "./pages/Study";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import Timer from "./components/Timer"; 
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/timer" element={<Timer />} /> {/* Define the route for the Timer component */}
        <Route path="/" element={<Homepage />} />
        <Route path="Study" element={<Study />} />
        <Route path="AboutPage" element={<AboutPage />} />
        <Route path="ContactPage" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
