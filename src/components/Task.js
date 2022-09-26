import React from 'react';

function Task({ text, category, onTaskDelete }) {
  function handleTheClick() {
    onTaskDelete(text);
  }

  return (
    <div className='task'>
      <div className='label'>{category}</div>
      <div className='text'>{text}</div>
      <button onClick={handleTheClick} className='delete'>
        X
      </button>
    </div>
  );
}

export default Task;
