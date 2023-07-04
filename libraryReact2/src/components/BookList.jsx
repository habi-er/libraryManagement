import { useBook } from "../contexts/BookContext";
import { BookListContainer } from "../styled/Bookstyled";
import BookItem from "./BookItem";
const BookList = () => {
  const { data } = useBook();

  return (
    <BookListContainer className="book-list">
      <table className="book-table">
        <caption>도서 관리 시스템</caption>
        <colgroup>
          <col className="genre" />
          <col className="title" />
          <col className="author" />
          <col className="bookcode" />
          <col className="del" />
        </colgroup>
        <thead>
          <tr>
            <th>장르</th>
            <th>제목</th>
            <th>저자</th>
            <th>코드</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody className="book-tbody">
          {data.map(item => (
            <BookItem key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </BookListContainer>
  );
};

export default BookList;
