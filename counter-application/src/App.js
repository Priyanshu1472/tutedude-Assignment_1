import './App.css';
import CounterClass from './components/CounterClass';
import CounterFunction from './components/CounterFunction';

function App() {
  return (
    <>
      <div>
        <div>
          <h1 className="heading">Assignment-2 Counter Application</h1>
          <CounterClass />
          <CounterFunction />
        </div>
      </div>
    </>
  );
}

export default App;
