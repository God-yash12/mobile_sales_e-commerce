import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RouteApp from './Routings/RouteApp';
import AdminRouter from './Routings/AdminRouter';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Frontend Routes */}
        <Route path="/*" element={<RouteApp />} />
        
        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminRouter />} />
      </Routes>
    </Router>
  );
};

export default App;
