import React, { useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "./button";
import RoutineForm from "./RoutineForm";

const RoutineFormDialog: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Routine</Button>
      </DialogTrigger>

      <DialogContent className="rounded-md">
        <DialogHeader className="text-center">
          <DialogTitle>Add Routine</DialogTitle>
          <DialogDescription>
            Add a new routine to track in your weekly schedule.
          </DialogDescription>
        </DialogHeader>
        <RoutineForm handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

export default RoutineFormDialog;
