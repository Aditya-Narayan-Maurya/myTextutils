import React,{useState} from 'react'

export default function About() {
  const [mymode,setmymode]=useState({
    color:'white',
    backgroundColor:'black'
});
const [but,setBut]=useState("Enable Dark mymode");

    const toggleStyle=()=>{
      if(mymode.color==='white'){
        setmymode({
          color:'black',
    backgroundColor:'white'
        })
        setBut("Desable Dark mymode")
      }
      else{
   setmymode({
  color:'white',
    backgroundColor:'black'
   })
   setBut("Enable Dark mymode")
      }
    }
  return (
    <>
    
    <div className="container" style={mymode}>
    <div>
      <div className="accordion" id="accordionExample" style={mymode} >
  <div className="accordion-item " style={mymode}>
    <h2 className="accordion-header" style={mymode}>
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mymode}>
        Analyze your text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mymode}>
        Textutils gives a way to analyze your text quickly and efficiently. Be it word count, character count.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mymode}>
    <h2 className="accordion-header" style={mymode}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mymode}>
        Free to use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mymode}>
       TextUtils is a free character tool that provides instant character count and word count statistics for a given text. Textutils reports the number of words and charcters. Thus it is suitable for wirting text with wirds /charater limit. 
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mymode}>
    <h2 className="accordion-header" style={mymode}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mymode}>
        Browzer compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mymode}>
       This word counter software works in  any web browzers such as chrome, firefox, Internet explorer , safari , opera. it suits to count character in facebook, blog, books, exel documents, pdf documents , essays etc.
      </div>
    </div>
  </div>
</div>
    </div>

    <button className=" btn btn-primary my-2" onClick={toggleStyle}>{but}</button>
    </div>
    </>
  )
}
