const convertTimeToString = (epochTime: number) => {
  return new Date(epochTime).toISOString().slice(11, 19);
};

export const calculateTimeDifference = (
  time: number | string,
  setTimeDifference: React.Dispatch<React.SetStateAction<string>>,
  setLoadingTime: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (typeof time !== 'string') {
    const epoch = Date.now() - time;
    const difference = convertTimeToString(epoch);

    setTimeDifference(difference);
    setLoadingTime(false);
    return difference;
  }
  return;
};
export const loadMetrics = async (
  fetcher: () => Promise<any>,
  setMetrics: React.Dispatch<React.SetStateAction<string>>,
  setLoadingMetrics: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const res = await fetcher();
    setMetrics(res);
    setLoadingMetrics(false);
    return res;
  } catch (error) {
    setMetrics('Something went wrong...');
    return 'Something went wrong...';
  }
};
export const loadTime = async (
  fetcher: () => Promise<any>,
  time: React.MutableRefObject<string | number>
) => {
  try {
    const res = await fetcher();
    time.current = res.properties.epoch.description;
    return res;
  } catch (error) {
    time.current = 'Something went wrong...';
    return 'Something went wrong...';
  }
};
