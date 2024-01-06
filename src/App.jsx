import { BrowserRouter } from "react-router-dom";
import Root from "./root/Root";
import { Container } from "./components/style/style";
import { Footer, Main, MainITem, Navbar } from "./components";

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
