import "../App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import HomePageLayout from "../layouts/HomePageLayout";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePageLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/task" element={<div>Task</div>} />
          <Route path="/mentors" element={<div>mentors</div>} />
          <Route path="/message" element={<div>message</div>} />
          <Route path="/settings" element={<div>settings</div>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
