import { styled } from "styled-components";
import Header from "./components/Header/Header";
// import HorizontalRule from "./components/HorizontalRule/HorizontalRule";
// import Intro from "./ui/Intro/Intro";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Register from "./pages/Register/Register2";
import Home from "./pages/Home/Home";

const AppContainer = styled.div`
  /* background: #150e28;
  width: 100%;
  height: 100%; */
`;

export const MaxContainer = styled.div`
  max-width: 1200px;
  width: 80%;
  margin: 0 auto;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
