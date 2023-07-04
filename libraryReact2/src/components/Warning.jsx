import React from "react";
import { WarningContainer } from "../styled/Bookstyled";
import { Link } from "react-router-dom";
const Warning = () => {
  return (
    <WarningContainer className="warning">
      <h2>관리자 외에는 이용이 불가합니다.</h2>
      <p>로그인 페이지로 이동하시겠습니까?</p>
      <p>
        <Link to="/login">
          <button>Yes</button>
        </Link>
        <Link to={-1}>
          <button>No</button>
        </Link>
      </p>
    </WarningContainer>
  );
};

export default Warning;
