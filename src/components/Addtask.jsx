import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, filterTask } from '../redux/action'

const Addtask = () => {
const {tasks} = useSelector(state => state)
const Counter = tasks.filter(el => el.isDone).length

  const [text,setText] = useState("")
  const dispatch = useDispatch()
  const handleSubmit = (e) =>{
    e.preventDefault();
    const newTask = {
      id:Math.random(),
      action:text,
      isDone:false,
    }
    dispatch(addTask(newTask))
    setText('')
  }
  return (
    <div>
      <div>
        <h1>To Do List</h1>
        <p>Total tasks : {tasks.length}</p>
        <p>Complete tasks: {Counter}</p>
      <h3>To do lists</h3>
      <form onSubmit={handleSubmit} >
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      <button>Add</button>
      <button onClick={()=>dispatch(filterTask())}>Filter</button>
      </form>
      </div>
    </div>
  )
}

export default Addtask