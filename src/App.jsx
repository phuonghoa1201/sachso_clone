import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import { useState } from "react";
import Dashboard from "./admin/Dashboard.jsx";

function AppRoutes() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);

  const handleLogginSucess = () => {
    setIsLoggedIn(true);
    setOpenLoginModal(false);
    navigate("/dashboard");  
  };

  const handleOpenLoginModel = () => setOpenLoginModal(true);
  const handleCloseLoginModal = () => setOpenLoginModal(false);

  // Ẩn Navbar khi đang ở trang /dashboard
  const showNavbar = !location.pathname.startsWith("/dashboard")

  return (
    <>
      {showNavbar && <Navbar onOpenLoginModal={handleOpenLoginModel} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>

      {!isLoggedIn && (
        <Login
          open={openLoginModal}
          onClose={handleCloseLoginModal}
          onLoginSuccess={handleLogginSucess}
        />
      )}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
