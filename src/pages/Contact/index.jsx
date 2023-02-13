import { useCounterContext } from "../../hooks/useCounterContext";

export default function Contact() {
  const { counter } = useCounterContext();
  return (
    <div className="contact">
      <h1>Contact</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
}
