import React,{useState} from 'react'

export default function TextForm( props ) {
  
  const [text, setText]=useState('');
  const handleUpClick = () => {
    setText(text.toUpperCase())
  } ;
  const handleLowClick = () => {
    setText(text.toLowerCase())
  }  ;
 
  const handleCopy= ()=>{
    var text=document.getElementById('exampleFormControlTextarea1'); 
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleSpace=()=>{
    let newText=text.split(/[ ]+/) //regex 
    setText(newText.join(" "))
  };

  const handleCapitalize = () => {
    let newText=text.split(". ")
    let ftext =newText[0].charAt(0).toUpperCase() + newText[0].slice(1)
    for(let i=1; i<newText.length; i++ ){
      ftext+=". "+ (newText[i].charAt(0).toUpperCase() + newText[i].slice(1));
    }
    setText(ftext);
  };
  
  const handleClearClick = () => {
    setText("")
  };
  const handleOnChange = (event) => {
    setText(event.target.value)
  }  ;
 
  return (
    <> 
  <div className={`container my-5 text-${props.mode==='light'?'dark':'light'}`} >
    <div className='container' >
        <h1>{ props.heading }</h1>
    <div className="mb-3">
        <textarea className={`form-control my-5 border border-info border-start-1 bg p-3 bg-${props.mode==='light'?'white':'secondary'} text-black}`} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" placeholder='Enter or Paste it here'></textarea>
    </div>
    <button disabled={text.length===0} type="button" className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to UpperCase</button>
    <button disabled={text.length===0} type="button" className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to LowerCase</button>
    <button disabled={text.length===0} type="button" className="btn btn-primary mx-3" onClick={handleSpace}>Remove Extra Space</button>
    <button disabled={text.length===0} type="button" className="btn btn-primary mx-3" onClick={handleCapitalize}>Capitalize First Letter</button>
    <button disabled={text.length===0} type="button" className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0} type="button" className="btn btn-primary mx-3" onClick={handleClearClick}>Clear</button>
</div>
    <div className="container my-5">
      <h1>Your Text Summary</h1>
      <p>
      {text.split(" ").filter((ele)=>{return ele.length!==0}).length} words and {text.length} characters
      </p>
      <h2>Preview</h2>
      <p>
        {text.length>0?text:'Enter your text to preview it here...'}
      </p>
    </div>
    </div>
    </>
  )
}
