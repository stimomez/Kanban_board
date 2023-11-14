type PropsDragAndDrop = {
  title: string;
  tasks: Tasks[];
  setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
  numberList: number;
};
interface Tasks {
  id: number;
  title: string;
  body?: string;
  list: number;
}

const DragAndDrop = ({
  title,
  tasks,
  setTasks,
  numberList,
}: PropsDragAndDrop) => {
  const getList = (list: number) => {
    return tasks.filter((item: Tasks) => item.list === list);
  };

  const startDrag = (
    evt: React.DragEvent<HTMLLIElement>,
    item: { id: number }
  ) => {
    evt.dataTransfer.setData("itemId", item.id.toString());
    // console.log(item);
  };

  const draggingOver = (evt: React.DragEvent) => {
    evt.preventDefault();
  };

  const onDrop = (evt: React.DragEvent, newList: number) => {
    const itemId = evt.dataTransfer.getData("itemId");
    const item = tasks.find((item) => item.id === parseInt(itemId, 10));

    if (item) {
      item.list = newList;

      const newState = tasks.map((task) => {
        if (task.id === parseInt(itemId, 10)) return item;
        return task;
      });
      setTasks(newState);
    }
  };
  return (
    <div className=" p-4 text-white">
      <ul
        style={{ minHeight: "20px" }}
        className="w-60 flex flex-col  border gap-3 py-3 px-5 bg-background_secondary"
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
              className="border cursor-pointer"
              key={item.id}
              draggable
              onDragStart={(evt) => startDrag(evt, item)}
            >
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DragAndDrop;
