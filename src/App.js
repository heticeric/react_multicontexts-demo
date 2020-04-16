import React from 'react';
import './App.css';

// Contexts
import { AuthProvider } from "./context/Auth";

// Routes
import Routes from "./routes";

function App() 
{
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
