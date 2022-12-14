import { useEffect, useRef, useState } from 'react';
import { getMetrics, getTime } from './utils/apiService';
import './App.css';
import MetricsComponent from './components/MetricsComponent';
import TimeComponent from './components/TimeComponent';
import moment from 'moment';

function App() {
  const time = useRef<number | string>(0);
  const [metrics, setMetrics] = useState('');
  const [timeDifference, setTimeDifference] = useState('');

  const loadData = () => {
    Promise.all([getMetrics(), getTime()])
      .then((values) => {
        setMetrics(values[0].data);
        time.current = values[1].data.properties.epoch.description;
      })
      .catch((error) => {
        time.current = 'Something went wrong...';
        setMetrics('Something went wrong...');
      });
  };
  const calculateTimeDifference = () => {
    if (typeof time.current !== 'string') {
      const difference = moment(Date.now() - time.current)
        .utc()
        .format('HH:mm:ss');
      setTimeDifference(difference);
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
      <TimeComponent time={time.current} timeDifference={timeDifference} />
      <MetricsComponent metrics={metrics} />
    </div>
  );
}

export default App;
