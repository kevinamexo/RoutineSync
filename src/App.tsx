// import { useState } from 'react'

import "./App.css";
import { Button } from "./components/ui/button";
import RoutineFormDialog from "./components/ui/RoutineFormDialog";
import { useAppSelector } from "./hooks/reduxHooks";

function App() {
  const { routines } = useAppSelector((state) => state.routines);

  return (
    <main>
      <Button>RoutineSync</Button>
      <RoutineFormDialog />
      {routines &&
        routines.map((routine) => (
          <div key={routine.id} className="flex flex-col gap-2">
            <h2>{routine.name}</h2>
            <p>{routine.description}</p>
            <p>{routine.colour}</p>
            <p>{routine.days.join(", ")}</p>
          </div>
        ))}
    </main>
  );
}

export default App;
