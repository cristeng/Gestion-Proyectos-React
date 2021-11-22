import React, {useState, useEffect} from 'react'
import Button from '../components/Button';

const Index = () => {
const [variable1, setVariable1] = useState('hola mundo, soy un estado');
const [valorInput, setValorInput] = useState('');

useEffect(() => {
//console.log("cambió la variable 1 y el valor es", variable1);
console.log("cambió la variable 1 y el valor es", valorInput);
}, [valorInput])

return (
<div>
  <div className='fondo_verde'>
    <span>El valor de la variable es:
    </span>
    {variable1}
  </div>

  <input value={valorInput} onChange={(e)=> {
  setValorInput(e.target.value)
  }}
  type="text"
  placeholder="Ingrese el nuevo valor para la variable"/>

  <button onClick={()=> {
    setVariable1(valorInput)
    }}>Haz clic acá</button>

  <Button />

</div>
);
};

export default Index