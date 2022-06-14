import logo from "./logo.svg";
import "./App.css";
import "./mystyle.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MiddleSection from "./components/MiddleSection";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div>
      <Header></Header>,
      <MiddleSection></MiddleSection>,
      <Footer></Footer>


    </div>
    </BrowserRouter>
  );
}

export default App;
