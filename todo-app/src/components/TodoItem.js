import React, { Component } from 'react';
import {RiDeleteBinLine} from 'react-icons/ri'
import {BsCheck2} from 'react-icons/bs'
function TodoItem(props) {
    return (
         <div className={props.todo.complete ?  "todo-row completed" : "todo-row "}>
          {props.todo.text}
      
           

 <div className='iconsContainer'>

  
<RiDeleteBinLine className='icon' onClick={()=>props.removeTodo(props.todo.id)}/>

</div>
    </div>
    );
}

export default TodoItem;

