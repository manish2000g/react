// middle section

import Gallery from "./Gallery";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Register from "./Register";

const MiddleSection = () => {
  return (
    <Routes>
      <Route path = "/Gallery" element={<Gallery/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Register" element={<Register/>}></Route>
    </Routes>
    );
};
export default MiddleSection;
