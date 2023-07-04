import { useState } from "react";
import { useBook } from "../contexts/BookContext";
import { BookFormContainer } from "../styled/Bookstyled";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const BookForm = () => {
  const { onAdd } = useBook();
  const [newBook, setNewBook] = useState({ genre: "", title: "", author: "", bookcode: "" });
  const changeInput = e => {
    const { value, name } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };
  const { authed } = useAuth();
  const navigate = useNavigate();
  const onSubmit = e => {
    e.preventDefault();
    if (authed) {
      if (!genre || !author || !bookcode || !title) return;
      onAdd(newBook);
      setNewBook({ genre: "", title: "", author: "", bookcode: "" });
      navigate("/");
    } else {
      navigate("/warning");
    }
  };
  return (
    <BookFormContainer className="book-input">
      <form className="book-form" onSubmit={onSubmit}>
        <p>
          <label htmlFor="genre">장르</label>
          <input
            type="text"
            id="genre"
            placeholder="북 장르입력 (소설)"
            onChange={changeInput}
            name="genre"
            value={newBook.genre}
          />
        </p>
        <p>
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            placeholder="북 제목입력 (제목)"
            onChange={changeInput}
            value={newBook.title}
            name="title"
          />
        </p>
        <p>
          <label htmlFor="author">저자</label>
          <input
            type="text"
            id="author"
            placeholder="저자 입력 (임수정)"
            onChange={changeInput}
            name="author"
            value={newBook.author}
          />
        </p>
        <p>
          <label htmlFor="bookcode">책 코드</label>
          <input
            type="text"
            id="bookcode"
            placeholder="책 코드 입력 (00001)"
            onChange={changeInput}
            name="bookcode"
            value={newBook.bookcode}
          />
        </p>

        <p>
          <button className="btn" type="submit">
            추가
          </button>
        </p>
      </form>
    </BookFormContainer>
  );
};

export default BookForm;
