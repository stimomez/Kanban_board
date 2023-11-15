import { useEffect, useState } from "react";
import "./App.css";
import DragAndDrop from "./components/DragAndDrop";

function App() {
  const colors = {
    violet: "#6a6dcd",
    fuchsia: "#e3a7d3",
    red: "#d93535",
    blue: "#3180e2",
    green: "#00a88b",
  };
  const [tasks, setTasks] = useState<Tasks[]>([
    // {
    //   id: 1,
    //   title: "Tarea 1",
    //   body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
    //   list: 1,
    //   color: colors.violet,
    // },
    // {
    //   id: 2,
    //   title: "Tarea 2",
    //   body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
    //   list: 2,
    //   color: colors.violet,
    // },
    // {
    //   id: 3,
    //   title: "Tarea 3",
    //   body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
    //   list: 2,
    //   color: colors.green,
    // },
    // {
    //   id: 4,
    //   title: "Tarea 4",
    //   body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
    //   list: 3,
    //   color: colors.violet,
    // },
    // {
    //   id: 5,
    //   title: "Tarea 5",
    //   body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
    //   list: 4,
    //   color: colors.green,
    // },
    // {
    //   id: 6,
    //   title: "Tarea 6",
    //   body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
    //   list: 4,
    //   color: colors.green,
    // },
    // {
    //   id: 7,
    //   title: "Tarea 7",
    //   body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
    //   list: 4,
    //   color: colors.red,
    // },
    // {
    //   id: 8,
    //   title: "Tarea 8",
    //   body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
    //   list: 4,
    //   color: colors.red,
    // },
    // {
    //   id: 9,
    //   title: "Tarea 9",
    //   body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
    //   list: 4,
    //   color: colors.blue,
    // },
    // {
    //   id: 10,
    //   title: "Tarea 10",
    //   body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
    //   list: 4,
    //   color: colors.blue,
    // },
    // {
    //   id: 11,
    //   title: "Tarea 11",
    //   body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
    //   list: 4,
    //   color: colors.fuchsia,
    // },
    // {
    //   id: 12,
    //   title: "Tarea 12",
    //   body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
    //   list: 4,
    //   color: colors.fuchsia,
    // },
    // {
    //   id: 13,
    //   title: "Tarea 13",
    //   body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
    //   list: 4,
    //   color: colors.green,
    // },
  ]);

  useEffect(() => {
    const storedData = localStorage.getItem("taskData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setTasks(parsedData);
    }
  }, []);
  // console.log(tasks);

  const saveDataLocalStorage = () =>
    localStorage.setItem("taskData", JSON.stringify(tasks));

  // useEffect(() => {
  //   localStorage.setItem("taskData", JSON.stringify(tasks));
  // }, [tasks]);

  return (
    <div className=" w-full ">
      <h2 className="text-3xl text-white ml-56">Roadmap</h2>
      <div className="flex gap-1 justify-center ">
        <DragAndDrop
          title="backlog"
          tasks={tasks}
          setTasks={setTasks}
          numberList={1}
          saveDataLocalStorage={saveDataLocalStorage}
        />
        <DragAndDrop
          title="to do"
          tasks={tasks}
          setTasks={setTasks}
          numberList={2}
          saveDataLocalStorage={saveDataLocalStorage}
        />
        <DragAndDrop
          title="in progress"
          tasks={tasks}
          setTasks={setTasks}
          numberList={3}
          saveDataLocalStorage={saveDataLocalStorage}
        />
        <DragAndDrop
          title="designed"
          tasks={tasks}
          setTasks={setTasks}
          numberList={4}
          saveDataLocalStorage={saveDataLocalStorage}
        />
      </div>
    </div>
  );
}

interface Tasks {
  id: number;
  title: string;
  body?: string;
  list: number;
  color: string;
}
export default App;
