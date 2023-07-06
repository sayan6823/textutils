import React,{useState} from 'react'
import './TextForm.css';

export default function TextForm(props) {
    const handleUpClick = ()=> {
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleReset = ()=> {
        setText('');
    }
    
    const handleLowClick = ()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event)=> {
        // console.log("Onchange was clicked");
        setText(event.target.value);

        // event.value has not been used here as event.target.value is a efficient method and also event.value sometimes return undefined value which can cause problems for us so we use event.target.value


        // vowels and consonents
        const text = event.target.value.toLowerCase();
        const vowelRegex = /[aeiou]/g;
        const consonantRegex = /[bcdfghjklmnpqrstvwxyz]/g;
        const vowels = (text.match(vowelRegex) || []).length;
        const consonants = (text.match(consonantRegex) || []).length;

        setCount({ vowels, consonants });
    }

    // Text To Speech Functionality copied from website
    // function getVoices() {
    //     let voices = speechSynthesis.getVoices();
    //     if(!voices.length){
    //       let utterance = new SpeechSynthesisUtterance("");
    //       speechSynthesis.speak(utterance);
    //       voices = speechSynthesis.getVoices();
    //     }
    //     return voices;
    //   }

    // const handleTextToSpeech =()=>{

    //     let speakData = new SpeechSynthesisUtterance();
    //     speakData.volume = 1; // From 0 to 1
    //     speakData.rate = 1; // From 0.1 to 10
    //     speakData.pitch = 2; // From 0 to 2
    //     speakData.text = text;
    //     speakData.lang = 'en';
    //     speakData.voice = getVoices()[0];

    //     speechSynthesis.speak(speakData);
    // }    


    const handleTextToSpeech = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.rate = 1;
        msg.text = text;
        let speakText=document.getElementById('toggleSpeak');
        if(speakText.textContent==='Speak'){
            window.speechSynthesis.speak(msg);
            speakText.innerHTML='Stop';
        }
        else{
            window.speechSynthesis.cancel();
            speakText.innerHTML='Speak';
        }
      }


    //
    const [text,setText]= useState('');
    const [count, setCount] = useState({ vowels: 0, consonants: 0 });
    const [myStyle,setMyStyle]=useState({
        color:"black",
        background: "transparent",
        backgroundColor:"white",
        padding:"30px",
        borderRadius:"20px"
    })
    const [mode,setMode]=useState('Light Mode');
    const handleMode= ()=>{
        if(mode==='Light Mode'){
            setMyStyle({
                color:"white",
                background: "transparent",
                backgroundColor:"black",
                padding:"30px",
                borderRadius:"20px"
            })
            setMode('#042743 Mode')
        }
        else{
            setMyStyle({
                color:"black",
                background: "transparent",
                backgroundColor:"white",
                padding:"30px",
                borderRadius:"20px"
            })
            setMode('Light Mode')
        }
    }


    const handleCopy =()=>{
        let copyText= document.getElementById('myBox');
        // copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Text copied to clipboard","success");
    }
  return (
    <>
        <div className="container" style={{backgroundColor:props.mode==='light'?'white':'#042743',color:props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control inputText" value={text} id="myBox" rows="8" onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#042743',color:props.mode==='light'?'black':'white'}}></textarea>
            
        </div>
        <button className="btn btn-primary mx-2" onClick={handleReset}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>To 'UPPERCASE'</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>To 'lowercase'</button>
        <button className="btn btn-primary mx-2 speak" id="toggleSpeak" onClick={handleTextToSpeech}>Speak</button>
        <button className="btn btn-primary mx-2 speak" id="toggleSpeak" onClick={handleCopy}>Copy to Clipboard</button>
        {/* <div className="form-check form-switch my-3 mx-2">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={handleMode}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{mode}</label>
        </div> */}
        </div>

        <div className="container my-3" style={{backgroundColor:props.mode==='light'?'white':'#042743',color:props.mode==='light'?'black':'white'}}>
            <h1>Your Text Summary</h1>
            <p>{text===""?0:(text.trim().split(' ').length)} words and {text.replace(/ /g ,"").length} characters</p>
            <p>{0.48 * (text===""?0:(text.trim().split(' ').length))} seconds in average to read the whole text</p>
            <h2>Preview of entered text: </h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            <h2>Vowels and Consonents</h2>
            <p>{count.vowels} vowels and {count.consonants} are consonents</p>
        </div>      

    </>
  )
}



// What is state and hook?

// 1. State=condition of any component for eg. textarea component might be empty sometime , sometimes it has letters .State generally refers to application data or properties that need to be tracked.
// 2. Hooks= A method which helps us to use features of classes in function based component this is because developer like us prefer to use function over classes.

// Shorthand:Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.


// 3. Hooks has this part ---->   
// const [count,setCount]=useState("Hello Universe"); 

// Here in above hook the value of count is Hello Universe . count is array variable so that we just can't update or change its value like normal variable. 
// But we can update or change its value using setCount() method. i.e. setCount("Hey You"); this implies the value of count is updated to Hey You.