import { useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
import { v4 as uuidv4 } from "uuid";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutContext();

  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const workout = {
      _id: uuidv4(),
      title,
      load,
      reps,
      createdAt: new Date(),
    };

    dispatch({
      type: "CREATE_WORKOUT",
      payload: workout,
    });

    setTitle("");
    setLoad("");
    setReps("");
  };

  return (
    <form className="create" onSubmit={onFormSubmit}>
      <h3>Adicionar treino</h3>
      <label>Título do exercício</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={"title"}
      />
      <label>Peso (em KG):</label>
      <input
        type="number"
        value={load}
        onChange={(e) => setLoad(e.target.value)}
        className="load"
      />
      <label>Número de repetições:</label>
      <input
        type="number"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        className="reps"
      />
      <button type="submit">Criar</button>
    </form>
  );
};
export default WorkoutForm;
