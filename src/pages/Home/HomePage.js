import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // hapus token
    navigate("/"); // kembali ke home
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
    backgroundColor: "#282c34",
    color: "white",
    fontFamily: "sans-serif",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "1.2em",
    marginTop: "20px",
    backgroundColor: "#61dafb",
    color: "#282c34",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    textDecoration: "none",
  };

  return (
    <div style={containerStyle}>
      <h1>Selamat Datang di Aplikasi Todo List</h1>
      <p>Kelola semua tugas Anda dengan mudah dan efisien.</p>

      <Link to="/login" style={buttonStyle}>
        Masuk
      </Link>

      <Link to="/todos" style={buttonStyle}>
        Lihat Daftar Todo
      </Link>

      <button onClick={handleLogout} style={buttonStyle}>
        Logout
      </button>
    </div>
  );
};

export default HomePage;
