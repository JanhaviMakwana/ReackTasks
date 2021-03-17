import movies from './movies.json';

export default class GetMovies {
    static getMovies() {
        return movies ? movies : [];
    }
}