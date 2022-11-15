import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpclick=()=>{
        //console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
    props.showAlert(" Converted to uppercase", "success:");
    }
    const handleCopyText=()=>{
      var text=document.getElementById("mybox");
      text.select();
     navigator.clipboard.writeText(text.value);
     props.showAlert(" Copied to clipboard", "success:");
   }

   const handleExtraSpace = () => {
   let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert(" Removed extra space", "success:");

 }
   
  const handleClearText=()=>{
    let newText='';
    setText(newText)
    props.showAlert(" Text has been removed", "success:");
  }
    const downloadTextfile=()=>{
      const element = document.createElement("a");
      const file = new Blob([text], {
        type: "text/plain"
      });
      element.href = URL.createObjectURL(file);
      element.download = "myFile.txt";
      element.click();
      props.showAlert(" Textfile downloaded", "success:");
  }
   
    const handleLoclick=()=>{
      //console.log("Uppercase was clicked" + text);
      let newText=text.toLowerCase();
      setText(newText)
      props.showAlert(" Converetd to lowercase", "success:");
    }
    const onChangehandler=(event)=>{
        console.log("On changed");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    //settext("enter here");
  return (
    <>
    <div className="container" style={{Color: props.mode==='dark'?'white':'#212529' }} >
        <h2>{props.heading}</h2>
      <div className="mb-3">
      <textarea className="form-control" id="mybox" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#212529'}}  onChange={onChangehandler} rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpclick}>convert to uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoclick}>convert to Lowercase</button>
      
      <button className="btn btn-primary mx-1" onClick={downloadTextfile}>text file download</button>
      <button className="btn btn-primary mx-1" onClick={handleClearText}>clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopyText}>copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>

     
    </div>
    <div className="container" style={{Color: props.mode ==='dark'?'white':'#212529' }}>
      <h1>your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 *text.split(" ").length} Minutes to read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox to preview it here."}</p>
    </div>
    </>
  )

}