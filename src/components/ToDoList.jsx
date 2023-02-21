import React from 'react';
import './ToDoList.css';

const ToDoList = ({ listData, onRemove }) => {
  return (
    <div>
      <ul className="todoList">
        {listData.map((el, index) => {
          return (
            <div className="list_item_container" key={el.data + index}>
              <li className="todoItem">{el.data}</li>
              <div className="remove_button" onClick={() => onRemove(el.data)}>
                X
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
