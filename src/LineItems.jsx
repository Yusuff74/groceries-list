import React, { Component } from "react";
import { FaTrashAlt } from "react-icons/fa";

const LineItems = ({ item, handleCheck, handleDelete }) => {
  return (
    <li key={item.id} className="listItems">
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      <label>{item.item}</label>
      <FaTrashAlt
        onClick={() => handleDelete(item.id)}
        role="button"
        className="delete-btn"
      />
    </li>
  );
};

export default LineItems;
