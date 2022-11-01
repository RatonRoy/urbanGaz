import Navbar from "./components/Shared/Navbar/Navbar";
import Footer from "./components/Shared/Footer/Footer";
import SocialIcon from "./components/SocialIcon/SocialIcon";
import Home from "./components/Pages/Home/Home";
import Contact from "./components/Pages/Contact/Contact";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Team from "./components/Pages/Team/Team";
import GazDistribution from "./components/Pages/Services/Gaz.Distribution/GazDistribution";
import GazManagement from "./components/Pages/Services/Gaz.Management/GazManagement";
import ScheduleMaintenance from "./components/Pages/Services/ScheduleMaintenance/ScheduleMaintenance";
import SmartBilling from "./components/Pages/Services/SmartBilling/SmartBilling";
import UserRoom from "./components/Pages/UserRoom/UserRoom";
import { useEffect, useState } from "react";
import ScrollToTop from "./components/Shared/ScrollToTop/ScrollToTop";


function App() {
  const [loadingInProgress, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
		  setLoading(false);
		}, 2000);
	}, []);
  return (
    <>
      {
        loadingInProgress ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
        ) : (
        <>
      <Navbar></Navbar>
      <SocialIcon></SocialIcon>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/team" element={<Team></Team>}></Route>
        <Route path="/services/gazmanagement"
          element={<GazManagement></GazManagement>}>
        </Route>
        <Route path="/services/gazdistribution" element={<GazDistribution></GazDistribution>} ></Route>
        <Route path="/services/schedulemaintenance"
          element={<ScheduleMaintenance></ScheduleMaintenance>}>
        </Route>
        <Route
          path="/services/smartbilling"
          element={<SmartBilling></SmartBilling>}
        >
        </Route>
        <Route path="/user-room" element={<UserRoom></UserRoom>}>
        </Route>
        <Route path="/contact" element={<Contact></Contact>}>
        </Route>
        </Routes>
          {/* <ScrollToTop></ScrollToTop> */}
        <Footer></Footer>
        </>
      )
      }
    </>
  );
}
export default App;
