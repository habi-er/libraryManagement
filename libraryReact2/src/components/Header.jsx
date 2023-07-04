import NavBar from "./NavBar";
import { Headercontainer } from "../styled/Bookstyled";
const Header = () => {
  return (
    <Headercontainer id="header">
      <h2>북카페 도서 관리 시스템</h2>
      <NavBar />
    </Headercontainer>
  );
};

export default Header;
