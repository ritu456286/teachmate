import './App.css'
import { ThemeProvider } from "@/components/theme-provider"
import { Routes, Route } from "react-router";
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';


function App() {

  return (
    <> 
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    {
      <Routes>
        <Route path="/" element={<LoginPage/>} />
      </Routes>
    
    }
  </ThemeProvider>
      
    </>
  )
}

export default App
