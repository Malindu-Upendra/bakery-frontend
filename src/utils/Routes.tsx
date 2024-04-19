import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "../pages/Login";
import Dashboard from "../components/layout/Dashboard";
import UsersPage from "../pages/dashboard/Users";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<UsersPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="*" element={<NoMatch />} /> 404 */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
