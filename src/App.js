import React from "react";
import NavBar from "./components/navbar/NavigationBar";
import Home from "./pages/Home";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/footer/Footer";
import "./styles/style.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Project />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
