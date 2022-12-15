import { useEffect, useRef, useState } from 'react';
import { calculateTimeDifference, loadMetrics, loadTime } from './utils/loader';
import { getMetrics, getTime } from './utils/apiService';
import './App.css';
import MetricsComponent from './components/MetricsComponent';
import TimeComponent from './components/TimeComponent';
import SpinnerComponent from './components/SpinnerComponent';

function App() {
  const time = useRef<number | string>(0);
  const [metrics, setMetrics] = useState('');
  const [timeDifference, setTimeDifference] = useState('');
  // Spinners
  const [loadingMetrics, setLoadingMetrics] = useState(false);
  const [loadingTime, setLoadingTime] = useState(false);

  const loadData = () => {
    // Show spinners
    setLoadingMetrics(true);
    setLoadingTime(true);

    loadMetrics(getMetrics, setMetrics, setLoadingMetrics);
    loadTime(getTime, time);
  };

  useEffect(() => {
    loadData();
    setInterval(loadData, 30000);
    setInterval(
      () =>
        calculateTimeDifference(
          time.current,
          setTimeDifference,
          setLoadingTime
        ),
      1000
    );
  }, []);

  return (
    <div className="App">
      {loadingTime ? (
        <SpinnerComponent />
      ) : (
        <TimeComponent time={time.current} timeDifference={timeDifference} />
      )}
      {loadingMetrics ? (
        <SpinnerComponent />
      ) : (
        <MetricsComponent metrics={metrics} />
      )}
    </div>
  );
}

export default App;
