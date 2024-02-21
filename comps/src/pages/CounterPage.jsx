// import { useState } from 'react';
import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';
import produce from 'immer';
// import useCounter from '../hooks/use-counter';

// variables as action types
const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = 'add';
const DECREMENT_COUNT = 'decrement';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';

// this is a reducer function that takes in the current state and an action
// Action -> anything that I provided to the dispatch function

// if (action.type === INCREMENT_COUNT) {
//   return {
//     ...state,
//     count: state.count + 1,
//   }
// }

// if (action.type === SET_VALUE_TO_ADD) {
//   return {
//     ...state,
//     valueToAdd: action.payload
//   }
// }

// everything commented below is the way to do a normal reducer (without immer)
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      // return {
      //   ...state,
      //   count: state.count + 1
      // }
      state.count = state.count + 1;
      return;
    case SET_VALUE_TO_ADD:
      // return {
      //   ...state,
      //   valueToAdd: action.payload
      // }
      state.valueToAdd = action.payload;
      return;
    case DECREMENT_COUNT:
      // return {
      //   ...state,
      //   count: state.count - 1
      // }
      state.count = state.count - 1;
      return;
    case ADD_VALUE_TO_COUNT:
      // return {
      //   ...state,
      //   count: state.count + state.valueToAdd,
      //   valueToAdd: 0
      // }
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    default:
      throw new Error('Unexpected action type' + action.type);
        // or return state
  }
}

const CounterPage = ({ initialCount }) => {
  // const { count, increment } = useCounter({ initialCount })

  // A way without custom hook
  // and w/ useReducer
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  // useReducer parameters: reducer, initial state object
  // in useReducer all state for the whole component defined in one object
  // otherwise in useState, each state is defined separately
  const [state, dispatch] = useReducer(produce(reducer, {
    count: initialCount,
    valueToAdd: 0
  }))

  const increment = () => {
    // setCount(count + 1);
    // dispatch recieves an action object that has a type property
    // because we need specify the type of action so that the reducer knows what to do
    // (what state to change, how to change it, etc.)
    dispatch({
      type: INCREMENT_COUNT
    })
  };

  const decrement = () => {
    // setCount(count - 1);
    dispatch({
      type: DECREMENT_COUNT
    })
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    // setValueToAdd(value);

    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setCount(count + valueToAdd);
    // setValueToAdd(0);

    dispatch({
      type: ADD_VALUE_TO_COUNT
    })
  }

  return (
    <Panel className='m-3'>
      <h1 className='text-lg'>Count is {state.count}</h1>
      <div className='flex flex-row'>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ''}
          onChange={handleChange}
          type='number'
          className='p-1 m-3 bg-gray-50 border border-gray-300'
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
};

export default CounterPage;
