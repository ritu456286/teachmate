import './App.css'
import { ThemeProvider } from "@/components/theme-provider"
import { Routes, Route } from "react-router";
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {

  return (
    <> 
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    {
      <Routes>
        <Route path="/" element={<SignupPage/>} />
      </Routes>
    
    }
  </ThemeProvider>
      
    </>
  )
}

export default App
