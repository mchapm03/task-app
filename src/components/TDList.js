import React from "react";
import TDItem from "./TDItem";

export default function TDList({
  title,
  listItems,
  checked,
  toggleStatus,
  handleDelete
}) {
  return (
    <div>
      <h2>{title}</h2>
      <ul className="no-bullet">
        {listItems.map(({ name, priority, id }, index) => (
          <TDItem
            id={id}
            name={name}
            priority={priority}
            checked={checked}
            handleDelete={handleDelete}
            toggleStatus={toggleStatus}
          />
        ))}
      </ul>
    </div>
  );
}
