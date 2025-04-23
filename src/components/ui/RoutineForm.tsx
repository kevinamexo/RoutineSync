import React from "react";
import { Input } from "./input";
import { Textarea } from "./textarea";
import DayPicker from "./DayPicker";
import ColourPicker from "./ColourPicker";
import { Button } from "./button";
import useRoutineForm from "@/hooks/useRoutineForm";

interface RoutineFormProps {
  handleClose: () => void;
}

const RoutineForm: React.FC<RoutineFormProps> = ({ handleClose }) => {
  const {
    formInputs,
    selectedDays,
    selectedColour,
    handleColourChange,
    handleInputChange,
    handleSubmit,
    onDayClick,
    error,
    cancelForm,
  } = useRoutineForm(handleClose);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {error && <p className="text-red-500">{error}</p>}{" "}
      <div className="grid w-full font-semibold items-center gap-1.5">
        <label htmlFor="name">Name</label>
        <Input
          className="w-full"
          type="name"
          id="name"
          placeholder="e.g Morning Run, Read, Meditate"
          name="name"
          onChange={handleInputChange}
          value={formInputs.name}
          required={true}
        />
      </div>
      <div className="grid gap-1.5">
        <label className="font-semibold" htmlFor="description">
          Description (optional){" "}
        </label>
        <Textarea
          placeholder="Brief description of your routine"
          id="description"
          name="description"
          value={formInputs.description}
          onChange={handleInputChange}
        />
      </div>
      <div className="grid gap-1.5">
        <label className="font-semibold" htmlFor="days">
          Days of the week
        </label>
        <DayPicker
          handleSelectedDays={onDayClick}
          selectedDays={selectedDays}
          aria-label="Select days of the week"
        />
      </div>
      <div className="grid gap-1.5">
        <label className="font-semibold" htmlFor="colour">
          Colour
        </label>
        <ColourPicker
          selectedColour={selectedColour}
          handleColourChange={handleColourChange}
          aria-label="Select a colour"
        />
      </div>
      <div className="w-full flex flex-row justify-end gap-2">
        <Button type="button" className="bg-secondary" onClick={cancelForm}>
          Cancel
        </Button>
        <Button type="submit">Create Routine</Button>
      </div>
    </form>
  );
};

export default RoutineForm;
