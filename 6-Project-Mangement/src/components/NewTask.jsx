import React, { useState } from 'react'

const NewTask = ({onAdd}) => {
  const[enteredTask, setEnteredTask] = useState("");
  function handleChange(event){
   setEnteredTask(event.target.value);
  }
  function handleClick(){
     if (enteredTask.trim() === "") {
    return;
  }
    onAdd(enteredTask);
     setEnteredTask('');
  }
  return (
    <div className=' flex items-center gap-4'>
        <input type='text' className='w-50 px-2 py-1 rounded-sm bg-stone-200'
        onChange={handleChange} value={enteredTask}/>
        <button className='text-stone-700 hover:text-stone-950 bg-stone-200 hover:bg-stone-400 py-1.5 px-5 rounded-md' onClick={handleClick}>Add Task</button>
    </div>
  )
}

export default NewTask