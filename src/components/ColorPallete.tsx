import { PropsColors } from "../types";

const ColorPallete = ({
  colors,
  selectedColor,
  setSelectedColor,
  isNewTask,
}: PropsColors) => {
  const arrayColor = Object.values(colors);

  if (isNewTask) {
    return (
      <div className=" h-5 w-full  flex gap-1 ">
        {arrayColor.map((color) => (
          <span
            onClick={() => setSelectedColor(color)}
            key={color}
            style={{ background: color }}
            className={`w-9 ${
              selectedColor === color ? "h-3" : "h-2"
            }  rounded-lg cursor-pointer hover:h-3`}
          ></span>
        ))}
      </div>
    );
  } else {
    return <></>;
  }
};

export default ColorPallete;
