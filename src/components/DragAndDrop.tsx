import { useState } from "react";
import short from "short-uuid";
import ColorPallete from "./ColorPallete";
import FormCreateTask from "./FormCreateTask";
import { PropsDragAndDrop } from "../types";
import { Color, Task } from "../interfaces";

const DragAndDrop = ({
  title,
  tasks,
  setTasks,
  numberList,
  saveDataLocalStorage,
}: PropsDragAndDrop) => {
  const [taskText, setTaskText] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const [isNewTask, setIsNewTask] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [isUpdateTask, setIsUpdateTask] = useState({ state: false, id: "" });

  const getList = (list: number) => {
    return tasks.filter((item: Task) => item.list === list);
  };

  const startDrag = (
    evt: React.DragEvent<HTMLLIElement>,
    item: { id: string },
  ) => {
    evt.dataTransfer.setData("itemId", item.id.toString());
  };

  const draggingOver = (evt: React.DragEvent) => {
    evt.preventDefault();
  };

  const onDrop = (evt: React.DragEvent, newList: number) => {
    const itemId = evt.dataTransfer.getData("itemId");
    const item = tasks.find((item) => item.id === itemId);

    if (item) {
      item.list = newList;

      const newState = tasks.map((task) => {
        // console.log(task);

        // console.log(numberList);

        if (task.id === itemId) return item;
        return task;
      });

      // newState.forEach((state) => {
      //   if (state.id === item.id) console.log(state.list);
      // });

      setTasks(newState);
      saveDataLocalStorage(newState);
    }
  };

  const createTask = () => {
    const idx = short.generate();

    const newTask: Task = {
      id: idx,
      title: taskTitle,
      list: numberList,
      body: taskText,
      color: selectedColor,
    };

    setTasks((tasks) => [...tasks, newTask]);
    saveDataLocalStorage([...tasks, newTask]);
    setTaskTitle("");
    setTaskText("");
  };

  const deleteTask = (id: string) => {
    const arrayTasks = tasks.filter((task) => task.id !== id);

    setTasks(arrayTasks);

    saveDataLocalStorage(arrayTasks);
  };
  const updateTask = (id: string, title: string, body: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          title,
          body,
        };
      }
      return task;
    });

    setTasks(updatedTasks);

    saveDataLocalStorage(updatedTasks);
    setIsUpdateTask({ state: false, id: "0" });
    resetInputs();
  };
  const getColorByNumberList = (number: number): string => {
    if (number === 1) return myColors.violet;
    if (number === 2) return myColors.red;
    if (number === 3) return myColors.blue;
    if (number === 4) return myColors.green;
    return myColors.fuchsia;
  };

  const myColors: Color = {
    violet: "#6a6dcd",
    fuchsia: "#e3a7d3",
    red: "#d93535",
    blue: "#3180e2",
    green: "#00a88b",
  };

  const resetInputs = () => {
    setTaskTitle("");
    setTaskText("");
  };
  return (
    <div className=" p-4 text-white">
      <ul
        style={{ minHeight: "20px" }}
        className="w-60 flex flex-col rounded-xl  gap-3 py-3 px-5 bg-background_secondary"
        draggable="true"
        onDragOver={(evt: React.DragEvent) => draggingOver(evt)}
        onDrop={(evt: React.DragEvent) => onDrop(evt, numberList)}
      >
        <h2 className="first-letter:uppercase font-semibold text-xl">
          {title}
        </h2>

        {getList(numberList).map((item) => {
          return (
            <li
              style={{ background: item.color }}
              className=" w-full rounded-xl cursor-pointer text-sm py-3 px-4 text-justify hover:opacity-70 relative break-words"
              key={item.id}
              draggable
              onDragStart={(evt) => startDrag(evt, item)}
            >
              {isUpdateTask.state && isUpdateTask.id === item.id ? (
                <FormCreateTask
                  update={true}
                  id={isUpdateTask.id}
                  selectedColor={selectedColor}
                  taskTitle={taskTitle}
                  setTaskTitle={setTaskTitle}
                  taskText={taskText}
                  setTaskText={setTaskText}
                  isNewTask={isNewTask}
                  setIsNewTask={setIsNewTask}
                  updateTask={updateTask}
                  setIsUpdateTask={setIsUpdateTask}
                />
              ) : (
                <div>
                  <div className="absolute right-3 top-1 flex gap-1 items-center">
                    <span
                      className="hover:text-yellow-600"
                      onClick={() => {
                        setIsNewTask(false);
                        setIsUpdateTask({ state: true, id: item.id });
                        setTaskTitle(item.title);
                        setTaskText(item.body || "");
                      }}
                    >
                      <i className="fa-solid fa-pen"></i>
                    </span>
                    <span
                      className="hover:text-red-600"
                      onClick={() => deleteTask(item.id)}
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </span>
                  </div>
                  <h3 className="font-semibold w-4/5 mb-1">{item.title}</h3>
                  <p className="text-xs w-full ">{item.body}</p>
                </div>
              )}
            </li>
          );
        })}
        <div className="flex flex-col">
          <ColorPallete
            colors={myColors}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            isNewTask={isNewTask}
          />

          {isNewTask ? (
            <FormCreateTask
              selectedColor={selectedColor}
              taskTitle={taskTitle}
              setTaskTitle={setTaskTitle}
              taskText={taskText}
              setTaskText={setTaskText}
              isNewTask={isNewTask}
              setIsNewTask={setIsNewTask}
              createTask={createTask}
            />
          ) : (
            <span
              onClick={() => {
                setIsUpdateTask({ state: false, id: "" });
                setSelectedColor(getColorByNumberList(numberList));
                setIsNewTask(!isNewTask);
                resetInputs();
              }}
              className="w-full cursor-pointer py-1 px-2 rounded-xl hover:bg-black outline-none flex items-center gap-1"
            >
              <i className="fa-solid fa-plus"></i>
              <span>Create new task</span>
            </span>
          )}
        </div>
      </ul>
    </div>
  );
};

export default DragAndDrop;
