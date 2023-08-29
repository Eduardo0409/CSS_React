
import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 15;

  const [name] = useState ("Eduardo");
  const [last] = useState ("Alves");

  const redTtile = true;

  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>

       {/* CSS de componente */}
      <MyComponent />
      <p>blablabla</p>
      <p className="my-comp-paragraph">BLABLABLA</p>

      {/* inline em CSS*/}
      <p style={{color: "magenta", padding: "25px", borderTop: "2px solid red" }}>Este elemento foi estilizado de forma inline</p>

      {/* CSS inline dinamico*/}
      <h2 style={n < 10 ? ({color: "purple"}) : ({ color: "pink"})}> CSS Dinamico</h2>
      <h2 style={n > 10 ? ({color: "purple"}) : ({ color: "pink"})}> CSS Dinamico</h2>
      <h2 style={name === "Eduardo" ? {color: "green", backgroundColor: "#000"} 
      : 
      {color: "yellow", backgroundColor: "#000"} }>
        Alou
      </h2>
      <h2 style={last === "Alves" ? ({color: "blue", backgroundColor: "white"}) 
      : 
      ({color: "magenta", backgroundColor: "black"})}>
        PELO AMOR DE DEUS FUNFA
      </h2>

      {/* Classe dinamica */}
      <h2 className={redTtile ? "red-title" : "title"}>
        Este titulo vai ter classe dinamica
      </h2>

      {/* CSS Modules*/}
      <Title />
      <h2 className='my_title'>Testando</h2>
    </div>
  );
}

export default App;
