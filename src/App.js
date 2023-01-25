import { useState } from 'react';
import './App.css';
import Navbar from './comps/Navbar';
import TextForm from './comps/TextForm';


function App() {
  const [mode, setMode]= useState('light');
  const [theme, setTheme]=useState('')
  const blueTheme =()=>{
    if(mode==='dark')
    {
      setTheme('#80cfdf');
    document.body.style.backgroundColor=theme;
  }
  }
  const greyTheme =()=>{
    if(mode==='dark')
    {
      setTheme('#3c3f42');
    document.body.style.backgroundColor=theme;
  }
}
const greenTheme =()=>{
  if(mode==='dark')
  {
    setTheme('#92f1a8');
  document.body.style.backgroundColor=theme;
}
}
  const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#042743';
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
  }
};

  return (
    <>      
    <Navbar title="Textutils" mode={mode} blueTheme={blueTheme} greyTheme={greyTheme} greenTheme={greenTheme} toggleMode={toggleMode}/>
    <div className="container">  
    <TextForm heading="Enter Your Text Here"  mode={mode} toggleMode={toggleMode}/>     
    </div>
     </>
  );
}

export default App;
