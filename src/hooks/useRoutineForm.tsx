import React, { useCallback } from "react";
import { useState } from "react";
import { useAppDispatch } from "./reduxHooks";
import { addRoutine } from "@/app/features/routines/routineSlice";
import { Routine, Colour } from "@/types/routine";
import useDayPicker from "./useDayPicker";
import useColourPicker from "./useColourPicker";

const useRoutineForm = (handleClose: () => void) => {
  const dispatch = useAppDispatch();
  const { onDayClick, selectedDays, setSelectedDays } = useDayPicker();
  const { handleColourChange, selectedColour, setSelectedColour } =
    useColourPicker();
  const [formInputs, setFormInputs] = useState<Record<string, string>>({
    name: "",
    description: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormInputs({ ...formInputs, [event.target.name]: event.target.value });
  };

  const resetForm = () => {
    setFormInputs({ name: "", description: "" });
    setSelectedDays([]);
    setSelectedColour(null);
    setError(null);
  };

  const cancelForm = () => {
    resetForm();
    handleClose();
  };

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!formInputs.name) {
        setError("Name is required.");
        return;
      }

      if (selectedDays.length === 0) {
        setError("Please select at least one day.");
        return;
      }

      if (!selectedColour) {
        setError("Please select a colour.");
        return;
      }

      setError(null);

      const formData: Routine = {
        id: Date.now().toString(),
        name: formInputs.name,
        description: formInputs.description,
        days: selectedDays,
        colour: selectedColour as Colour,
        createdAt: new Date().toISOString(),
      };

      dispatch(addRoutine(formData));
      handleClose();
      resetForm();
    },
    [formInputs, selectedColour, selectedDays, dispatch, handleClose]
  );

  return {
    formInputs,
    error,
    handleInputChange,
    handleSubmit,
    onDayClick,
    selectedDays,
    selectedColour,
    handleColourChange,
    cancelForm,
  };
};
export default useRoutineForm;
