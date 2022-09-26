import React from 'react';
import Task from './Task';

function TaskList({ tasks, onTaskDelete }) {
  // display a list of tasks using Task component
  const taskList = tasks.map((task) => (
    <Task
      key={task.text}
      text={task.text}
      category={task.category}
      onTaskDelete={onTaskDelete}
    />
  ));
  return <div className='tasks'>{taskList}</div>;
}
export default TaskList;
