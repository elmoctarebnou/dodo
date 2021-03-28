import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoList = () => {

  const [todoList, setTodoList] = useState(null);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api')
      .then(res =>  setTodoList(res.data))
      .catch(err => {
        console.log(err);
      })
  }, [todoList])

  const renderTodoList = () => {
    return (
      todoList.map((todo) => {
        return (
          <li key={todo.title}>
            <h1>{todo.title}</h1>
            <h3>{todo.body}</h3>
          </li>
        )
      })
    )
  }

  return (
    <div>
      <ul>
        {todoList ? renderTodoList() : <h1>...Loading</h1>}
      </ul>
    </div>
  )
}

export default TodoList;