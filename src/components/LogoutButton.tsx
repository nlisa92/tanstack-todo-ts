import { useNavigate } from "react-router-dom";
import queryClient from "../queryClient";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = (): void => {
    localStorage.removeItem("token");

    queryClient.clear();

    navigate("/login");
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}

export default LogoutButton;