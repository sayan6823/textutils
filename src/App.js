// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React,{useState} from 'react'


// let myName="Sayan Chattopadhyay";
function App() {
  const [mode, setMode] = useState('light') 
  const [modeText, setModeText] = useState('Light')
  const [alert, setAlert] = useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      setModeText('Dark');
      document.body.style.backgroundColor='#042743';
    }
    else{
      setMode('light');
      setModeText('Light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
     {/* <Navbar/> */}
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} modeText={modeText}/>
      <Alert alert={alert}/>
      {/* <h1 className="container head">TextUtils React App</h1> */}
      <div className="container my-3" >
      <TextForm heading="Enter a text to analyze below:" mode={mode} showAlert={showAlert}/>
      </div>
      
    </>
  );
}

export default App;
