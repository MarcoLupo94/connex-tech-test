import { fetcher } from './fetcher';

export const getTime = async () => {
  const response = await fetcher(
    'http://localhost:8080/time',
    'GET',
    'mysecrettoken'
  );
  return await response.data.json();
};

export const getMetrics = async () => {
  const response = await fetcher(
    'http://localhost:8080/metrics',
    'GET',
    'mysecrettoken'
  );

  return await response.data.text();
};
