import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RenderJobCondition from "./components/Pages/jobConditions";
import ExpOpt from "./components/Pages/expOptions";
import UserDetails from "./components/Pages/userDetails";
import UserSubmit from "./components/Pages/userSubmit";

function App() {
  const [formData, setFormData] = useState({
    options: {
      from_name: '',
      to_name: '',
      jobOptions: [],
      expOptions: [],
      userDetails: [],
    },
  });

  return (
    <Router>
      <div className="flex flex-col items-center bg-[#BBCDCF]">
      <img
          className="w-[320px] self-center my-5"
          src="https://perspective.imgix.net/6481732713325600147ceb9b.png?h=64&dpr=2&q=75&auto=format,compress"
          alt=""
        />
        <Routes>
          <Route
            path="/ExpOpt"
            element={<ExpOpt formData={formData} setFormData={setFormData} />}
          />
          <Route
            path="/"
            element={
              <RenderJobCondition
                formData={formData}
                setFormData={setFormData}
              />
            }
          />
          <Route
            path="/UserDetails"
            element={
              <UserDetails formData={formData} setFormData={setFormData} />
            }
          />
          <Route
            path="/UserSubmit"
            element={
              <UserSubmit formData={formData} setFormData={setFormData} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
