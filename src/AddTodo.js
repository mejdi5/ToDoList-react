import React, { useState } from "react";

const AddTodo = ({ handleAdd }) => {
  const [text, setText] = useState("");
  // 333: Call the callback using this.props.[callback] in the child (insert your own name where it says [callback] of course), and pass in the data as the argument.
  const add = () => {
    handleAdd({ id: Math.random(), text: text, complete: false, edit: false });
    setText("");
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={add}>Add</button>
    </div>
  );
};
export default AddTodo;