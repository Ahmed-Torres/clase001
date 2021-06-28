import './App.css';
import Header from "./components/Header/";
import Nav from "./components/Nav/";
import Main from "./components/Main/";
import Footer from "./components/Footer/";

function App() {
  return (
    <>
       <Nav />
      <Header title= "hola Header 🤠" />
      <Main />{/*aca van 2 components, section, este con 3 article, y aside */}
      <Footer />
    </>
  );
}

export default App;