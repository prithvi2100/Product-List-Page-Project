import React from "react";
import "./App.css";
import Banner from "./components/banner";
import Header from "./components/header";
import Footer from "./components/footer";
import MainContent from "./components/mainContent";

function App() {
  return (
    <div className="container">
      <Banner />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
