import './App.css';
import Pantalla from './Componentes/Pantalla';
import Boton from './Componentes/Boton';
import Clear from './Componentes/Clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import Calcular from './Componentes/Calcular';

function App() {

  const[input, setInput] = useState('');

  function calcular(){
    const regex = /^[+|-]?[0-9]+([.][0-9]+)?[+|-|*|/][0-9]+([.][0-9]+)?$/
    const regex2 = /^[0][+|-]?[0-9]+([.][0-9]+)?[+|-|*|/][0-9]+([.][0-9]+)?$/
    if(regex.test(input)){
      setInput(evaluate(input));
    }
    else if(regex2.test(input)){
      alert('Favor de omitir el cero que esta delante de la operación');
    }
    else{
      alert('Favor de utilizar un calculo válido');
    }
  }

  return (
    <div className="App">
      <div className='contenedor'>
        <Pantalla>{input}</Pantalla>
        <div className='fila'>
          <Boton contador={setInput} numero={1}>1</Boton>
          <Boton contador={setInput} numero={2}>2</Boton>
          <Boton contador={setInput} numero={3}>3</Boton>
          <Boton contador={setInput} numero={'+'}>+</Boton>
        </div>
        <div className='fila'>
          <Boton contador={setInput} numero={4}>4</Boton>
          <Boton contador={setInput} numero={5}>5</Boton>
          <Boton contador={setInput} numero={6}>6</Boton>
          <Boton contador={setInput} numero={'-'}>-</Boton>
        </div>
        <div className='fila'>
          <Boton contador={setInput} numero={7}>7</Boton>
          <Boton contador={setInput} numero={8}>8</Boton>
          <Boton contador={setInput} numero={9}>9</Boton>
          <Boton contador={setInput} numero={'*'}>*</Boton>
        </div>
        <div className='fila'>
          <Calcular calculo={calcular}>=</Calcular>
          <Boton contador={setInput} numero={0}>0</Boton>
          <Boton contador={setInput} numero={'.'}>.</Boton>
          <Boton contador={setInput} numero={'/'}>/</Boton>
        </div>
        <Clear limpiar={()=> setInput('')}>Clear</Clear>
      </div>
    </div>
  );
}

export default App;
