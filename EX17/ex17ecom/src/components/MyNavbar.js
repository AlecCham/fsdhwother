const MyNavbar = () => {
  return (
      
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                      <a className="nav-link" href="#professional-overview">Professional Overview</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#summary-of-job-experience">Summary of Job Experience</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#experience">Experience</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#education">Education</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#contact-me">Contact Me</a>
                  </li>
              </ul>
          </div>
      </div>
  </nav>
  );
}

export default MyNavbar