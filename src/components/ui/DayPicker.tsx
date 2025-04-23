import { DAYS_EN } from "@/lib/constants";
import React from "react";
import { Button } from "./button";
import { Days } from "@/types/routine";

interface DayPickerProps {
  selectedDays: Days[];
  handleSelectedDays: (event: React.MouseEvent<HTMLElement>) => void;
}

const DayPicker: React.FC<DayPickerProps> = ({
  selectedDays,
  handleSelectedDays,
}) => {
  return (
    <div className="flex flex-row justify-between items-center">
      {Object.values(DAYS_EN).map((day, index) => (
        <Button
          type="button"
          variant={"outline"}
          onClick={handleSelectedDays}
          className={
            selectedDays.includes(index as Days)
              ? "bg-primary/20"
              : "bg-transparent"
          }
          data-day={index}
        >
          {day}
        </Button>
      ))}
    </div>
  );
};

export default DayPicker;
