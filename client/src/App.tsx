import { useEffect, useRef, useState } from 'react';
import { getMetrics, getTime } from './utils/apiService';
import './App.css';
import MetricsComponent from './components/MetricsComponent';
import TimeComponent from './components/TimeComponent';
import moment from 'moment';
import SpinnerComponent from './components/SpinnerComponent';

function App() {
  const time = useRef<number | string>(0);
  const [metrics, setMetrics] = useState('');
  const [timeDifference, setTimeDifference] = useState('');
  const [loadingMetrics, setLoadingMetrics] = useState(false);
  const [loadingTime, setLoadingTime] = useState(false);

  const loadData = () => {
    setLoadingMetrics(true);
    setLoadingTime(true);

    loadMetrics();
    loadTime();
  };
  const loadMetrics = async () => {
    try {
      const res = await getMetrics();
      setMetrics(res);
      setLoadingMetrics(false);
    } catch (error) {
      setMetrics('Something went wrong...');
    }
  };
  const loadTime = async () => {
    try {
      const res = await getTime();
      time.current = res.properties.epoch.description;
    } catch (error) {
      time.current = 'Something went wrong...';
    }
  };
  const calculateTimeDifference = () => {
    if (typeof time.current !== 'string') {
      const difference = moment(Date.now() - time.current)
        .utc()
        .format('HH:mm:ss');
      setTimeDifference(difference);
      setLoadingTime(false);
    }
    return;
  };

  useEffect(() => {
    loadData();
    setInterval(loadData, 30000);
    setInterval(calculateTimeDifference, 1000);
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
