import Tracking from './../../components/tracking'
import Doubt from './../../components/doubt'

import Slider1Img from './../../assets/images/photo1.jpg'
import Slider2Img from './../../assets/images/photo2.jpg'
import Slider3Img from './../../assets/images/photo3.jpg'
import DoorToDoorImg from './../../assets/images/door-to-door.jpg'

import Footer from '../../components/footer'
import Header from '../../components/header'

export default function Home() {
  return <div className="App">
    <div className="hero_area">
      <Header />
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

    <Footer />
    {/* <!-- end info section --> */}

    {/* <!-- footer section --> */}

    {/* <!-- footer section --> */}
  </div>
}