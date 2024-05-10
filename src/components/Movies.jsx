import Movie from "./Movie";
import Alert from "./Alert";

export default function Movies(props) {
  const {movies = []} = props;

  return (
    <div className="movies grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 justify-center">
      {
        movies.length ?
        movies.map(movie => <Movie key={movie.imdbID} {...movie} />) :
        <Alert />
      }
    </div>
  );
}