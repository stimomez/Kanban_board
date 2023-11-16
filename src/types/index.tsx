import { Color, Task } from "../interfaces";

export type PropsFormCreateTask = {
  update?: boolean;
  id?: string;
  selectedColor: string;
  taskTitle: string;
  setTaskTitle: React.Dispatch<React.SetStateAction<string>>;
  taskText: string;
  setTaskText: React.Dispatch<React.SetStateAction<string>>;
  isNewTask: boolean;
  setIsNewTask: React.Dispatch<React.SetStateAction<boolean>>;
  createTask?: () => void;
  updateTask?: (id: string, text: string, body: string) => void;
  setIsUpdateTask?: React.Dispatch<
    React.SetStateAction<{ state: boolean; id: string }>
  >;
};

export type PropsDragAndDrop = {
  title: string;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  numberList: number;
  saveDataLocalStorage: (tasks: Task[]) => void;
};

export type PropsColors = {
  colors: Color;
  selectedColor: string;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
  isNewTask: boolean;
};
