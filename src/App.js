import React from "react";
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Layout from "./layout/Layout";
import Contact from "./pages/Contact";
import Home from "./pages/Home"
import Alta from "./components/Alta";
import Nosotros from "./pages/Nosotros"


function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Layout />}>
         <Route path="/" element={<Home />} />
           <Route path="contact" element={<Contact />} />
           <Route path="form" element={<Alta />} />
           <Route path="nosotros" element={<Nosotros />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
