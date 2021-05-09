import  {Movie} from "./Movie";

function Movies (props) {
  const {movies = [], error} = props;

  return (
    <ul className={error ? "no-movies" : "movies"}>
      {movies.length
        ? movies.map(movie => {
            return <Movie key={movie.imdbID} {...movie} />
          })
        : <Movie error={error} />
      }
    </ul>
  );
}

export {Movies}