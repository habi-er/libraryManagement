import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { LoginContainer } from "../styled/Bookstyled";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { authed, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onSubmit = e => {
    e.preventDefault();
    if (!email || !password) return alert("아이디와 비밀번호를 입력하세요.");
    login(email, password);
    navigate("/");
  };
  return (
    <LoginContainer className="login">
      <h2>로그인</h2>
      <form onSubmit={onSubmit}>
        <p>
          <label htmlFor="">이메일 </label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="1234@1234" />
        </p>
        <p>
          <label htmlFor="">비밀번호 </label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </p>
        <button type="submit">로그인</button>
      </form>
    </LoginContainer>
  );
};

export default Login;
