import React, { useState, useEffect } from "react";
import createModule from "./web.mjs";

import Header from "./Components/Header";
import "./css/App.css"

function App() {  
  const [add, setAdd] = useState();
  useEffect(  () => {createModule().then((Module) => { 
    setAdd(() => Module.cwrap("add", "number", ["number", "number"]));
  });  
    }, []);  

  if (!add) {  
    return "Loading webassembly...";  
  }  return (    
  <div className="App">    
      <Header />
      <p>Let's do some basic addition:</p>  
        <div>123 + 234 = {add(123, 1)}</div> 
  </div>  
  );
}
    
export default App;