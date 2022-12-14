import { useEffect, useState } from 'react';
import { getMetrics, getTime } from './utils/apiService';
import './App.css';
import MetricsComponent from './components/MetricsComponent';
import TimeComponent from './components/TimeComponent';

function App() {
  const [time, setTime] = useState('');
  const [metrics, setMetrics] = useState('');

  const loadData = () => {
    Promise.all([getMetrics(), getTime()])
      .then((values) => {
        setMetrics(values[0].data);
        setTime(values[1].data);
      })
      .catch((error) => {
        setTime('Something went wrong...');
        setMetrics('Something went wrong...');
      });
  };

  useEffect(() => {
    loadData();
    setInterval(loadData, 30000);
  }, []);

  return (
    <div className="App">
      <TimeComponent time={time} />
      <MetricsComponent metrics={metrics} />
    </div>
  );
}

export default App;
