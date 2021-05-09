function Header () {
  return (
    <header>
      <nav className="purple darken-4">
        <div className="container nav-wrapper">
          <a href="#" className="brand-logo">Movies</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="https://github.com/kondzerau-ivan/movies" target="_blank">Repo</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export {Header}