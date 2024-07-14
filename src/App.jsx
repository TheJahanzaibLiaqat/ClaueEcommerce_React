
import Home from "./Pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Item from "./Pages/item";
import Navbar from "../src/components/Navbar"
import Detail from "./Pages/Detail";




function App() {
 

  return (
    <>
     <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="item" element={<Item />}> </Route>
        <Route path="detail" element={<Detail />}> </Route>

      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
