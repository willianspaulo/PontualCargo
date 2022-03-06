import Footer from "../../components/footer";
import Header from "../../components/header";
import Img_iata from './../../assets/images/iata.jpg'
import Img_cra from './../../assets/images/cradf.jpg'
import Img_ibram from './../../assets/images/ibramdf.jpg'
import Img_anvisa from './../../assets/images/anvisa.jpg'
import Img_antt from './../../assets/images/antt.jpg'

import './../../assets/styles/css/doubt.min.css'

export default function About() {
  return <>
    <Header />
    <section className="doubt">
      <div className="container">
        <h2 className="title-page">SOBRE A PONTUAL</h2>
        <div className="row">
          <div className="col-md-7 pb-5 pt-5">
            <h3>Quem Somos</h3>
            <div className="text-justify">
              <p>Empresa especializada no transporte de cargas e encomendas expressas, por via aérea, nacional e internacional.</p>
              <p>Fundada em 1982, é membro da IATA (International Air Transport Association) sob registro nº 57-1-0054,
                organismo regulador e fiscalizador do transporte aéreo internacional.</p>
              <p>É portanto, credenciada e homologada pela ANAC (Agência Nacional de Aviação Civil) desde 1985, sob registro nº 1222.</p>
              <p>Possui sua sede no Aeroporto Internacional de Brasília – PJK, Terminal de Logística e Carga Aérea – TECA, Hangar Pontual.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5"></div>
          <div className="col-md-7 offset-md-5 pb-5 pt-5">
            <h3>Missão</h3>
            <p>Transportar Cargas e Encomendas Aéreas Porta a Porta, em âmbito nacional e internacional, oferecendo facilidades, qualidade, presteza e pontualidade, com o comprometimento de todos os seus colaboradores em bem servir.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7 pb-5 pt-5">
            <h3>Visão</h3>
            <p>Ser a maior e melhor transportadora de carga aérea do Brasil, servindo pessoas e empresas, de modo a diminuir a distância entre estas e seus pares.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h3 className="title-page">Uma Empresa Cidadã e Socialmente Responsável</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <ul className="list">
              <li>Manutenção alimentar e escolar para famílias carentes, incluindo moradia.</li>
              <li>Distribuição mensal de cestas básicas destinadas a entidades regulares de projetos continuados e duradouros.</li>
              <li>Projeto do idoso carente, entidade habitacional de amparo aos idosos sem lar e desassistidos, denominada Casa de Amparo que está situada na Cidade de Sete Lagoas -MG, que é mantida através do ICA (Instituto de Contribuição Assistencial), com a participação mensal dos funcionários da empresa.</li>
              <li>Desenvolvimento de políticas contra a discriminação em contratações, salários, promoções, treinamentos e demissões, promovendo a igualdade independente do sexo, raça, idade, portadores de necessidades especiais, orientação sexual ou religiosa, incluindo também ações contrárias ao assédio sexual ou a intimidação. Respeito total às leis e aos direitos humanos.</li>
              <li>Preocupação constante com a saúde e segurança dos funcionários e familiares, dos usuários de nossos serviços e produtos, traduzindo em fatos a melhoria da qualidade de vida.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container certificates">
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
    <Footer />
  </>
}