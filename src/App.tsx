import { useEffect, useState } from "react";
import "./App.css";
import DragAndDrop from "./components/DragAndDrop";
import { Task } from "./interfaces";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("taskData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setTasks(parsedData);
    }
  }, []);

  const saveDataLocalStorage = (tasks: Task[]) =>
    localStorage.setItem("taskData", JSON.stringify(tasks));

  return (
    <div className=" w-full mt-32">
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

export default App;
