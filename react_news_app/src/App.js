import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const PAGE_SIZE = 5;
  const API_KEY = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  const categories = [
    'general', 'business', 'entertainment', 
    'health', 'science', 'sports', 'technology'
  ];

  return (
    <Router>
      <div>
        <NavBar /> 
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress} 
        />
        <Routes>
          {categories.map(category => (
            <Route 
              key={category} 
              path={category === 'general' ? '/' : `/${category}`} 
              element={
                <News 
                  setProgress={setProgress} 
                  apiKey={API_KEY} 
                  pageSize={PAGE_SIZE} 
                  country="us" 
                  category={category} 
                />
              } 
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
};

export default App;





