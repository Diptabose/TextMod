import './App.css';
import  Home from './pages/Home.js';
import TextBox from './pages/TextBox.js';
import About from './pages/About.js';
import Alert from './pages/Alert.js';
import Changelogs from './pages/Changelogs.js';
import NoPage from './pages/NoPage.js';
import {useState,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const darkModeInStorage= window.localStorage.getItem('isDark');
  const m=darkModeInStorage==="true"?true:false;
  const [isDark,setIsDark]= useState(m);
  const [alerT, setAlert]= useState(null);
  
  useEffect(()=>{
    const id=setTimeout(()=>{
      setAlert(null);
    },2500);
    return ()=>{
      clearTimeout(id);
    }
  },[alerT]);
  function showAlert(msg,type){
    setAlert({
      message:msg,
      type:type
    });
  }
  useEffect(()=>{
    if(isDark)
    {
      document.documentElement.setAttribute('theme','dark');
      window.localStorage.setItem('isDark','true');
    }
   else{
      window.localStorage.setItem('isDark','false');
    }
  },[isDark]);
  function darkModeToggler(){
    if(isDark===true)
    {
    document.documentElement.removeAttribute('theme');
    setIsDark(false);
    }
    else{
document.documentElement.setAttribute("theme",'dark');
    setIsDark(true);
    }
  }
  
  return (
    <>
    <div className="heightSet" theme={"dark"}>
     <Router>
        <Home title="TextMod" darkModeState={darkModeToggler} isDark={isDark} />
        <Alert alert={alerT} />
        <Routes>
        <Route exact index element={<>
          <TextBox alertFunc={showAlert} /></>
        } />
        <Route exact path="/changelogs" element={<Changelogs />} />
          <Route exact path="/about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
     </Router>
     </div>
     </>
      );
}

export default App;
