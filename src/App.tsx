import { Container, createTheme, CssBaseline, Switch, ThemeProvider } from '@mui/material';
import './App.css';
import GetCompany from './features/company/company';
//import GetMap from './features/Map/indexNew';
import GetCompanyLocation from './features/Map/KPMGMap';
import Header from './Header';
import { useState } from "react";
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import HomePage from './features/home/HomePage';


function App() {
  const [darkMode,setDarkMode]=useState(false);
  const paletteType=darkMode? 'dark':'light';
  const theme= createTheme({
  palette:{
    mode:paletteType,
    background:{
      default:paletteType==='light'?'#FFFAFA':'#121212' 
    }

  }
})
function handleThemChange()
{
  setDarkMode(!darkMode);
}
  return (
    
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    
      <Header darkMode={darkMode} handleThemChange={handleThemChange}/>
   
    
      <Routes>
      <Route path="/" element ={<GetCompany/>}/>
      <Route path="/Map" element={<GetCompanyLocation/>}/>
      <Route path="/company" element={<GetCompany/>}/>
      </Routes>
   
      
      </ThemeProvider>

  );
}

export default App;
