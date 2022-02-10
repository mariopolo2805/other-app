import React, { useReducer } from 'react';

//definimos un reducer que recibirá el state y el action
const reducer = (state, action) => {
  console.log(action.payload);

  if (action.tipo === 'aumentarContador') {
    const newState = {
      count: state.count + 1
    };
    return newState;
  } else if (action.tipo === 'decrementarContador') {
    const newState = {
      count: state.count - 1
    };
    return newState;
  } else if (action.tipo === 'resetear') {
    return initialState;
  } else {
    return state;
  }
  // switch (action.tipo) {
  //   case 'aumentarContador': return { count: state.count + 1 };
  //   case 'decrementarContador': return { count: state.count - 1 };
  //   case 'resetear': return initialState
  //   default: return state;
  // }
}

// definimos un valor inicial para el store
const initialState = {
  count: 0
};

const CounterRedux = () => {
  //state es el valor del store, y dispatch nos permite disparar acciones
  const [state, dispatch] = useReducer(reducer, initialState);// Nuestro reducer y el valor inicial

  return (
    <div>
      <h1>{ state.count }</h1>
      <button onClick={() => dispatch({ tipo: 'aumentarContador', payload: 'hola' })}>Aumentar</button>
      <button onClick={() => dispatch({ tipo: 'decrementarContador' })}>Decrementar</button>
      <button onClick={() => dispatch({ tipo: 'resetear' })}>Reset</button>
    </div>);
}

export default CounterRedux;
