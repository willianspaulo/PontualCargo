import Tracking from './../../components/tracking'
import Doubt from './../../components/doubt'

import Slider1Img from './../../assets/images/photo1.jpg'
import Slider2Img from './../../assets/images/photo2.jpg'
import Slider3Img from './../../assets/images/photo3.jpg'
import DoorToDoorImg from './../../assets/images/door-to-door.jpg'
import LogoBranca from './../../assets/images/logo-branca.svg'

export default function Home() {
  return <div className="App">
    <div className="hero_area">
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
            <a className="navbar-brand " href="index.html"> <img src={LogoBranca} alt="Logo Branca" height="66px" /> </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""> </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">A Pontual</a>
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
      <section className="slider_section ">
        <div id="customCarousel1" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {/* <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-md-6 col-lg-5">
                  <div className="detail-box">
                    <h1>
                      Fresh Fruits
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis fugit, sed tempora praesentium commodi error, hic recusandae repudiandae neque ad molestias, atque veritatis labore quae eveniet autem in
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn1">
                        Buy Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-7">
                  <div className="img-box">
                    <img src={Slider3Img} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
            <div className="carousel-item active">
              <div style={{ background: ` green url(${Slider1Img}) no-repeat`, backgroundSize: 'cover' }}></div>
            </div>
            <div className="carousel-item">
              <div style={{ background: ` green url(${Slider2Img}) no-repeat`, backgroundSize: 'cover' }}></div>
            </div>
            <div className="carousel-item">
              <div style={{ background: ` green url(${Slider3Img}) no-repeat`, backgroundSize: 'cover' }}></div>
            </div>
          </div>
          <div className="carousel_btn-box container">
            <a className="carousel-control-prev" href="#customCarousel1" role="button" data-slide="prev">
              <i className="fa fa-chevron-left" aria-hidden="true"></i>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#customCarousel1" role="button" data-slide="next">
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
      <div className='elementor-background-overlay'></div>
    </div>

    <section className="about_section layout_padding">
      <div className="container">
        <div className="detail-box">
          <div className="heading_container heading_center">
            <h2 className='text-uppercase'>
              Serviço Porta a Porta
            </h2>
          </div>
          <p>
            O sistema Porta a Porta abrange toda a linha de serviços Pontual. Seja carga ou encomenda,
            coletamos na sua porta e entregamos na porta do destinatário. Garantia, presteza, agilidade, qualidade e
            confiabilidade são predicados que só uma empresa com tradição no mercado como a Pontual pode proporcionar.
          </p>
        </div>
        <div className="col-md-9 mx-auto px-0">
          <div className="img-box">
            <img src={DoorToDoorImg} alt="" />
          </div>
          <div className="btn-box">
            <a href="">
              Ler Mais
            </a>
          </div>
        </div>
      </div>
    </section>

    <Tracking />

    <Doubt />

    <section className="info_section ">
      <div className="info_container ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <h6>
                A Pontual
              </h6>
              <p>Empresa especializada no transporte de cargas e encomendas expressas, por via aérea, terreste e marítima, nacional e internacional.</p>
              <p>Fundada em 1982, é membro da IATA (International Air Transport Association) sob registro nº 57-1-0054, organismo regulador e fiscalizador do transporte aéreo internacional.</p>
            </div>
            <div className="col-md-6 col-lg-4 offset-lg-2">
              <h6>
                Matriz
              </h6>
              <div className="info_link-box">
                <a href="https://goo.gl/maps/BLKxq2C3HfnWHrqZ8" target="_blank">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span> Aeroporto Internacional de Brasília - TECA Hangar Pontual - Brasília/DF - CEP: 71608-900 </span>
                </a>
                <a href="tel:+556121921200">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>+55 (61) 2192-1200</span>
                </a>
                <a href="mailto:sac@pontualcargo.com.br">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>sac@pontualcargo.com.br</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- end info section --> */}

    {/* <!-- footer section --> */}
    <footer className=" footer_section">
      <div className="container">
        <p>{new Date().getFullYear()} &copy; Pontual Cargo</p>
      </div>
    </footer>
    {/* <!-- footer section --> */}
  </div>
}