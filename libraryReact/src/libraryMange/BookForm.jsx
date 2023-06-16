import React from "react";

const BookForm = ({ changeInput, textRef, book, onSubmit }) => {
  const { title, author, bookcode, isEdit } = book;
  return (
    <div className="book-input">
      <form className="book-form" onSubmit={onSubmit}>
        <p>
          <label htmlFor="title">장르</label>
          <input
            type="text"
            id="title"
            placeholder="북 장르입력 (소설)"
            ref={textRef}
            onChange={changeInput}
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
            onChange={changeInput}
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
            onChange={changeInput}
            value={bookcode}
            name="bookcode"
          />
        </p>

        <p>
          <button className="btn" type="submit">
            추가
          </button>
        </p>
      </form>
    </div>
  );
};

export default BookForm;
