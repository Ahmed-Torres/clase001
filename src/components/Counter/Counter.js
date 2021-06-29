import {useState} from "react";
const Counter = () => {
    //hooks(funciones)-->siempre empiezan con : use
    //getter, setter
    //esto seria asi, const[getter, setter] = useState(initialValue) 
    //que puedo inicializar? una lista, un formulario, lo que sea,
    const [counter, setCounter] = useState(0);

    const handleCounter = (operation) => {
        if(operation === "+"){
            setCounter(counter +1);
            return;
        }
        setCounter(counter - 1);
        console.log("handle counter");
    };
    //toda la logica a antes del return, estado, funciones,etc.
    return (
        <div> 
            <h3>Contador: {counter}</h3>
            <button onClick={() => handleCounter("+")}>+</button>
            <button onClick={() => handleCounter("-")}>-</button>
            {/**estas callback sirven para que la funcion no se ejecute automaticamente
             * de esta manera, llamando la funcion anonima, estamos esperando que pase algo
             * que alguien la llame, una accion. luego de qe se hace click en los botones, se ejecuta
             */}
        </div>
     );
}
//eventos sinteticos, react le pega al dom irtual.
 
export default Counter;