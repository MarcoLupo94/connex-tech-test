import React from 'react';
import { getMetrics, getTime } from './apiService';
import { calculateTimeDifference, loadMetrics, loadTime } from './loader';

const mockFn = jest.fn();
const mockFn2 = jest.fn();

const mockRef: React.MutableRefObject<string | number> = { current: 123123 };
const mockSetterString: React.Dispatch<React.SetStateAction<string>> = mockFn;
const mockSetterBool: React.Dispatch<React.SetStateAction<boolean>> = mockFn2;

describe('API tests', () => {
  test('Calling api should fetch data', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: 100 })
      })
    ) as jest.Mock;
    const time = await getTime();
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(time.data).toBe(100);
  });
});
describe('Test loader', () => {
  test('calculateTimeDifference should return right formatted time', () => {
    const difference = calculateTimeDifference(
      Date.now(),
      mockSetterString,
      mockSetterBool
    );
    expect(difference).toMatch(/^\d+:\d{2}:\d{2}$/);
  });

  test('loadTime should set current time with data from fetch', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({ properties: { epoch: { description: 100 } } })
      })
    ) as jest.Mock;

    const res = await loadTime(getTime, mockRef);
    expect(mockRef.current).toBe(100);
    expect(res.properties.epoch.description).toBe(100);
  });
  test('loadTime should return error message', async () => {
    global.fetch = jest.fn(() =>
      Promise.reject({
        json: () => Promise.reject({ error: 100 })
      })
    ) as jest.Mock;

    await loadTime(getTime, mockRef);
    expect(mockRef.current).toBe('Something went wrong...');
  });
});
