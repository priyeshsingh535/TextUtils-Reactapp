import { useState } from 'react';
import './App.css';

import Navbar from './Components/Navbar';
//import About from './Components/About';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';


{/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

{/*import About from './Components/About';*/}



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert=(message, type)=>{
    setalert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 4000);

  }

  const toogleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
     document.body.style.backgroundColor = 'grey';
     showAlert(" DarkMode has been enabled", "success:");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'black';
      showAlert(" LightMode has been enabled", "success:");
    }
  }
  return (
   <>
   {/*<Router>*/}
   <Navbar title="TextUtils" mode={mode} toggleMode={toogleMode}/>
   <strong><Alert alert={alert}/></strong>
   <div className="container my-3">
   {/*<Switch>
          <Route exact path="/about">
            <About />
  </Route>*/}
          {/*<Route exact path="/">*/}
          <TextForm showAlert={showAlert} heading="Enter your text below" mode={mode}/>
          {/*</Route>*/}
   {/*</Switch>*/}
   </div>
   {/*</Router>*/}
   {/*<About/>*/}
   
   </>
   
  );
}

export default App;
