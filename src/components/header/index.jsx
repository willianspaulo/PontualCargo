import { Link } from "react-router-dom";
import LogoBranca from './../../assets/images/logo-branca.svg'

export default function Header() {
  return <>
    <header className="header_section">
      <div className="container">
        <div className='row'>
          <div className='col-md-9 offset-md-3 text-right text-white'>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div style={{ padding: '5px 30px 0 0', fontSize: '14px' }}>
                <span className='fa fa-phone'></span> &nbsp;&nbsp;(61) 2192-1200
              </div>
              <div style={{ padding: '5px 100px 0 0', fontSize: '14px' }}>
                <span className='fa fa-map-marker'></span> &nbsp;&nbsp;Aeroporto BSB - Hangar Pontual
              </div>
              <button type="button" className="btn btn-outline-light btn-sm">Seja Cliente</button> &nbsp;
              <button type="button" className="btn btn-outline-light btn-sm">Login</button>
            </div>
          </div>
        </div>
        <hr />
        <nav className="navbar navbar-expand-lg custom_nav-container" style={{ height: '60px' }}>
          <Link to="/" className="navbar-brand"><img src={LogoBranca} alt="Logo Branca" height="66px" /></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/sobre" className="nav-link">A Pontual</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="shop.html">Produtos e Serviços</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="blog.html">Logistica</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="">
                  <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                </a>
              </li>
              <form className="form-inline justify-content-center">
                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form> */}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  </>
}