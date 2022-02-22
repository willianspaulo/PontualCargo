import { useState } from 'react'
import Tracking from './components/tracking'
import Doubt from './components/doubt'

import Slider1Img from './assets/images/photo1.jpg'
import Slider2Img from './assets/images/photo2.jpg'
import Slider3Img from './assets/images/photo3.jpg'
import AboutImg from './assets/images/about-img.jpg'
import DoorToDoorImg from './assets/images/door-to-door.jpg'
import F1Img from './assets/images/f1.png'
import F2Img from './assets/images/f2.png'
import F3Img from './assets/images/f3.png'
import F4Img from './assets/images/f4.png'
import B1Img from './assets/images/b1.jpg'
import B2Img from './assets/images/b2.jpg'
import B3Img from './assets/images/b3.jpg'
import ClientImg from './assets/images/client.jpg'
import LogoBranca from './assets/images/logo-branca.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
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
              <div className="col-md-6 col-lg-3">
                <h6>
                  ABOUT US
                </h6>
                <p>
                  Nostrum praesentium, animi pariatur eaque harum amet necessitatibus unde aliquam molestias, sapiente cumque aspernatur officia molestiae possimus atque
                </p>
              </div>
              <div className="col-md-6 col-lg-3">
                <h6>
                  CONTACT US
                </h6>
                <div className="info_link-box">
                  <a href="">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span> Location </span>
                  </a>
                  <a href="">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>+01 12345678901</span>
                  </a>
                  <a href="">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span> demo@gmail.com</span>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <h6>
                  Our Products
                </h6>
                <p>
                  Sapiente quidem fugit sed incidunt aut quia eos consectetur, iste eius nobis ullam voluptatem esse mollitia amet. Quibusdam eos inventore neque explicabo aliquid quos
                </p>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="info_form ">
                  <h6>
                    Newsletter
                  </h6>
                  <form action="#">
                    <input type="email" placeholder="Enter your email" />
                    <button>
                      Subscribe
                    </button>
                  </form>
                </div>
                <div className="social_container">
                  <div className="social_box">
                    <a href="">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-youtube" aria-hidden="true"></i>
                    </a>
                  </div>
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
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By
            <a href="https://html.design/">Free Html Templates</a>
          </p>
        </div>
      </footer>
      {/* <!-- footer section --> */}
    </div>
  )
}

export default App
