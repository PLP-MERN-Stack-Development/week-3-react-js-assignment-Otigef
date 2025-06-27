import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Button from './components/Button'; // Adjust the path as necessary
import Users from './Users';

const App = () => {
  return (
    <>
      <Button label="Click Me" variant="primary" />
      <h1>User List</h1>
      <Users />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App

// You can place this Button component in a new file like src/components/Button.jsx or directly use it in your pages/components.