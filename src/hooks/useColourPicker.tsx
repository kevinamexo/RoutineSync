import { Colour } from "@/types/routine";
import { useState } from "react";

const useColourPicker = () => {
  const [selectedColour, setSelectedColour] = useState<Colour | null>(null);

  const handleColourChange = (event: React.MouseEvent<HTMLElement>) => {
    const colour = event.currentTarget.getAttribute("data-colour") as Colour; // Retrieve the colour value
    console.log(colour);

    if (!colour || selectedColour === colour) return; // If no colour value is found or the same colour is clicked, return
    setSelectedColour(colour);
  };

  return { selectedColour, handleColourChange, setSelectedColour };
};

export default useColourPicker;
