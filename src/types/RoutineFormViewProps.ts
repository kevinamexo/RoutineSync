import { Days } from "./routine";


export interface RoutineFormViewProps {
    name: string
    description: string;
    days: Days[];
    color: string;
    onNameChange: (name: string) => void;
    onDescriptionChange: (description: string) => void;
    onDayToggle: (day: Days) => void;
    onColorChange: (color: string) => void;
    onSubmit: () => void;
    onCancel: () => void;
    isSubmitDisabled: boolean;

}