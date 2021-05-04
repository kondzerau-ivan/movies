import  {Movie} from "./Movie";

function Movies (props) {
  const {movies} = props;

  return (
    <ul className="movies">
      {movies.map(movie => {
        return <Movie key={movie.imdbID} {...movie} />
      })}
    </ul>
  );
}

export {Movies}