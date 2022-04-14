import React from 'react'
import { FaCheck, FaUndo, FaTrash } from "react-icons/fa";
import "./task.css"

export const Task = ({title, isComplete, id, updateStatus , onDelete}) => {
  return (
    <div>
     <div className={`m-task ${isComplete ? "done" : ""}`}>
      <h4>{title}</h4>{" "}
      <div className="controls">
        <FaCheck  onClick={()=> updateStatus(id, true)} />
        <FaUndo  onClick={()=>updateStatus(id, false) }/>
        <FaTrash onClick={()=> onDelete(id) } />
      </div>
    </div>
    </div>
  )
}

Task.defaultProps = {
    title: "NO TITLE",
    isComplete: false,
}