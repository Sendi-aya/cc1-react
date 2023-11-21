import React, { useState } from 'react';
import './liststyle.css'

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { text: task, isDone: false }]);
      setTask('');
    }
  };

  const handleToggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isDone = !updatedTasks[index].isDone;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className='fv container'>
      <h1 className='title' > To-Do List</h1>
        <br/>
      <input className='form-control dr'
        type="text"
        placeholder="Ajouter une tâche pour réaliser"
        value={task}
        onChange={handleInputChange}
      />
      <button className='ajt btn btn-primary' onClick={handleAddTask}>Ajouter</button>
      <div className='dv'>
      <table>
        {tasks.map((task, index) => (
        <tr>
          <td key={index}>
              <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
                {task.text}
              </span>
          </td>
          <td>
          <button className="add btn btn-outline-primary" onClick={() => handleToggleTask(index)}>
              {task.isDone ? "commencé" : 'Terminé'}
            </button>
          </td>
          <td>
          <button className="del btn btn-danger" onClick={() => handleDeleteTask(index)}>Supprimer</button>
          </td>
        </tr>
        ))}

      </table>
      </div>

    </div>
  );
}

export default App;
