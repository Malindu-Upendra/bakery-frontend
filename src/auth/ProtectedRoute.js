import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children }) => {
    if (!localStorage.getItem("token")) {
        return <Navigate to="/login" />
    }

    const token = localStorage.getItem("token")
    const decodedToken = jwtDecode(token);

    const expirationTime = decodedToken.exp * 1000;

    const currentTime = Date.now();

    if (currentTime > expirationTime) {
        return <Navigate to="/login" />
    }

    return children;
}

export default ProtectedRoute;