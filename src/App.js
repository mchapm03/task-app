import "./styles.css";
import React, { useState } from "react";
import TDList from "./components/TDList";
import AddItem from "./components/AddItem";

export default function App() {
  const [allTasks, setTasks] = useState([
    { name: "Walk Dog", id: Date.now() + 2, priority: 2, status: "done" },
    { name: "Do Laundry", id: Date.now() + 3, priority: 1, status: "undone" },
    { name: "Cook Dinner", id: Date.now() + 1, priority: 0, status: "undone" }
  ]);
  const [newTask, setNewTask] = useState({ name: "", priority: 2 });

  const handleChange = (event) => {
    setNewTask((prev) => ({ ...prev, name: event.target.value }));
  };

  const handleSelChange = (event) => {
    setNewTask((prev) => ({ ...prev, priority: event.target.value }));
  };

  const handleAdd = (event) => {
    event.preventDefault();
    let insertIndex = 0;
    while (
      insertIndex < allTasks.length &&
      allTasks[insertIndex].priority >= newTask.priority
    ) {
      insertIndex++;
    }
    if (newTask.name) {
      allTasks.splice(insertIndex, 0, {
        name: newTask.name,
        priority: newTask.priority,
        id: Date.now(),
        status: "undone"
      });
      setTasks(allTasks);
    }
    setNewTask((prev) => ({ ...prev, name: "" }));
  };

  const handleDelete = (itemId) => {
    setTasks((prev) => prev.filter((i) => i.id !== itemId));
  };

  const toggleStatus = (itemId) => {
    let tasks = [...allTasks];
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === itemId) {
        tasks[i].status = allTasks[i].status === "done" ? "undone" : "done";
        break;
      }
    }
    setTasks(tasks);
  };
  return (
    <div className="App">
      <h1>My List of Tasks</h1>
      <AddItem
        handleAdd={handleAdd}
        newTask={newTask.name}
        newTaskPriority={newTask.priority}
        handleSelChange={handleSelChange}
        handleChange={handleChange}
      />
      <TDList
        title="Undone Tasks"
        listItems={allTasks.filter((item) => item.status === "undone")}
        checked={false}
        toggleStatus={toggleStatus}
        handleDelete={handleDelete}
      />

      <TDList
        title="Done Tasks"
        listItems={allTasks.filter((item) => item.status === "done")}
        checked={true}
        toggleStatus={toggleStatus}
        handleDelete={handleDelete}
      />
    </div>
  );
}
