import { useEffect, useState } from 'react';
import { getMetrics, getTime } from './utils/apiService';
import './App.css';
import MetricsComponent from './components/MetricsComponent';
import TimeComponent from './components/TimeComponent';

function App() {
  const [time, setTime] = useState('');
  const [metrics, setMetrics] = useState('');

  useEffect(() => {
    Promise.all([getMetrics(), getTime()])
      .then((values) => {
        setTime(values[0].data);
        setMetrics(values[1].data);
      })
      .catch((error) => {
        setTime('Something went wrong...');
        setMetrics('Something went wrong...');
      });
  }, []);

  return (
    <div className="App">
      <TimeComponent time={time} />
      <MetricsComponent metrics={metrics} />
    </div>
  );
}

export default App;
