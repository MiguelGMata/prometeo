import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './components/routes/AppRoutes';
import Navbar from './components/organisms/navbar/navbar';
import './components/styles/global.css';



const App = () => {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </div>
  )
}

export default App
