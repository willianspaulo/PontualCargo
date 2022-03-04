export default function Footer() {
  return <>
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
    <footer className=" footer_section">
      <div className="container">
        <p>{new Date().getFullYear()} &copy; Pontual Cargo</p>
      </div>
    </footer>
  </>
}