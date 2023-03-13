import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="home">
      <header>
        <Navbar />
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
