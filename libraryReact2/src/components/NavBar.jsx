import { Link } from "react-router-dom";
import { NavBarContanier } from "../styled/Bookstyled";
import { useAuth } from "../contexts/AuthContext";
const NavBar = () => {
  const { authed } = useAuth();
  return (
    <NavBarContanier>
      <ul>
        <Link to="/">
          <li>홈</li>
        </Link>
        <Link to="/add">
          <li>추가</li>
        </Link>
        {authed ? (
          <Link to="/logout">
            <li>로그아웃</li>
          </Link>
        ) : (
          <Link to="/login">
            <li>로그인</li>
          </Link>
        )}
      </ul>
    </NavBarContanier>
  );
};

export default NavBar;
