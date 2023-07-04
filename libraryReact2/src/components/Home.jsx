import { HomeContainer } from "../styled/Bookstyled";
import BookForm from "./BookForm";
import BookList from "./BookList";

const Home = () => {
  return (
    <HomeContainer className="main-book">
      <div className="inner">
        <BookList />
      </div>
    </HomeContainer>
  );
};

export default Home;
