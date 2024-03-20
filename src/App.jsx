import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContentCard from './components/ContentCard';
import './App.css'
import Nav from './components/Nav';

export default function App() {
  return (
    <Router>
      <div className='app'>       
        <Nav />   
        <Routes>          
          <Route path='/content/:category' element={<ContentCard />} />
        </Routes>
      </div>
    </Router>
  );
}