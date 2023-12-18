import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_sfEhhm8UTRZKj0Qt3Tfr2uDcRbRzbf8M66AujmiObM0NbwYgWkt0snSDhrAp1grg';

const catApi = 'https://api.thecatapi.com/v1';

function fetchBreeds() {
  return axios
    .get(`${catApi}/breeds`)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
}

function fetchCatByBreed(breedId) {
  return axios
    .get(`${catApi}/images/search?breed_ids=${breedId}`)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
}

export { fetchCatByBreed, fetchBreeds };