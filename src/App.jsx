import './App.css';
import ToDoList from './components/ToDoList';
import { useState, useRef, useEffect } from 'react';

function App() {
  const [userListData, setUserListData] = useState([]);
  const toDoRef = useRef();

  const removeElement = id => {
    const newList = userListData.filter(el => el.data !== id);

    setUserListData(newList);
  };

  const getUserDataHandler = e => {
    e.preventDefault();

    const userData = {
      data: toDoRef.current.value,
    };

    setUserListData(prevList => [...prevList, userData]);

    toDoRef.current.value = '';
  };

  return (
    <div className="center">
      <h1>To-Do List</h1>
      <div className="app_form-container">
        <form onSubmit={getUserDataHandler} className="app_form">
          <input type="text" ref={toDoRef} placeholder="Enter text here!" />
          <button type="submit">Add</button>
        </form>
        <ToDoList listData={userListData} onRemove={removeElement} />
      </div>
    </div>
  );
}

export default App;
