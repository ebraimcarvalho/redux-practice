import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CounterActions from './redux/actions/counter';
import * as UserActions from './redux/actions/user';

function App({increment, decrement, upSalary, downSalary}) {
  const user = useSelector(state => state.user)
  const counter = useSelector(state => state.counter.counter)

  return (
    <div className="App">
      <h1>Hello World! You are login as {user.user}</h1>
      <p>Counter: {counter}</p>
      <button onClick={() => increment()}>+1</button>
      <button onClick={() => decrement()}>-1</button>
      <hr />
      <h3>Job position: {user.job} | Salary: {user.salary}</h3>
      <button onClick={() => upSalary(1000)}>Up salary +1000</button>
      <button onClick={() => downSalary(1000)}>down salary -1000</button>
    </div>
  );
}

// const mapDispatchToProps = (dispatch) => 
//   bindActionCreators({ ...CounterActions,  ...UserActions}, dispatch);
// or
// {
//   return {
//     increment: () => dispatch(CounterActions.increment()),
//     decrement: () => dispatch(CounterActions.decrement()),
//     upSalary: (value) => dispatch(UserActions.upSalary(value)),
//     downSalary: (value) => dispatch(UserActions.downSalary(value))
//   }
// }

const mapStateToProps = (state) => {
  return {
    counter: state.counter.counter,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({...CounterActions, ...UserActions}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
