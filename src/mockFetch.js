import characterList from "./characterList";

const mockFetch = (type) => (id) => {
  const randomFetchTimeout = (Math.random() * 4000) + 1000  // between 1 and 5 seconds
  return new Promise(resolve => {
    const data = characterList.find(char => char.id === id)[type];
    setTimeout(() => {
      resolve(data);
    }, randomFetchTimeout);
  });
};

export const fetchNameById = mockFetch('name');
export const fetchQuoteById = mockFetch('quote');
export const fetchImageById = mockFetch('img');
export const fetchAboutById = mockFetch('about');

