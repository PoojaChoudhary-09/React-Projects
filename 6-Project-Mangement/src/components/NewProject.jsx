import React, { useRef, useState } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

const NewProject = ({ onAdd, onCancel }) => {
  const modal = useRef();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  function handleSave() {
    if (title.trim() === "" || description.trim() === "" || dueDate.trim() === "") {
      modal.current.open();
      return;
    }

    onAdd({
      title,
      description,
      dueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Oops... looks like you forget to enter a value.</p>
        <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button onClick={handleSave} className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md ">
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input
            type="text"
            label="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <Input
            label="Description"
            textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <Input
            type="date"
            label="Due Date"
            value={dueDate}
            onChange={(event) => setDueDate(event.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default NewProject;
