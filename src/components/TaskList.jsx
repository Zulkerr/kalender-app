import React, { useState } from 'react';

function TaskList({ tasks, onAddTask, onDeleteTask, onToggleTask }) {
  const [taskInput, setTaskInput] = useState('');

  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      onAddTask(taskInput);
      setTaskInput('');  // Eingabefeld zurücksetzen
    }
  };

  return (
    <section style={{ marginTop: '2rem' }}>
      <h2>✅ Aufgabenliste</h2>

      <div>
        <input
          type="text"
          value={taskInput}
          onChange={handleInputChange}
          placeholder="Neue Aufgabe"
          style={{ padding: '0.5rem', width: '300px', marginRight: '1rem' }}
        />
        <button onClick={handleAddTask} style={{ padding: '0.5rem' }}>
          Aufgabe hinzufügen
        </button>
      </div>

      <ul style={{ marginTop: '1rem' }}>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li
              key={task.id}
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                marginBottom: '0.5rem',
              }}
            >
              <span
                style={{ cursor: 'pointer' }}
                onClick={() => onToggleTask(task.id)}
              >
                {task.text}
              </span>
              <button
                onClick={() => onDeleteTask(task.id)}
                style={{
                  marginLeft: '1rem',
                  backgroundColor: 'red',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.2rem 0.5rem',
                }}
              >
                Löschen
              </button>
            </li>
          ))
        ) : (
          <p>Keine Aufgaben für dieses Datum.</p>
        )}
      </ul>
    </section>
  );
}

export default TaskList;




  