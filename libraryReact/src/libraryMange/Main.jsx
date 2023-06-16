import React, { useEffect, useRef, useState } from "react";
import BookList from "./BookList";
import Message from "./Message";
import BookForm from "./BookForm";
import EditForm from "./EditForm";
import "./style.scss";

const Main = () => {
  const [data, setData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [greenShow, setGreenShow] = useState(false);
  const [msg, setMsg] = useState("테스트");
  const [isMsg, setIsMsg] = useState(false);
  const [current, setCurrent] = useState({});
  const no = useRef(1);
  const textRef = useRef("");
  const [book, setBook] = useState({
    title: "",
    author: "",
    bookcode: "",
  });
  const changeInput = e => {
    const { name, value } = e.target;
    setBook({
      ...book,
      [name]: value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!title || !author || !bookcode) return;
    if (isEdit) {
    } else {
      book.id = no.current++;
      setData([...data, book]);
      setBook({
        title: "",
        author: "",
        bookcode: "",
      });
      textRef.current.focus();
      setIsMsg(true);
      setMsg("추가했습니다");
    }
  };
  const onEdit = book => {
    setIsEdit(true);
    setCurrent(book);
  };
  const onDel = id => {
    setData(data.filter(item => item.id !== id));
    setMsg("값이 삭제되었습니다!");
    setGreenShow(true);
  };
  const onUpdate = book => {
    setIsEdit(false);
    setData(data.map(item => (item.id === book.id ? book : item)));
    setMsg("값이 수정되었습니다!");
    setGreenShow(true);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMsg(false);
      setGreenShow(false);
      setMsg("");
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, [msg]);
  return (
    <section id="content" className="main-book">
      <h2>북카페 도서 관리 시스템</h2>
      <div className="inner">
        {isEdit ? (
          <EditForm current={current} setIsEdit={setIsEdit} onUpdate={onUpdate} textRef={textRef} />
        ) : (
          <BookForm changeInput={changeInput} textRef={textRef} book={book} onSubmit={onSubmit} isEidt={isEdit} />
        )}
        <BookList data={data} onEdit={onEdit} onDel={onDel} />
      </div>
      <Message msg={msg} isMsg={isMsg} greenShow={greenShow} />
    </section>
  );
};

export default Main;
