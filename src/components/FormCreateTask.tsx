import { useRef, useState } from "react";
import { PropsFormCreateTask } from "../types";

const FormCreateTask = ({
  update = false,
  id = "0",
  selectedColor,
  taskTitle,
  setTaskTitle,
  taskText,
  setTaskText,
  isNewTask,
  setIsNewTask,
  createTask = () => {
    console.log();
  },
  updateTask = (id: string, text: string, body: string) => {
    console.log(id, text, body);
  },
  setIsUpdateTask = (() => {
    const defaultState = false;
    const defaultId = "defaultId";
    return useState({ state: defaultState, id: defaultId })[1];
  })(),
}: PropsFormCreateTask) => {
  const textarea = useRef<HTMLTextAreaElement>(null);
  const updateCancel = () => {
    setIsUpdateTask({ state: false, id: "h" });
    resetInputs();
  };
  const resetInputs = () => {
    setTaskTitle("");
    setTaskText("");
  };
  const handleKeyUp = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const target = event.currentTarget as HTMLTextAreaElement;
    if (textarea.current) {
      textarea.current.style.height = "25px";
      const scHeight = `${target.scrollHeight}px`;
      textarea.current.style.height = scHeight;
    }
  };

  return (
    <div style={{ color: update ? "#fff" : selectedColor }}>
      <input
        className={`w-full rounded-lg py-1 px-2 outline-none hover:bg-neutral-950         ${
          update
            ? "bg-neutral-950 mb-1"
            : " bg-transparent hover:bg-neutral-950"
        }`}
        placeholder="Title"
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />

      <textarea
        ref={textarea}
        onKeyUp={handleKeyUp}
        className={`text-area_task w-full  text   cursor-pointer py-1 px-2 rounded-lg outline-none ${
          update ? "bg-neutral-950" : " bg-transparent hover:bg-neutral-950"
        }`}
        value={taskText}
        placeholder="Description"
        onChange={(e) => setTaskText(e.target.value)}
      ></textarea>

      <div
        className={`${
          isNewTask || update ? "h-fit" : "h-0 overflow-hidden"
        } flex justify-start mt-2  items-center gap-2 text-white`}
      >
        <button
          onClick={() =>
            update ? updateTask(id, taskTitle, taskText) : createTask()
          }
          className="cursor-pointer bg-blue-600 py-1 px-2  rounded-lg text-sm hover:opacity-90 "
          disabled={!taskTitle.trim()}
        >
          {update ? "Update" : "Add card"}
        </button>
        {update ? (
          <span
            onClick={() => (update ? updateCancel() : {})}
            className="cursor-pointer bg-gray-400 py-1 px-2  rounded-lg text-sm hover:opacity-90"
          >
            Cancel{" "}
          </span>
        ) : (
          <span
            onClick={() => setIsNewTask(false)}
            className="cursor-pointer py-1 px-2  rounded text-sm hover:bg-slate-700"
          >
            <i className="fa-solid fa-xmark"></i>
          </span>
        )}
      </div>
    </div>
  );
};

export default FormCreateTask;
