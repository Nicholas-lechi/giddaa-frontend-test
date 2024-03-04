import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  return (
    <div className="home">
      <Header />
      <div className="main">Home</div>
      <Footer />
    </div>
  );
};

export default HomePage;
