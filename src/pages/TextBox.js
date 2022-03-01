import {useState,useEffect} from 'react';
function TextBox(props){
  const [disable,setBtnDisable]=useState(true);
  const [text, setText]= useState("");
  let noPreview="No-preview-Available";
  
  function changeText(e){
    setText(e.target.value);
    
  }
  useEffect(()=>{
    if(text.trim().length===0)
    {
      setBtnDisable(true);
    }
    else{
      setBtnDisable(false);
    }
  },[text]);
  

 function modder(value){
   switch(value){
   case 'upper':
    var myText= text.toUpperCase();
    setText(myText);
    props.alertFunc("Converted to UpperCase","success");
    break;
   case 'lower':
     setText(text.toLowerCase());
     props.alertFunc("Converted to LowerCase","success");
     break;
   case 'copy':
     navigator.clipboard.writeText(text);
     props.alertFunc("Copied to clipboard","success");
     break;
   case 'clear':
     setText("");
     props.alertFunc("Text cleared","success");
     break;
  case 'rmspaces':
    var arr1=[];
    var arr=text.split(" ");
    arr.forEach((i)=>{
      if(i!==""){
        arr1.push(i);
    }});
      var str= arr1.join(" ");
      setText(str);
      props.alertFunc("Removed","success");
      break;
   default :
     setText('invalid');
   }
 }
 
 function textRectifier(value){
   var textArr= value.trim().split(" ").filter((element)=>{return element.length!==0;});
   return textArr;//textArr is an array
 }
 
 function timeToRead(value){
   var mins =0.008*textRectifier(value).length;
   console.log(mins)
   var hour=mins/60;
   var min=((hour%1)*60);
   var sec=((min%1)*60);
   if(Math.floor(hour)===0)
   {
     return `${Math.floor(min)}min ${Math.floor(sec)}sec`;
   }
   else{
     return `${Math.floor(hour)}hour ${Math.floor(min)}min ${Math.floor(sec)}sec`;
   }
 }
 
  const textbox=
    (
      <>
         <div className="container my-3">
           <div className="form-floating">
           <h2>Enter Text to Mod</h2>
            <textarea id="textfieldarea" className="form-control"
            value={text}
           onChange={changeText} rows="6">
           </textarea>
           </div>
           <button className="btn my-2 mx-1 btn-primary" onClick={()=>{modder('upper')}} disabled={disable}>UpperText</button>
       <button className="btn btn-success mx-1" onClick={()=>{modder('lower')}}disabled={disable}>LowerCase</button>
      <button className="btn btn-warning mx-1"
      onClick={()=>{modder('copy')}} disabled={disable}>CopyText</button>
    <button className="btn btn-info mx-1"
      onClick={()=>{modder('rmspaces')}}disabled={disable}>RemoveExtraSpaces</button>
    <button className="btn btn-danger mx-1"
      onClick={()=>{modder('clear')}}disabled={disable}>ClearText</button>
   
      <div className="container mt-2">
      <h4>Text summary</h4>
      <span>{textRectifier(text).length} words {textRectifier(text).join("").length} characters&emsp;Time to read: {timeToRead(text)}
      </span>
      </div>
           <div className="container">
           <span><b>Preview:</b></span>
           <p className="text-break">{(text.length!==0)?(text):(noPreview)}</p>
        </div>
       </div>
      </>
);
return textbox;
}
export default TextBox;
