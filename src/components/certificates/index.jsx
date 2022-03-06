import Img_iata from './../../assets/images/iata.jpg'
import Img_cra from './../../assets/images/cradf.jpg'
import Img_ibram from './../../assets/images/ibramdf.jpg'
import Img_anvisa from './../../assets/images/anvisa.jpg'
import Img_antt from './../../assets/images/antt.jpg'

import './../../assets/styles/css/certificates.min.css'

export default function Certificates() {
  return <>
    <section className="certificates ">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="title-page">Principais Registros e Certificados</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-md-2 text-center offset-md-1">
            <img src={Img_iata} alt="Registo e Certificado" />
          </div>
          <div className="col-md-2 text-center">
            <img src={Img_cra} alt="Registo e Certificado" />
          </div>
          <div className="col-md-2 text-center">
            <img src={Img_ibram} alt="Registo e Certificado" />
          </div>
          <div className="col-md-2 text-center">
            <img src={Img_anvisa} alt="Registo e Certificado" />
          </div>
          <div className="col-md-2 text-center">
            <img src={Img_antt} alt="Registo e Certificado" />
          </div>
        </div>
      </div>
    </section>
  </>
}