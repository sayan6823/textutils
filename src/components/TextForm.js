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
    }

    // Text To Speech Functionality
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
    
  return (
    <>
        <div className="container">
            <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control inputText" value={text} id="myBox" rows="8" onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleReset}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>To 'UPPERCASE'</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>To 'lowercase'</button>
        <button className="btn btn-primary mx-2 speak" id="toggleSpeak" onClick={handleTextToSpeech}>Speak</button>
        </div>

        <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p>{text===""?0:(text.trim().split(' ').length)} words and {text.replace(/ /g ,"").length} characters</p>
            <p>{0.48 * (text===""?0:(text.trim().split(' ').length))} seconds in average to read the whole text</p>
            <h2>Preview of entered text: </h2>
            <p>{text}</p>
        </div>
      

    </>
  )
}
