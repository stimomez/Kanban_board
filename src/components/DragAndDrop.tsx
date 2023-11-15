type PropsDragAndDrop = {
  title: string;
  tasks: Tasks[];
  setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
  numberList: number;
  saveDataLocalStorage: () => void;
};
interface Tasks {
  id: number;
  title: string;
  body?: string;
  list: number;
  color: string;
}

const DragAndDrop = ({
  title,
  tasks,
  setTasks,
  numberList,
  saveDataLocalStorage,
}: PropsDragAndDrop) => {
  const getList = (list: number) => {
    return tasks.filter((item: Tasks) => item.list === list);
  };

  const startDrag = (
    evt: React.DragEvent<HTMLLIElement>,
    item: { id: number }
  ) => {
    evt.dataTransfer.setData("itemId", item.id.toString());
    console.log(item);
  };

  const draggingOver = (evt: React.DragEvent) => {
    evt.preventDefault();
  };

  const onDrop = (evt: React.DragEvent, newList: number) => {
    const itemId = evt.dataTransfer.getData("itemId");
    const item = tasks.find((item) => item.id === parseInt(itemId, 10));

    if (item) {
      console.log(item);

      item.list = newList;

      const newState = tasks.map((task) => {
        // console.log(task);

        // console.log(numberList);

        if (task.id === parseInt(itemId, 10)) return item;
        return task;
      });

      // newState.forEach((state) => {
      //   if (state.id === item.id) console.log(state.list);
      // });

      setTasks(newState);
      saveDataLocalStorage();
    }
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
              className=" rounded-xl cursor-pointer text-sm py-3 px-4 text-justify hover:opacity-70"
              key={item.id}
              draggable
              onDragStart={(evt) => startDrag(evt, item)}
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-xs">{item.body}</p>
            </li>
          );
        })}
        <div>
          <input
            className="input-new-task  bg-transparent cursor-pointer py-1 px-2 rounded-xl hover:bg-black outline-none"
            placeholder="Create new task"
            type="text"
          />
          <div className="btn-new-task flex justify-start mt-2  items-center gap-2 ">
            <span className="cursor-pointer bg-blue-600 py-1 px-2  rounded-lg text-sm hover:opacity-90">
              Add card
            </span>
            <span className="cursor-pointer py-1 px-2  rounded text-sm hover:bg-slate-700">
              x
            </span>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default DragAndDrop;
