import { fetchNameById, fetchQuoteById, fetchImageById, fetchAboutById } from "./mockFetch";

const fetchCharacterData = async (characterId) => {
  const fetchPromises = [
    fetchNameById(characterId),
    fetchQuoteById(characterId),
    fetchImageById(characterId),
    fetchAboutById(characterId),
  ];
  const [name, quote, image, about] = await Promise.all(fetchPromises);
  return { name, quote, image, about };
}

export default fetchCharacterData;