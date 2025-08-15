import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "../components/Navbar";

// Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import UserProfile from "../pages/UserProfile";
import PublicProfile from "../pages/PublicProfile";
import RequestForm from "../pages/RequestForm";
import SwapRequests from "../pages/SwapRequests";

export default function AppRoute() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar appears on all pages */}
        <Navbar />

        {/* Page content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/user/:id" element={<PublicProfile />} />
            <Route path="/request/:id" element={<RequestForm />} />
            <Route path="/swap-requests" element={<SwapRequests />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
