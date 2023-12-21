import { BrowserRouter } from "react-router-dom";
import Root from "./root/Root";
import Navbar from "./components/navbar/Navbar";
import { Container } from "./components/style/style";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import MainITem from "./components/main/mainItem/MainITem";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Main />
        <Navbar />
        <Root />
        <Footer />
        <MainITem />
      </Container>
    </BrowserRouter>
  );
};

export default App;
