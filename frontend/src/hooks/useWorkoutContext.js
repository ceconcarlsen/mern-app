import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutContext = () => {
  const context = useContext(WorkoutsContext); //returns the values of WorkoutsContext

  if (!context) {
    throw Error(
      "useWorkoutContext must be used inside an WorkoutsContextProvider"
    );
  }

  return context;
};
