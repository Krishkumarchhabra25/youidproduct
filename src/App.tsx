
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLanding from "./pages/UserLanding";
import Home from "./pages/Home";
import BusinessLanding from "./pages/BusinessLanding";
import UserUseCases from "./pages/Users/UserUseCases";
import UserBenefits from "./pages/Users/UserBenefits";



const App = () => (
  

 <BrowserRouter>
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* User Pages */}
      <Route path="/user" element={<UserLanding />} />
      <Route path="/user/usecases" element={<UserUseCases />} />
      <Route path="/user/benefits" element={<UserBenefits />} />

      {/* Business Pages */}
      <Route path="/business" element={<BusinessLanding />} />
      {/* <Route path="/business/usecases" element={<BusinessUseCases />} />
      <Route path="/business/benefits" element={<BusinessBenefits />} /> */}
    </Routes>
  </BrowserRouter>
);

export default App;
