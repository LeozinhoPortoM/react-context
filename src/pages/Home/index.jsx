import ChangeCounter from "../../components/ChangeCounter";

import { useCounterContext } from "../../hooks/useCounterContext";

export default function Home() {
  const { counter } = useCounterContext();
  return (
    <div className="home">
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>

      <ChangeCounter />
    </div>
  );
}
