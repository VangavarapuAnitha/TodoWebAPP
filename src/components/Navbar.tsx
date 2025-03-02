import React from "react";
import "../styles/Navbar.css"; 
const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">To-Do App</h2>
      <div className="menu">
        <a href="/">Home</a>
        <a href="/allTodos">All Tasks</a>
        <a href="#">Completed</a>
        
    </div>
    </nav>
  );
};



export default Navbar;
