import { useState } from "react";

function Form({ addtodo }) {
  const [newitem, setNewitem] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (newitem == "") return;
    addtodo(newitem);
    setNewitem("");
  }
  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          type="text"
          id="item"
          value={newitem}
          onChange={(e) => {
            setNewitem(e.target.value);
          }}
        />
      </div>
      <button className="btn">Add Item</button>
    </form>
  );
}

export default Form;
