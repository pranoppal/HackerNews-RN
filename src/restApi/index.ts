import axios from 'axios';

export const BASE_URL = 'https://hacker-news.firebaseio.com/v0/';
export const newNewsUrl = `${BASE_URL}newstories.json`;
export const topNewsUrl = `${BASE_URL}topstories.json`;
export const bestNewsUrl = `${BASE_URL}beststories.json`;
export const newsDetail = `${BASE_URL}item/`;

export const fetchNewsDetailAPI = async storyId => {
  const result = await axios.get(`${newsDetail + storyId}.json`);

  return result.data;
};

export const fetchNewNewsListAPI = async () => {
  const result = await axios.get(newNewsUrl);

  return result.data;
};

export const fetchTopNewsListAPI = async () => {
  const result = await axios.get(topNewsUrl);

  return result.data;
};

export const fetchBestNewsListAPI = async () => {
  const result = await axios.get(bestNewsUrl);

  return result.data;
};
