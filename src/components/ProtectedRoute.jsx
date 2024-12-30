import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/FakeAuthContex";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isAuthenticate } = useAuth();
  const navigate = useNavigate();
  useEffect(
    function () {
      if (!isAuthenticate) navigate("/");
    },
    [isAuthenticate, navigate]
  );

  return isAuthenticate ? children : null;
}

export default ProtectedRoute;
