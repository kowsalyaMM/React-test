import React from 'react';

import { useState } from "react";



    
function MyComponent () {

    const [name, setName] = useState("");
    const [secondname, setsecondName] = useState("");
    const [submitted, setSubmitted] = useState(false); // New state variable


    function handleSubmit (event){
      event.preventDefault();
    
    
    setSubmitted(true); 

    }
  

   return (
    <form onSubmit={handleSubmit} id='formdata'>
        <br/><br/>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br/><br/>
      <label>Enter your second name:
        <input 
          type="text" 
          value={secondname}
          onChange={(e) => setsecondName(e.target.value)}
        />
      </label>
      <br/><br/>

      <input type="submit" />
      {submitted && (
        <div>
          <p>Name: {name}</p>
          <p>Second Name: {secondname}</p>
          
        </div>
      )}
    </form>

   );
};

export default MyComponent;
