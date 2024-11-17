import { Route, Routes } from "react-router-dom";
import Home from "./pages/components/home/Home";
import Navbar from "./pages/components/Navbar";
import Footer from "./pages/components/Footer";
function App() {
  return (
    <>
      <Navbar/>
      <Home />
      <Footer/>
    </>
  );
}

export default App;
