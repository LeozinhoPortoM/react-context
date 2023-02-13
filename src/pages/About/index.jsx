import { useContext } from "react";
import { CounterContext } from "../../context/CounterContext";

export default function About() {
  const { counter } = useContext(CounterContext);
  return (
    <div className="about">
      <h1>About</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
}
