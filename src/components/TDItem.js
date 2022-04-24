const backgroundColors = [
  "rgb(252, 249, 155)",
  "rgb(254,230,201)",
  "rgb(253,218,219)"
];

export default function TDItem({
  id,
  name,
  priority,
  checked,
  handleDelete,
  toggleStatus
}) {
  return (
    <div>
      <li key={id} style={{ backgroundColor: backgroundColors[priority] }}>
        <input
          type="checkbox"
          defaultChecked={checked}
          onClick={() => toggleStatus(id)}
        ></input>
        <p className="item-label">{name}</p>
        <button className="delete-btn" onClick={() => handleDelete(id)}>
          X
        </button>
      </li>
    </div>
  );
}
