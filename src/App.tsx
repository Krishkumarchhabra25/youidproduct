
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLanding from "./pages/UserLanding";
import Home from "./pages/Home";
import BusinessLanding from "./pages/BusinessLanding";
import UserUseCases from "./pages/Users/UserUseCases";
import UserBenefits from "./pages/Users/UserBenefits";
import UserAbout from "./pages/Users/UserAbout";
import UserHowitWorks from "./pages/Users/UserHowitWorks";
import BusinessUseCases from "./pages/business/BusinessUseCases";
import BusinessBenefits from "./pages/business/BusinessBenefits";



const App = () => (
  

 <BrowserRouter>
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* User Pages */}
      <Route path="/user" element={<UserLanding />} />
      <Route path="/user/usecases" element={<UserUseCases />} />
      <Route path="/user/benefits" element={<UserBenefits />} />
  <Route path="/user/about" element={<UserAbout />} />
    <Route path="/user/how-it-works" element={<UserHowitWorks />} />

      {/* Business Pages */}
      <Route path="/business" element={<BusinessLanding />} />
       <Route path="/business/usecases" element={<BusinessUseCases />} />
     { <Route path="/business/benefits" element={<BusinessBenefits />} /> } 
    </Routes>
  </BrowserRouter>
);

export default App;
