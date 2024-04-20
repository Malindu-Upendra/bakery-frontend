import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/Login";
import Dashboard from "../components/layout/Dashboard";
import UsersPage from "../pages/dashboard/Users";
import ProtectedRoute from "../auth/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="*" element={<NoMatch />} /> 404 */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Routes>
                <Route element={<Dashboard />}>
                  <Route index element={<UsersPage />} />
                </Route>
              </Routes>
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
