
import React,{useState} from 'react'

export default function Textbox(props) {
  const [text,newtext]=useState("ENTER THE TEXT HERE");

  function lower()
  {
    newtext(text.toLowerCase());
    props.showalert("converted to lower case")
  }

  function upper()
  {
    newtext(text.toUpperCase());
    props.showalert("converted to upper case")
  }

  function no_space(num)
  {
    return num.length()!==0;
  }

   function handle_onchange(event)
   {
     
     newtext(event.target.value);
   }

   function words()
   {
     let words=text.split(" ").filter(no_space).length;
     return words;
   }

  
  
  return (
    <> 
    <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h1>
    <div className="mb-3">
 

  <textarea className="form-control" value={text} onChange={handle_onchange} id="txt" rows="5"></textarea>
  <button className="btn btn-primary my-3" onClick={lower}>CONVERT TO LOWER CASE </button>
  <button className="btn btn-primary my-3 mx-3" onClick={upper}>CONVERT TO UPPER CASE </button>
  <button className="btn btn-primary my-3 mx-3">CHANGE FONT </button>


   </div>

   <div className='container my-4'> 
    <h3 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>YOUR TEXT SUMMARY </h3>
    <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{words()} words  and {text.length} letters</p>
   </div>



</>
   
  )
}
