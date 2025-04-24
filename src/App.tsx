import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
// import { Button } from "./components/ui/button";
import Header from "./components/ui/Header";
// import RoutineFormDialog from "./components/ui/RoutineFormDialog";
import { useAppSelector } from "./hooks/reduxHooks";
import Grid from "./routes/Grid";
import Insights from "./routes/Insights";
import Routines from "./routes/Routines";
import NavigationTabs from "./components/ui/NavigationTabs";

function App() {
  const { routines } = useAppSelector((state) => state.routines);

  return (
    <div className="">
      <Header />
      <NavigationTabs />
      <Routes>
        <Route path="/" element={<Navigate to="/routines" replace />} />
        <Route path="/routines" element={<Routines />} />
        <Route path="/grid" element={<Grid />} />
        <Route path="/insights" element={<Insights />} />
      </Routes>
      {routines.length > 0 && <p>{routines.length}</p>}
    </div>
  );
}

export default App;
