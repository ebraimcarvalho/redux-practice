const initialState = {
  counter: 0
}

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1
      }  
    case 'DECREMENT': 
      if(state.counter > 0) {
        return {
          ...state,
          counter: state.counter - 1
        }
      }
      break;
    default:
      break;
  }
  return state;
}