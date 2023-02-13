import { useContext } from "react";
import ChangeCounter from "../../components/ChangeCounter";
import { CounterContext } from "../../context/CounterContext";

export default function Home() {
  const { counter } = useContext(CounterContext);
  return (
    <div className="home">
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>

      <ChangeCounter />
    </div>
  );
}
