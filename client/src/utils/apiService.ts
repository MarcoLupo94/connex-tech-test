import { fetcher } from './fetcher';

export const getTime = async () => {
  return await fetcher(
    'http://localhost:8080/' + 'time',
    'GET',
    'mysecrettoken'
  );
};

export const getMetrics = async () => {
  return await fetcher(
    'http://localhost:8080/' + 'metrics',
    'GET',
    'mysecrettoken'
  );
};
