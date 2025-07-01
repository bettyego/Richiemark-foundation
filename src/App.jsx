import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/page/About";
import Focus from "./component/page/Focus";
import Donate from "./component/page/Donate";
import Contact from "./component/page/Contact";
import Volunteer from "./component/page/Volunteer";
import HealthInitiatives from "./component/page/programs/HealthInitiatives";
import EducationSupport from "./component/page/programs/EducationSupport";
import HumanRights from "./component/page/programs/HumanRights";
import BloodDonation from "./component/page/programs/BloodDonation";
import CommunityServices from "./component/page/programs/CommunityServices";
import EmergencyRelief from "./component/page/programs/EmergencyRelief";
import ErrorBoundary from "./component/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <div className="w-full min-h-screen">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/focus" element={<Focus />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/programs/health-initiatives" element={<HealthInitiatives />} />
            <Route path="/programs/education-support" element={<EducationSupport />} />
            <Route path="/programs/human-rights" element={<HumanRights />} />
            <Route path="/programs/blood-donation" element={<BloodDonation />} />
            <Route path="/programs/community-services" element={<CommunityServices />} />
            <Route path="/programs/emergency-relief" element={<EmergencyRelief />} />
          </Routes>
        </Router>
      </div>
    </ErrorBoundary>
  );
}

export default App;
