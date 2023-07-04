import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import Home from "./components/Home";
import Logout from "./components/Logout";
import Login from "./components/Login";
import EditBook from "./components/EditBook";
import BookProvider from "./contexts/BookContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalStyle from "./styled/Global";
import BookForm from "./components/BookForm";
import { Wrap } from "./styled/Bookstyled";
import Warning from "./components/Warning";
const AppProvider = ({ contexts, children }) =>
  contexts.reduce(
    (prev, context) =>
      React.createElement(context, {
        children: prev,
      }),
    children
  );
const App = () => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Wrap id="content">
          <AppProvider contexts={[AuthProvider, BookProvider]}>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<BookForm />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/edit">
                <Route path=":editID" element={<EditBook />} />
              </Route>
              <Route path="/warning" element={<Warning />} />
            </Routes>
            <Footer />
          </AppProvider>
        </Wrap>
      </Router>
    </>
  );
};

export default App;
