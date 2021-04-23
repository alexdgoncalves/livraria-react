import { useState } from "react";

function App() {
  // useState é um array
  // primeiro parametro é a var que sera atribuido/ alterado o valor
  // ja o segundo é uma função, ela a qual deve ser chamada para fazer a alteração do primeiro parametro
  const [contador, setContador] = useState(0);
  function increment() {
    console.log("somando 1");
    setContador(contador + 1);
  }
  function remove() {
    console.log("removendo");
    setContador(contador - 1);
  }
  return (
    <div className="App">
      <p>contagem: {contador}</p>
      <button onClick={increment}>adicionar 1</button>
      <button onClick={remove}>remover 1</button>
    </div>
  );
}

export default App;
