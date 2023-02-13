import { useCounterContext } from "../../hooks/useCounterContext";

export default function About() {
  const { counter } = useCounterContext();
  return (
    <div className="about">
      <h1>About</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
}
