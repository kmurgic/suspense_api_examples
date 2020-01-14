import { fetchNameById, fetchQuoteById, fetchImageById, fetchAboutById } from "./mockFetch";

const fetchCharacterData = (characterId) => {
  const namePromise = fetchNameById(characterId);
  const quotePromise = fetchQuoteById(characterId);
  const imagePromise = fetchImageById(characterId);
  const aboutPromise = fetchAboutById(characterId);
  return {
    id: characterId,
    name: wrapPromise(namePromise),
    quote: wrapPromise(quotePromise),
    image: wrapPromise(imagePromise),
    about: wrapPromise(aboutPromise),
  };
};


// The React Docs said not to copy and paste this into your code
// But I copy/pasted anyway
// It said real implementations can be significantly more complex
// But my implementation is neither real nor complex, so it's okay
// Code comes from: https://codesandbox.io/s/frosty-hermann-bztrp
function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
};

export default fetchCharacterData;
