import { useContext } from "react";
import { CounterContext } from "../../context/CounterContext";

export default function Contact() {
  const { counter } = useContext(CounterContext);
  return (
    <div className="contact">
      <h1>Contact</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
}
