import { useAuth } from "../contexts/AuthContext";
import { LogoutContainer } from "../styled/Bookstyled";

const Logout = () => {
  const { logout } = useAuth();
  return (
    <LogoutContainer className="logout">
      <h2>로그아웃 하시겠습니까?</h2>
      <p><button onClick={logout}>Yes</button></p>
    </LogoutContainer>
  );
};

export default Logout;
