import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  position: relative;
  min-width: 1280px;
  max-width: 1920px;
  margin: auto;
  box-sizing: border-box;
`;
export const Headercontainer = styled.header`
  height: 300px;
  width: 100%;
  background-color: green;
  box-sizing: border-box;

  h2 {
    color: #fff;
    font-size: 42px;
    font-weight: 700;
    text-align: center;
    padding: 50px 0;
  }
`;
export const NavBarContanier = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    li {
      width: 120px;
      text-align: center;
      border: 1px solid #fff;
      margin-left: 40px;
      font-size: 28px;
      font-weight: 500;
      border-radius: 20px;
      color: #fff;
    }
  }
`;
export const HomeContainer = styled.section`
  width: 100%;
  .inner {
    margin: 100px auto;
    width: 1280px;
  }
`;
export const LoginContainer = styled.div`
  width: 500px;
  margin: 100px auto;

  h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  form {
    width: 100%;
    p {
      label {
        display: block;
        margin-bottom: 10px;
        font-size: 18px;
      }
      input {
        box-sizing: border-box;
        width: 100%;
        padding: 15px 20px;
        font-size: 22px;
        margin-bottom: 15px;
        border: none;
        border-bottom: 2px solid #dcdcdc;
        outline: none;
      }
    }
    button {
      margin-top: 20px;
      width: 100%;
      height: 50px;
      cursor: pointer;
      background-color: transparent;
      border: 2px solid limegreen;
      outline: none;
      transition: 0.3s;
      font-size: 18px;
      &:hover {
        background-color: limegreen;
        color: #fff;
      }
    }
  }
`;
export const LogoutContainer = styled.div`
  margin: 100px auto;
  text-align: center;
  h2 {
    font-size: 38px;
    margin-bottom: 30px;
  }
  button {
    width: 150px;
    height: 50px;
    font-size: 26px;
    background-color: transparent;
    border: 2px solid limegreen;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      background-color: limegreen;
      color: #fff;
    }
  }
`;
export const BookFormContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 100px auto;
  .book-form {
    width: 100%;
    p {
      text-align: center;
      margin-bottom: 15px;
      &:nth-child(4) {
        margin-bottom: 50px;
      }
      label {
        font-size: 18px;
        margin-right: 15px;
      }
      input {
        width: 500px;
        box-sizing: border-box;
        padding: 15px 0;
        padding-left: 15px;
        font-size: 22px;
        border: none;
        border-bottom: 1px solid #dcdcdc;
        outline: none;
      }
      button {
        width: 300px;
        height: 40px;
        background-color: transparent;
        outline: none;
        border: 1px solid green;
        cursor: pointer;
        transition: 0.5s;
        &:hover {
          background-color: green;
          color: #fff;
        }
      }
    }
  }
`;
export const EditBookContainer = styled.div`
  width: 100%;
  margin: 100px auto;
  box-sizing: border-box;
  .book-form {
    width: 100%;
    p {
      text-align: center;
      margin-bottom: 15px;
      &:nth-child(4) {
        margin-bottom: 50px;
      }
      label {
        font-size: 18px;
        margin-right: 15px;
      }
      input {
        width: 500px;
        box-sizing: border-box;
        padding: 15px 0;
        padding-left: 15px;
        font-size: 22px;
        border: none;
        border-bottom: 1px solid #dcdcdc;
        outline: none;
      }
      button {
        width: 200px;
        margin-right: 20px;
        height: 40px;
        background-color: transparent;
        outline: none;
        border: 1px solid green;
        cursor: pointer;
        transition: 0.5s;
        &:hover {
          background-color: green;
          color: #fff;
        }
      }
    }
  }
`;
export const BookListContainer = styled.div`
  table {
    width: 100%;
    box-sizing: border-box;
    .genre {
      width: 25%;
    }
    .title {
      width: 30%;
    }
    .author {
      width: 25%;
    }
    .bookcode {
      width: 10%;
    }
    .del {
      width: 10%;
    }
    thead,
    tbody {
      text-align: center;
      vertical-align: middle;
      font-size: 18px;
      tr {
        border: 1px solid #000;
        height: 60px;
        line-height: 60px;
      }
      td {
        button {
          margin-right: 5px;
          width: 40px;
          height: 40px;
          background-color: transparent;
          outline: none;
          border: none;
          color: limegreen;
          i {
            font-size: 25px;
          }
          &:hover {
            background-color: limegreen;
            i {
              color: #fff;
            }
          }
        }
      }
    }
    thead {
      tr {
        border-bottom: 3px solid limegreen;
        background-color: #999;
        color: #fff;
      }
    }
  }
`;
export const MessageContainer = styled.div``;
export const WarningContainer = styled.div`
  text-align: center;
  margin-top: 100px;
  h2 {
    font-size: 32px;
    margin-bottom: 30px;
  }
  p {
    margin-bottom: 20px;
    font-size: 22px;
    button {
      width: 100px;
      height: 40px;
      border: 1px solid limegreen;
      outline: none;
      background-color: transparent;
      margin-right: 20px;
      cursor: pointer;
      &:hover {
        background-color: limegreen;
        color: #fff;
      }
    }
  }
`;
export const FooterContainer = styled.footer``;
