import { useState } from "react";
import "./App.css";
import DragAndDrop from "./components/DragAndDrop";

function App() {
  const [tasks, setTasks] = useState<Tasks[]>([
    {
      id: 1,
      title: "Tarea 1",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      list: 1,
    },
    {
      id: 2,
      title: "Tarea 2",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      list: 2,
    },
    {
      id: 3,
      title: "Tarea 3",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      list: 2,
    },
    {
      id: 4,
      title: "Tarea 4",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      list: 3,
    },
    {
      id: 5,
      title: "Tarea 5",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      list: 4,
    },
    {
      id: 6,
      title: "Tarea 6",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      list: 4,
    },
    {
      id: 7,
      title: "Tarea 7",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      list: 4,
    },
    {
      id: 8,
      title: "Tarea 8",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      list: 4,
    },
    {
      id: 9,
      title: "Tarea 9",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      list: 4,
    },
    {
      id: 10,
      title: "Tarea 10",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      list: 4,
    },
    {
      id: 11,
      title: "Tarea 11",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      list: 4,
    },
    {
      id: 12,
      title: "Tarea 12",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      list: 4,
    },
    {
      id: 13,
      title: "Tarea 13",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      list: 4,
    },
  ]);

  return (
    <div>
      <h2>Roadmap</h2>
      <div className="flex gap-1">
        <DragAndDrop
          title="backlog"
          tasks={tasks}
          setTasks={setTasks}
          numberList={1}
        />
        <DragAndDrop
          title="to do"
          tasks={tasks}
          setTasks={setTasks}
          numberList={2}
        />
        <DragAndDrop
          title="in progress"
          tasks={tasks}
          setTasks={setTasks}
          numberList={3}
        />
        <DragAndDrop
          title="designed"
          tasks={tasks}
          setTasks={setTasks}
          numberList={4}
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
}
export default App;
