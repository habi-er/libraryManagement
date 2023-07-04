import { Link } from "react-router-dom";
import { useBook } from "../contexts/BookContext";
import { useAuth } from "../contexts/AuthContext";

const BookItem = ({ item }) => {
  const { id, genre, title, author, bookcode } = item;
  const { onDel } = useBook();
  const { authed } = useAuth();
  return (
    <tr>
      <td>{genre}</td>
      <td>{title}</td>
      <td>{author}</td>
      <td>{bookcode}</td>
      <td>
        {authed ? (
          <Link to={`/edit/${id}`}>
            <button>
              <i className="xi-pen"></i>
            </button>
          </Link>
        ) : (
          <Link to="/warning">
            <button>
              <i className="xi-pen"></i>
            </button>
            <button>
              <i className="xi-trash"></i>
            </button>
          </Link>
        )}
        {authed && (
          <button onClick={() => onDel(id)}>
            <i className="xi-trash"></i>
          </button>
        )}
      </td>
    </tr>
  );
};

export default BookItem;
