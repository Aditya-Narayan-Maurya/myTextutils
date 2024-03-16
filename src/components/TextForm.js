import React, {useState} from 'react'

export default function TextForm(props) {
    const [Text,setText]=useState("");
    let handleUpperClick=()=>{
        let newText=Text.toUpperCase();
        setText(newText) ;
        props.showAlert("Sentence has been converted in upperCase","success");   
    }
    let handleLowerClick=()=>{
        let newText=Text.toLowerCase();
        setText(newText) ; 
        props.showAlert("Sentence has been converted in lowerCase","success");     
    }

    let handleCapitalizedClick=()=>{
        const arr = Text.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const str2 = arr.join(" ");
        setText(str2);
        props.showAlert("Sentence has been capitalized","success");   
    }

    let handleClearClick=()=>{
        let newText='';
        setText(newText);    
        props.showAlert("cleared","success");   
    }
    let handleExtraClick=()=>{
        const newText = Text.replace(/\s+/g, ' ').trim()
        setText(newText); 
        props.showAlert("Extra space has been removed","success");   
    }

    let handleOnChange=(event)=>{
        setText(event.target.value);
    }
  return (
    <>
    <div>  
        <div className="container" style={{color:props.mode==='dark'?'white':'#0845a0'}}>
            <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={Text} style={{backgroundColor:props.mode==='dark'?'#0845a0':'white',color:props.mode==='dark'?'white':'#0845a0'}} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary my-2" onClick={handleUpperClick}>Change in uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Change in lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCapitalizedClick}>Change in capitalized</button> 
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraClick}>Remove extra space</button>   
            </div> 
        
        <div className="container" style={{color:props.mode==='dark'?'white':'#0845a0'}}>
            <h1>Your Text Summary</h1>
            <p><b>{Text.charAt(0)===''?'0':Text.split(" ").length} words and {Text.length} characters</b></p>
            <p><b>{0.008 * Text.split(" ").length} minutes read</b></p>
            <h1>Preview</h1>
            <p>{Text.length>0?Text:"Enter something in the above textbox to preview here"}</p>
        </div>
        
    </div>
    </>
  )
}
