import React, { useState } from 'react';
import Header from './components/Header';
import Calendar from './components/Calendar';
import TaskList from './components/TaskList';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tasks, setTasks] = useState({}); // Aufgaben nach Datum gruppieren

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const handleAddTask = (taskText) => {
    const taskDate = selectedDate.toDateString(); // das Datum als String
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
      date: taskDate,
    };

    // Aufgaben für das Datum hinzufügen
    setTasks((prevTasks) => ({
      ...prevTasks,
      [taskDate]: prevTasks[taskDate] ? [...prevTasks[taskDate], newTask] : [newTask],
    }));
  };

  const handleDeleteTask = (taskId) => {
    const taskDate = selectedDate.toDateString();
    const updatedTasks = tasks[taskDate].filter((task) => task.id !== taskId);

    setTasks({
      ...tasks,
      [taskDate]: updatedTasks,
    });
  };

  const handleToggleTask = (taskId) => {
    const taskDate = selectedDate.toDateString();
    const updatedTasks = tasks[taskDate].map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );

    setTasks({
      ...tasks,
      [taskDate]: updatedTasks,
    });
  };

  const getTasksForDate = (date) => {
    return tasks[date.toDateString()] || []; // gibt Aufgaben für das gewählte Datum zurück
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <Header />
      <Calendar onChange={handleDateChange} value={selectedDate} />
      <TaskList
        tasks={getTasksForDate(selectedDate)}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
      />
      <p>Ausgewähltes Datum: {selectedDate.toDateString()}</p>
    </div>
  );
}

export default App;




