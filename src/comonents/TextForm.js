import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to Uppercase' ,'success')
    }
    const handleLoClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert('Converted to Lowercase' ,'success')
    }
    const handleClearClick = ()=>{
      let newText = "";
      setText(newText)
      props.showAlert('Text Cleared' ,'success')
    }
    const handleCopy = ()=>{
      var text = document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert('Text Copied' ,'success')
    }
    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert('Extra Spaces Removed' ,'success')
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter the Text here')
  return (
      <div>
          <div className="container my-3 " style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" id="myBox" rows="8" value={text} style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange}></textarea>
          </div>
          <button disabled={text.length===0} type="button" className="btn btn-danger mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
          <button disabled={text.length===0} type="button" className="btn btn-danger mx-2 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
          <button disabled={text.length===0} type="button" className="btn btn-danger mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
          <button disabled={text.length===0} type="button" className="btn btn-danger mx-2 my-2" onClick={handleCopy}>Copy</button>
          <button disabled={text.length===0} type="button" className="btn btn-danger mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          
          </div>
          <div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{
                return element.length!==0;
            }).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{
                return element.length!==0;
            }).length}Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Nothing to preview'}</p>
          </div>
          
    </div>
  )
}
