import { useState, useEffect } from "react";
import './App.css';

export default function App() {
  const [advice, setAdvice] = useState(
    "Hello, click button to get some life advice"
  );
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((e) => e + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div className="App">
      <h1>{advice}</h1>
      <button onClick={getAdvice}>set advice</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p>You have read {props.count} advices so far!</p>
  )
}