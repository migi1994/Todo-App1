import React, { Component, useState } from 'react';
 
function TodoForm(props) {

   const [input , setInput]= useState("") 
 
      
    const   formHndler=(e)=>{
     e.preventDefault()
     props.addTodo(input)
    setInput("")
  
       }
 


    return ( <div>
            <form className='todo-form' onSubmit={formHndler}>

                <input value={input} onChange ={(e)=>setInput(e.target.value)} className='todo-input'placeholder='what do you want to do to day...' />
               


            </form>


    </div> );
}

export default TodoForm;