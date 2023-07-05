import { createContext, useContext, useEffect, useMemo, useReducer, useRef } from "react";
import { BookReducer } from "./BookReducer";
// localStorage.clear();
const initialState = {
  text: "",
  data: localStorage.getItem("bookData")
    ? JSON.parse(localStorage.getItem("bookData"))
    : [
        {
          id: 1,
          genre: "자연과학/사회과학/인문학",
          author: "버네사 우즈 외 1명",
          title: "다정한 것이 살아남는다",
          bookcode: "#00001",
        },
        {
          id: 2,
          genre: "사회과확/인문학",
          author: "마이클 센델",
          title: "JUSTICE, 정의란 무엇인가",
          bookcode: "#00002",
        },
        {
          id: 3,
          genre: "사회과학/에세이/인문학",
          author: "마이클 샌델",
          title: "생명의 윤리를 말하다",
          bookcode: "#00003",
        },
        { id: 4, genre: "역사/인문학", author: "유발 하라리", title: "사피엔스", bookcode: "#00004" },
        { id: 5, genre: "소설", author: "메트 헤이그", title: "미드나잇 인 라이브러리", bookcode: "#00005" },
        { id: 6, genre: "소설", author: "기욤 뮈소", title: "당신 거기 있어줄래요?", bookcode: "#00006" },
      ],
};
//관리자
const BookContext = createContext();
export const useBook = () => useContext(BookContext);
const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BookReducer, initialState);
  const { data, text } = state;
  const no = JSON.parse(localStorage.getItem("bookNo")) || useRef(data.length + 1);
  useEffect(() => {
    localStorage.setItem("bookData", JSON.stringify(data));
    localStorage.setItem("bookNo", JSON.stringify(no));
  });
  const onAdd = item => {
    dispatch({ type: "ADD", book: { ...item, id: no.current++ } });
    localStorage.setItem("bookNo", JSON.stringify(no));
  };
  const onDel = id => {
    dispatch({ type: "DEL", id });
  };
  const onEdit = book => {
    dispatch({ type: "EDIT", book });
  };
  const value = useMemo(() => ({ data, onAdd, onDel, onEdit }), [{ data, onAdd, onDel, onEdit }]);
  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};

export default BookProvider;
