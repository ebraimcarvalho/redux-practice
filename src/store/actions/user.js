export function upSalary(value) {
  return {
    type: 'UP_SALARY',
    payload: {
      amount: value
    }
  }
}

export function downSalary(value) {
  return {
    type: 'DOWN_SALARY',
    payload: {
      amount: value
    }
  }
}