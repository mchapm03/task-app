import React from "react";

export default function AddItem({
  newTask,
  newTaskPriority,
  handleChange,
  handleSelChange,
  handleAdd
}) {
  return (
    <div>
      <form>
        <input
          placeholder="New Task"
          value={newTask}
          onChange={(e) => handleChange(e)}
        ></input>
        <select onChange={handleSelChange} selected={newTaskPriority}>
          <option value="2">high</option>
          <option value="1">medium</option>
          <option value="0">low</option>
        </select>
        <button onClick={(e) => handleAdd(e)}>Add new Task</button>
      </form>
    </div>
  );
}
