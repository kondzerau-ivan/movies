export default function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster
  } = props;

  return (
    <div id={id} className="relative flex flex-col mt-6 mx-auto text-gray-700 bg-white shadow-2xl bg-clip-border rounded-xl w-10/12 sm:w-96 text-center">
      <div className="p-6 text-white">
        {
          poster === 'N/A' ?
            <img className="mx-auto" src={`https://placehold.co/400?text=${title}`} />
           :
           <img className="mx-auto" src={poster} />
        }
      </div>
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {title}
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {year} - {type}
        </p>
      </div>
    </div>
  );
}