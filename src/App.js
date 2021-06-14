import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "groceries",
      day: "Friday",
      reminder: true,
    },

    {
      id: 2,
      text: "appointment",
      day: "monday",
      reminder: true,
    },

    {
      id: 3,
      text: "Go to the bank",
      day: "wednesday",
      reminder: false,
    },
  ]);

  //To delete a Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  //To add a Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newTask = { id, ...task };

    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header
        title="Task tracker"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {
        showAddTask && (
          <AddTask onAdd={addTask} />
        ) /*here the && can be used like ternery if there is no else condition*/
      }
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks left"
      )}
    </div>
  );
}

export default App;
