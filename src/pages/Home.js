import '../css/Home.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Logo from '../ToolLogo.png';

function Home(props){
var light_dark= props.isDark?"dark":"light";
let home = (
  <>
<nav className={`navbar navbar-expand-lg navbar-${light_dark} bg-${light_dark} sticky-top`} >
  <div className="container d-flex justify-content-between">
  <div className="d-flex align-items-center">
  <img width="50px" height="50px" src={Logo} className="img-fluid" alt=""/>
    <span className="navbar-brand">
    {props.title}
    </span>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/changelogs">Changelogs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about">About</Link>
        </li>
      </ul>
 <div className='d-flex'>
 <label htmlFor='flexSwitchCheckDefault' className={`text-${light_dark==="dark"?"light":"dark"}`}>Darkmode</label>
  <div className="form-check form-switch mx-1">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.darkModeState} checked={props.isDark} />
  </div>
  </div>
</div>
</div>
</nav>
 </>
);

return home;
}
export default Home;
Home.propTypes={
  title: PropTypes.string
}
Home.defaultProps={
  title: 'Nav Title'
}
