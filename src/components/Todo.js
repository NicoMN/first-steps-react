import { useState } from 'react';
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
const [ modalIsOpen, setModalIsOpen ] =  useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      { modalIsOpen && <Modal/> }
      { modalIsOpen && <Backdrop/> }
      
    </div>
  );
}

export default Todo;

// { modalIsOpen ? <Modal/> : null}
// modalIsOpen && <Modal/> Checks if modalIsOpen AND the function component Modal is true (Function Components are always true)
// And returns the second value (Modal) if both are True