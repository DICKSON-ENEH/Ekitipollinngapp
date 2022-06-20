
import Inputs from "./conponents/Inputs"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Views from "./conponents/Views";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Inputs/>}/>
      <Route path ="/views" element={<Views/>}/>
    </Routes>
    </BrowserRouter>
  
   
  );
}

export default App;
