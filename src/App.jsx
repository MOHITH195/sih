import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {Navbar, Footer} from "./Components" ;
import {Homepage , SearchMap} from "./Pages" ;
import State from './context/State';
import Education from './Pages/education';
import PricePrediction from './Pages/PricePrediction';
// import Procedure from './Components/Prodedure';

const App = () => {
  return (
    <div>
      <State>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/search/:address" element={<SearchMap />} />
            <Route exact path="/education" element={<Education />} />
            <Route exact path="/priceprediction" element={<PricePrediction />} />
          </Routes>
          <Footer />
        </Router>
      </State>
    </div>
  )
}

export default App