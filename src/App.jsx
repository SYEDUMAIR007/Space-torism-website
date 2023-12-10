import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from './Pages/Home';
import Destinationpg from './Pages/Destinationpg';
import MyProvider from './Context/Provider';
import Crewpg from './Pages/Crewpg';
import Launchpg from './Pages/Launchpg';
import './App.css';

function App() {

  return (
    <MyProvider >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="destination" element={<Destinationpg />} />
            <Route path="crew" element={<Crewpg />} />
            <Route path="technology" element={<Launchpg />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MyProvider>
  );
}

export default App;
