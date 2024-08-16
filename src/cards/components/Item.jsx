import React from 'react';
import './Item.css'; // Assuming you are using an external CSS file

export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <div className="item-content">
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
        <span
          className={item.packed ? 'item-description packed' : 'item-description'}
        >
          <strong>{item.quantity}</strong> {item.description}
        </span>
      </div>
      <button onClick={() => onDeleteItem(item.id)}>DELETE</button>
    </li>
  );
}
