import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { completeTask, deleteTask } from '../redux/action'
import EditTask from './Edit'



const Task = ({task}) => {
    console.log(task)
   const dispatch = useDispatch()
  return (
    <div>
      
      <h3 className={task.isDone?"done":""}>{task.action}</h3> 
      <button onClick={()=> dispatch(deleteTask(task.id))}>Delete</button>
      <button onClick={()=> dispatch(completeTask(task.id))}>{task.isDone?"undo":"Complete"}</button>
      <EditTask task={task}/>
      
        </div>
      
  )
}

export default Task