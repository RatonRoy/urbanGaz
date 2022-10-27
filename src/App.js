import Navbar from "./components/Shared/Navbar/Navbar";
import Footer from "./components/Shared/Footer/Footer";
import SocialIcon from "./components/SocialIcon/SocialIcon";
import Home from "./components/Pages/Home/Home";
import Contact from "./components/Pages/Contact/Contact";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Team from "./components/Pages/Team/Team";
import GazDistribution from "./components/Pages/Services/Gaz.Distribution/GazDistribution";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <SocialIcon></SocialIcon>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/contact" element={<Contact></Contact>}>
        </Route>
        <Route path = "/team" element={<Team></Team>}></Route>
        <Route path = "/gazdistribution" element = {<GazDistribution></GazDistribution>} ></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}
export default App;
