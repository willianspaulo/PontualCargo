import Footer from "../../components/footer";
import Header from "../../components/header";
import Img_iata from './../../assets/images/iata.jpg'
import Img_cra from './../../assets/images/cradf.jpg'
import Img_ibram from './../../assets/images/ibramdf.jpg'
import Img_anvisa from './../../assets/images/anvisa.jpg'
import Img_antt from './../../assets/images/antt.jpg'

import './../../assets/styles/css/doubt.min.css'
import Certificates from "../../components/certificates";

export default function Services() {
  return <>
    <Header />
    <section className="blog_section mb-150">
      <div className="container mb-50">
        <h2 className="title-page">Produtos e Serviços <br /> <small>Se sua carga ou encomenda tem hora para chegar, é melhor usar um serviço PONTUAL</small></h2>

        <div className="row">
          <div className="col-md-6 col-lg-4 mx-auto">
            <div className="box">
              <div className="img-box">
                <img src="https://via.placeholder.com/360x276" alt="" />
                {/* <h4 className="blog_date">
                    <span>
                      11 Feb <br/>
                        2021
                    </span>
                  </h4> */}
              </div>
              <div className="detail-box">
                <h5>Porta a Porta</h5>
                <p className="text-justify">
                  O sistema porta a porta tem por objetivo proporcionar ao cliente comodidade e facilidade, pois ao solicitar o serviço de coleta ou entrega, a Pontual envia um veículo para atender ao chamado em seu escritório, residência ou onde for indicado por nosso cliente, inclusive com horário programado.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mx-auto">
            <div className="box">
              <div className="img-box">
                <img src="https://via.placeholder.com/360x276" alt="" />
                {/* <h4 className="blog_date">
                    <span>
                      11 Feb <br/>
                        2021
                    </span>
                  </h4> */}
              </div>
              <div className="detail-box">
                <h5>Pontual Plus</h5>
                <p className="text-justify">
                  Remessas de encomendas de até 2 kg que caibam na embalagem fornecida pela Pontual, com coletas e entregas em horário comercial e atendendo somente as Capitais Brasileiras.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mx-auto">
            <div className="box">
              <div className="img-box">
                <img src="https://via.placeholder.com/360x276" alt="" />
                {/* <h4 className="blog_date">
                    <span>
                      10 Feb <br/>
                        2021
                    </span>
                  </h4> */}
              </div>
              <div className="detail-box">
                <h5>Transporte Internacional</h5>
                <p className="text-justify">Atendemos despachos de malas diplomáticas, serviços de mudanças, despacho aduaneiro, bem como os transportes de pequenas encomendas no segmento denominado Courier, que engloba transportes de documentos e amostras de produtos para qualquer país.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Certificates />
    </section>
    <Footer />
  </>
}