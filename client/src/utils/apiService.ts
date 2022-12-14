import dotenv from 'dotenv';
import { fetcher } from './fetcher';
dotenv.config();
const { REACT_APP_API_URL, REACT_APP_TOKEN } = process.env;

export const getTime = async () => {
  return await fetcher(REACT_APP_API_URL + 'time', 'GET', REACT_APP_TOKEN);
};
