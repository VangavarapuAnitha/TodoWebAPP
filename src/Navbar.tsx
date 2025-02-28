import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>To-Do App</h2>
      <ul style={styles.menu}>
        <li><a href="#">Home</a></li>
        <li><a href="#">All Tasks</a></li>
        <li><a href="#">Completed</a></li>
        <li><a href="#">Pending</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
  },
  logo: {
    margin: 0,
  },
  menu: {
    listStyle: "none",
    display: "flex",
    gap: "15px",
  }
};

export default Navbar;
