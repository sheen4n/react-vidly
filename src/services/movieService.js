import http from './httpService';

const apiEndpoint = '/movies';

function movieUrl(id) {
  return `${apiEndpoint}/${id}`;
}

const getMovies = () => http.get(apiEndpoint);

const deleteMovie = (movieId) => http.delete(movieUrl(movieId));

const getMovie = (movieId) => http.get(movieUrl(movieId));

const saveMovie = async (movie) => {
  try {
    if (movie._id) {
      const body = { ...movie };
      delete body._id;
      return await http.put(movieUrl(movie._id), body);
    }
    return await http.post(apiEndpoint, movie);
  } catch (error) {
    throw new Error(error.message);
  }
};

export { saveMovie, getMovies, deleteMovie, getMovie };
