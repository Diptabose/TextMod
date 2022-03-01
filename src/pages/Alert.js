function Alert(props)
{
  function Capital(text){
    var word= text.toLowerCase();
    return word.charAt(0).toUpperCase()+word.slice(1);
  }
  if(props.alert===null)
  {
    const about=(<div className="heightTextArea"></div>);
    return about;
  }
  else{
  const about = (
 <div className="heightTextArea">
 <div className="container">
 <div className={`alert alert-${props.alert.type}`} role="alert">
   <b>{Capital(props.alert.type)}:</b>{" "+props.alert.message}
 </div>
 </div>
  </div>
);
return about;
}
}
export default Alert;
