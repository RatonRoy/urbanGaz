import Navbar from "./components/Shared/Navbar/Navbar";
import Footer from "./components/Shared/Footer/Footer";
import SocialIcon from "./components/SocialIcon/SocialIcon";
import Home from "./components/Pages/Home/Home";
import Contact from "./components/Pages/Contact/Contact";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Team from "./components/Pages/Team/Team";
import GazDistribution from "./components/Pages/Services/Gaz.Distribution/GazDistribution";
import MainNavbar from "./components/Shared/MainNavbar/MainNavbar";
import GazManagement from "./components/Pages/Services/Gaz.Management/GazManagement";
import ScheduleMaintenance from "./components/Pages/Services/ScheduleMaintenance/ScheduleMaintenance";
import SmartBilling from "./components/Pages/Services/SmartBilling/SmartBilling";
function App() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <MainNavbar></MainNavbar>
      <SocialIcon></SocialIcon>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/contact" element={<Contact></Contact>}>
        </Route>
        <Route path="/team" element={<Team></Team>}></Route>

        <Route path="/services/gazmanagement"
         
          element={<GazManagement></GazManagement>}>
          
          </Route>
        <Route path="/gazdistribution" element={<GazDistribution></GazDistribution>} ></Route>
        <Route path="/services/schedulemaintenance"
        element = {<ScheduleMaintenance></ScheduleMaintenance>}>
          
        </Route>
        <Route
          path="/services/smartbilling" 
          element = {<SmartBilling></SmartBilling>}
        >

        </Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}
export default App;
