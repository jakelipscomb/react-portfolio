import React from 'react';
import Nav from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { ThemeContextProvider } from './theme/ThemeContextProvider';
import Paper from '@mui/material/Paper';

function App() {
  return (
    <ThemeContextProvider>
      <Paper elevation={0} sx={{ height: '100vh' }}>
      <Nav />
      <Outlet />
      <Footer />
      </Paper>
    </ThemeContextProvider>
  );
}

export default App;
