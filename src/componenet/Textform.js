import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function Textform(props) {
  const handleupClick=()=>{
   // console.log("upper case was clicked" +text);
    let newText =text.toUpperCase();
    setText(newText)
  }
  const handleloClick=()=>{
    //console.log("upper case was clicked" +text);
    let newText =text.toLowerCase();
    setText(newText)
  }
  const handleclearClick=()=>{
    
    let newText ='';
    setText(newText)
  }
  const handleonchange=(event)=>{
   // console.log("on change");
    setText(event.target.value)
  }
   const handleCopy=(event)=>{
    // console.log("Copy text");
     let text=document.getElementById("myBox");
     text.select();
     navigator.clipboard.writeText(text.value);
   }
   const handleextraSpaces=(event)=>{
    let newText =text.split(/[ ]+/);
    setText(newText.join(" "))
   }
  
  const [text, setText] = useState('');
 
  return (
    <>
    <div className="container"style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1> 
    <div class="mb-3">
    <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}}id="mybox" rows="8"></textarea>
    </div>
    <button className="btn.btn.primary mx-2" onClick={handleupClick}>Convert to upercase</button>
    <button className="btn.btn.primary mx-2" onClick={handleloClick}>Convert to lawercase</button>
    <button className="btn.btn.primary mx-2" onClick={handleclearClick}>Clear text</button>
    <button className="btn.btn.primary mx-2" onClick={handleCopy}>Copy text</button>
    <button className="btn.btn.primary mx-2" onClick={handleextraSpaces}>Remove Extra Space</button>
   </div>
   <div className="container my-3 " style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h2>your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} character</p>
    <p>{0.008*text.split(" ").length} minutes read</p>
    <h2>Prewiew</h2>
    <p>{text.length>0?text:"Enter something to textbox to preview here"}</p>
   </div>
    </>
    
  )
}
