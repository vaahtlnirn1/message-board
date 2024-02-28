import axios from 'axios';

const baseURL = 'http://localhost:3001';

export const fetchChannels = () => axios.get(`${baseURL}/channels`);