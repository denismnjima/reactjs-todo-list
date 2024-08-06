import React from 'react'

export default function TodoCard(props) {
  const {children, handleDeleteTodo, index, handleEditTodo} = props
  return (
    <li className='todoItem'>
    {children}
    <div className='actionsContainer'>
      <button onClick={()=>{
        handleEditTodo(index)
      }}>
       <i className="fa-solid fa-pencil"></i>
      </button>
      <button onClick={()=>{
        handleDeleteTodo(index)
      }}>
       <i className="fa-solid fa-trash"></i>
      </button>
    </div>
    </li>
  )
}
