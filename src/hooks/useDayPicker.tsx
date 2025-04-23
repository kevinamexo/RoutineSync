import { Days } from "@/types/routine";
import { useState } from "react";

const useDayPicker = () => {
  const [selectedDays, setSelectedDays] = useState<Days[]>([]);

  const toggleDays = (selectedDay: Days) => {
    if (selectedDays.includes(selectedDay as Days)) {
      setSelectedDays(
        selectedDays.filter((day) => day !== (selectedDay as Days))
      );
    } else {
      setSelectedDays([...selectedDays, selectedDay as Days]);
    }
  };

  // Handle click events from html elements
  const onDayClick = (event: React.MouseEvent<HTMLElement>) => {
    const day = event.currentTarget.getAttribute("data-day"); // Retrieve the colour value
    if (!day) return; // If no colour value is found, return
    toggleDays(parseInt(day) as Days); // Convert the colour value to a Colour type and toggle it
  };

  return { selectedDays, setSelectedDays, toggleDays, onDayClick };
};

export default useDayPicker;
