import React ,{useState} from 'react';
import './TodoList.css'

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
  
    const handleAddTodo = () => {
      if (newTodo.trim() === '') return;
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    };
  
    const handleRemoveTodo = (index) => {
      setTodos(todos.filter((_, i) => i !== index));
    };
  
    const handleToggleComplete = (index) => {
      setTodos(
        todos.map((todo, i) =>
          i === index ? { ...todo, completed: !todo.completed } : todo
        )
      );
    };
    const pendingCount = todos.filter((todo) => !todo.completed).length;
  
    return (
    <div className='container'>
      <div className='display'>
        <h1>Pending tasks ({pendingCount}) </h1>
      
        <ul>
          {todos.map((todo, index) => (
            <h3 key={index}>
              <span
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                }}
              >
                {todo.text}
              </span>
              <button className='btn-complete' onClick={() => handleToggleComplete(index)}>
                {todo.completed ? 'Incomplete' : 'Complete'}
              </button>
              <button className='btn-remove' onClick={() => handleRemoveTodo(index)}>X</button>
            </h3>
          ))}
        </ul>
        <div className='todo-add'>
          <input
            className='input'
            type="text"
            placeholder='Add a new task'
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button className='btn-s' onClick={handleAddTodo}>Add</button>
        </div>
      </div>
      </div>
    );
  }
  
  