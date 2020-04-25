import axios from 'axios';

export const apiUrl = 'https://swapi.graph.cool/';

export async function getAllPeople(resultsHandler, errorHandler, loadingHandler) {
  loadingHandler && loadingHandler(true);
  try {
    const resp = await axios.post(apiUrl, JSON.stringify({
      query: `{
        allPersons{
          name,
          birthYear,
          height,
          gender,
          films{
            title,
          }
        },
        allFilms{
          title,
          producers,
          director,
          releaseDate,
          openingCrawl
        }
      }`
    }), { headers: { 'Content-Type': 'application/json' } });
    resultsHandler && resultsHandler({ people: resp.data.data.allPersons, films: resp.data.data.allFilms });
  } catch (err) {
    errorHandler && errorHandler(err.message);
  } finally {
    loadingHandler && loadingHandler(false);
  }
}

