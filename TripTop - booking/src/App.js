import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Login from "./pages/login/Login";
import Flights from "./pages/flights/Flights";
import CarRentals from "./pages/carrentals/CarRentals";
import Taxis from "./pages/taxis/Taxis";
import Attractions from "./pages/Attractions/Attractions";


function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/flights" element={<Flights/>} />
        <Route path="/attractions" element={<Attractions/>} />
        <Route path="/carrentals" element={<CarRentals/>} />
        <Route path="/taxis" element={<Taxis/>} />
         </Routes>
    </BrowserRouter>
  );
}

export default App;