const initialState = {
  user: 'Ebraim Carvalho',
  job: 'Front-End Developer',
  salary: 2000
}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'UP_SALARY':
      return {
        ...state,
        salary: state.salary + action.payload.amount
      }
    case 'DOWN_SALARY':
      if (state.salary > 0) {
        return {
          ...state,
          salary: state.salary - action.payload.amount
        }
      }
      break;
    default:
      break;
  }
  return state;
}