// import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// let myName="Sayan Chattopadhyay";
function App() {
  return (
    <>
     {/* <Navbar/> */}
      {/* <Navbar title="TextEdit" aboutText="About Us" /> */}
      <h1 className="container head">TextUtils React App</h1>
      <div className="container my-3">
      <TextForm heading="Enter a text to analyze below:"/>
      </div>
      
    </>
  );
}

export default App;
