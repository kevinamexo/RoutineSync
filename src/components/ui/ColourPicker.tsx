import { COLOURS } from "@/lib/constants";
import React from "react";
import { Colour } from "@/types/routine";

interface ColourPickerProps {
  handleColourChange: (event: React.MouseEvent<HTMLElement>) => void;
  selectedColour: Colour | null;
}

const ColourPicker: React.FC<ColourPickerProps> = ({
  handleColourChange,
  selectedColour,
}) => {
  return (
    <div className="flex flex-row items-center gap-3">
      {Object.values(COLOURS).map((colour, index) => (
        <div
          className={` ${colour}  ${
            selectedColour && parseInt(selectedColour) === index
              ? "border-2 border-white"
              : ""
          } rounded-full w-8 h-8 border border-border cursor-pointer`}
          key={index}
          data-colour={index}
          onClick={handleColourChange}
        ></div>
      ))}
    </div>
  );
};

export default ColourPicker;
