import { useEffect, useState } from "react";
import { useBook } from "../contexts/BookContext";
import { EditBookContainer } from "../styled/Bookstyled";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const { editID } = useParams();
  const [current, setCurrent] = useState({ id: 0, genre: "", title: "", author: "", bookcode: "" });
  const { genre, title, author, bookcode } = current;
  const { data, onEdit } = useBook();
  useEffect(() => {
    setCurrent(data.find(item => item.id === Number(editID)));
  }, [editID, data]);
  const changeInputEdit = e => {
    const { name, value } = e.target;
    setCurrent({ ...current, [name]: value });
  };
  const onSubmit = e => {
    e.preventDefault();
    onEdit(current);
    navigate("/");
  };
  const navigate = useNavigate();
  return (
    <EditBookContainer className="book-input">
      <form className="book-form" onSubmit={onSubmit}>
        <p>
          <label htmlFor="genre">장르</label>
          <input
            type="text"
            id="genre"
            placeholder="북 장르입력 (소설)"
            onChange={changeInputEdit}
            value={genre}
            name="genre"
          />
        </p>
        <p>
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            placeholder="북 제목입력 (제목)"
            onChange={changeInputEdit}
            value={title}
            name="title"
          />
        </p>
        <p>
          <label htmlFor="author">저자</label>
          <input
            type="text"
            id="author"
            placeholder="저자 입력 (임수정)"
            onChange={changeInputEdit}
            value={author}
            name="author"
          />
        </p>
        <p>
          <label htmlFor="bookcode">책 코드</label>
          <input
            type="text"
            id="bookcode"
            placeholder="책 코드 입력 (00001)"
            onChange={changeInputEdit}
            value={bookcode}
            name="bookcode"
          />
        </p>

        <p>
          <button className="btn" type="submit">
            수정
          </button>
          <button className="btn" onClick={() => navigate("/")}>
            취소
          </button>
        </p>
      </form>
    </EditBookContainer>
  );
};

export default EditBook;
