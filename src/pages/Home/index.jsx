import ChangeCounter from "../../components/ChangeCounter";

import { useCounterContext } from "../../hooks/useCounterContext";
import { useTitleColorContext } from "../../hooks/useTitleColorContext";

export default function Home() {
  const { counter } = useCounterContext();

  const { color, dispatch } = useTitleColorContext();

  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div className="home">
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>

      <ChangeCounter />

      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  );
}
