function Footer () {
  return (
    <footer className="page-footer deep-purple darken-4">
      <div className="container">
        <div className="row center-align">
            <h5 className="white-text">Simple Portfolio project created with React library.</h5>
            <p className="grey-text text-lighten-4">
              Visit my <a className="grey-text text-lighten-4 btn" href="#">Repo</a> on GitHub.
            </p>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container center-align">
          © {new Date().getFullYear()} Copyright Text
        </div>
      </div>
    </footer>
  );
}

export {Footer}