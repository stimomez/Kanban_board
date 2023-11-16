import { useRef, useState } from "react";
import { PropsFormCreateTask } from "./FormCreateTask";

export const FormCreateTask = ({
  update = false,
  id = "0",
  selectedColor,
  taskTitle,
  setTaskTitle,
  taskText,
  setTaskText,
  isNewTask,
  setIsNewTask,
  createTask,
  updateTask,
  setIsUpdateTask = (() => {
    const defaultState = false;
    const defaultId = "defaultId";
    return useState({ state: defaultState, id: defaultId })[1];
  })(),
}: PropsFormCreateTask) => {
  const textarea = useRef(null);
  const updateCancel = () => {
    setIsUpdateTask({ state: false, id: "h" });
    resetInputs();
  };
  const resetInputs = () => {
    setTaskTitle("");
    setTaskText("");
  };
  const handleKeyUp = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (textarea.current) {
      textarea.current.style.height = "25px";
      const scHeight = `${event.target.scrollHeight}px`;
      textarea.current.style.height = scHeight;
    }
  };

  return (
    <div style={{ color: update ? "#fff" : selectedColor }}>
      <input
        className=" w-full bg-transparent rounded-lg py-1 px-2 outline-none hover:bg-neutral-950"
        placeholder="Title"
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />

      <textarea
        ref={textarea}
        onKeyUp={handleKeyUp}
        className={`text-area_task w-full bg-transparent text   cursor-pointer py-1 px-2 rounded-xl outline-none  hover:bg-neutral-950`}
        value={taskText}
        placeholder="Description"
        onChange={(e) => setTaskText(e.target.value)}
      ></textarea>

      <div
        className={`${
          isNewTask || update ? "h-fit" : "h-0 overflow-hidden"
        } flex justify-start mt-2  items-center gap-2 text-white`}
      >
        <span
          onClick={() =>
            update ? updateTask(id, taskTitle, taskText) : createTask
          }
          className="cursor-pointer bg-blue-600 py-1 px-2  rounded-lg text-sm hover:opacity-90"
        >
          {update ? "Update" : "Add card"}
        </span>
        {update ? (
          <span
            onClick={() => (update ? updateCancel() : createTask())}
            className="cursor-pointer bg-gray-400 py-1 px-2  rounded-lg text-sm hover:opacity-90"
          >
            Cancel{" "}
          </span>
        ) : (
          <span
            onClick={() => setIsNewTask(false)}
            className="cursor-pointer py-1 px-2  rounded text-sm hover:bg-slate-700"
          >
            x
          </span>
        )}
      </div>
    </div>
  );
};
