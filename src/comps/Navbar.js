import PropTypes from 'prop-types';
export default function Navbar(props) {

return (

    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About</a>
              </li>
            </ul>
            <div className="btn-group mx-4 mb-1" role="group" aria-label="Basic radio toggle button group">
              <input type="radio" onClick={props.blueTheme} className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/>
              <label className="btn btn-outline-primary rounded-circle text-bg-info p-3 mx-3" for="btnradio1"></label>

              <input type="radio" onClick={props.greyTheme} className="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
              <label className="btn btn-outline-primary rounded-circle text-bg-secondary p-3 mx-1" for="btnradio2"></label>

              <input type="radio"  onClick={props.greenTheme} className="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
              <label className="btn btn-outline-primary rounded-circle text-bg-success p-3 mx-3" for="btnradio3"></label>

            </div>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}


Navbar.prototype={
    title: PropTypes.string.isRequired
}

Navbar.defaultProps={
    title:"set here"
}