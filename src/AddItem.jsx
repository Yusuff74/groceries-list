import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem = ({ handleSubmit, newItem, setNewItem }) => {
  const inputRef = useRef();

  return (
    <form className="additem" onSubmit={handleSubmit}>
      <input
        autoFocus
        ref={inputRef}
        type="text"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit" onClick={() => inputRef.current.focus()}>
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
