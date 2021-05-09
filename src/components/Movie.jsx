function Movie (props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
    error
  } = props;

  return (
      <li className={error ? "" : "card"}>
        {error ? <h2>{error}</h2>
          : (
            <>
              <div className="card-image">
                {poster === "N/A"
                  ? <img src={`https://via.placeholder.com/300x400/1a237e/ffffff?text=${title}`}/>
                  : <img src={poster}/>
                }
              </div>
              <div className="card-content center-align">
                <p className="card-title">{title}</p>
                <p><strong>{year}</strong></p>
                <p>{type}</p>
              </div>
            </>
          )
        }
      </li>
  );
}

export {Movie}