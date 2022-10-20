import { useState, useId } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutContext();
  const id = useId();

  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const workout = {
      _id: id,
      title,
      load,
      reps,
      createdAt: new Date(),
    };

    dispatch({
      type: "CREATE_WORKOUT",
      payload: workout,
    });

    // if (!response.ok) {
    //   setError(json.error);
    //   setEmptyFields(json.emptyFields);
    // } else {
    //   setTitle("");
    //   setLoad("");
    //   setReps("");
    //   setError(null);
    //   setEmptyFields([]);
    //   dispatch({
    //     type: "CREATE_WORKOUT",
    //     payload: json,
    //   });
    // }
  };

  return (
    <form className="create" onSubmit={onFormSubmit}>
      <h3>Adicionar treino</h3>
      <label>Título do exercício</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={emptyFields.includes("title") ? "error" : ""}
      />
      <label>Peso (em KG):</label>
      <input
        type="number"
        value={load}
        onChange={(e) => setLoad(e.target.value)}
        className={emptyFields.includes("load") ? "error" : ""}
      />
      <label>Número de repetições:</label>
      <input
        type="number"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        className={emptyFields.includes("reps") ? "error" : ""}
      />
      <button type="submit">Criar</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};
export default WorkoutForm;
