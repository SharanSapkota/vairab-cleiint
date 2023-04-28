import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css'
import UserRegistation from "./components/UserRegistration";
import Login from "./components/Login";

import Home from "./components/Home";

function App() {
  return (
   <div>
        <BrowserRouter>
            <Routes>
              <Route path="/home" element= { <Home/>} />
              <Route path="/register" element= { <UserRegistation/>} />
              <Route path="/" element= { <Login/>} />
            </Routes>
        </BrowserRouter>
   </div>
  );
}

export default App;