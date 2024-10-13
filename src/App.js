import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, createContext, useEffect } from 'react'; // Added useState and useEffect
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Header from './Components/Header';
import axios from 'axios';

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]); // useState added to manage countryList state

  // Fetch country list on component mount
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all') // Example API endpoint
      .then(response => {
        setCountryList(response.data); // Set country list state with API data
      })
      .catch(error => {
        console.error("Error fetching country list:", error);
      });
  }, []); // Empty dependency array to run this effect only once on mount

  const values = {
    countryList, // Provide countryList in context values
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
