import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/actions/counter';
import { upSalary, downSalary } from './redux/actions/user';

function App() {
  const user = useSelector(state => state.user);
  const counter = useSelector(state => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello World! You are login as {user.user}</h1>
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <hr />
      <h3>Job position: {user.job} | Salary: {user.salary}</h3>
      <button onClick={() => dispatch(upSalary(1000))}>Up salary +1000</button>
      <button onClick={() => dispatch(downSalary(1000))}>down salary -1000</button>
    </div>
  );
}

export default App;
