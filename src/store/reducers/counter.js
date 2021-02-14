const initialState = {
  counter: 0
};

function counter(state = initialState, action) {
  console.log('hello world!', action.type)
  switch (action.type) {
    case "INCREMENT":
      console.log('entrou', state)
      return { counter: state.counter + 1 }
    case "DECREMENT":
      if(state.counter > 0) {
        return { counter: state.counter - 1 }
      }
      break;
    default:
      break;
  }
  return state;
};

export default counter;