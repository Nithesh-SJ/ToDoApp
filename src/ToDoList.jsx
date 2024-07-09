import React, { useState } from 'react'

export default function () {
  const[task,setTask]=useState([]);
  const[newTask,setNewTask]=useState("");

  function handleInputChange(event){
    setNewTask(event.target.value);
  }
  function addTask(){
    if(newTask.trim()!==""){
      setTask([...task,newTask]);
      setNewTask("");
    }
  }
  function deleteTask(index){
    const updatedTask=task.filter((element,i)=>i!==index);
    setTask(updatedTask);
  }
  function moveTaskUp(index){
    if(index>0){
      const updatedTask=[...task];
      [updatedTask[index],updatedTask[index-1]]=[updatedTask[index-1],updatedTask[index]];
      setTask(updatedTask);
    }
  }
  function moveTaskDown(index){
    if(index<task.length-1){
      const updatedTask=[...task];
      [updatedTask[index],updatedTask[index+1]]=[updatedTask[index+1],updatedTask[index]];
      setTask(updatedTask);
    }
  }

  let listItems=<p className='text-condition'>Your list is Empty...</p>
  if(task.length>0){
    listItems=(
      <ol>
        {task.map((task,index)=>
        <li key={index}>
          <span className='text'>{task}</span>
          <button 
          className='delete-button'
          onClick={()=>deleteTask(index)}>
            Delete
          </button>
          <button 
          className='move-button'
          onClick={()=>moveTaskUp(index)}>
            👆
          </button>
          <button
          className='move-button'
          onClick={()=>moveTaskDown(index)}>
            👇
          </button>
        </li>
        )}
      </ol>
    );
  }
  return (
    <div className='to-do-list'>
      <h1>To-Do-List</h1>
      <div>
        <input 
        type='text'
        placeholder='Enter a new task here...'
        value={newTask}
        onChange={handleInputChange}
        />
        <button 
        className='add-button'
        onClick={addTask}
        >ADD</button>
      </div>
      {listItems}
    </div>
  )
}
