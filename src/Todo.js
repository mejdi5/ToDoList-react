import React, { useState } from "react";

const Todo = ({ el, handleDelete, handleComplete, handleEdit, handleSave }) => {
  const [editText, setEditText] = useState(el.text);
  // 33333
  const delet = () => {
    handleDelete(el.id);
  };
  // 333
  const complete = () => {
    handleComplete(el.id);
  };
  const editt = () => {
    handleEdit(el.id);
  };
  const save = () => {
    handleSave(el.id, editText);
  };
  return (
    <>
      {el.edit ? (
        <div>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button>cancel</button>
          <button onClick={save}>save</button>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <p
            style={
              el.complete
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            {" "}
            {el.text}{" "}
          </p>
          <button onClick={delet}>delete</button>
          <button onClick={complete}>
            {" "}
            {el.complete ? "undo" : "complete"}{" "}
          </button>
          <button onClick={editt}>edit</button>
        </div>
      )}
    </>
  );
};
export default Todo;

