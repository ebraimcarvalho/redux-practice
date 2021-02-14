const initialState = {
  user: 'Ebraim',
  job: 'Front-End Developer',
  salary: 48000
}

function user(state = initialState, action) {
  console.log('user module: ', action)
  switch (action.type) {
    case 'UP_SALARY':
      return {
        ...state,
        salary: state.salary + action.payload.amount
      }
    case 'DOWN_SALARY':
      return {
        ...state,
        salary: state.salary - action.payload.amount
      }
    default:
      return state;
  }
}

export default user;