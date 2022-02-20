import './../../assets/styles/css/tracking.min.css'
export default function Tracking() {
  return <>
    <section className='tracking'>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div>
              <h2 className='text-center text-white'>RASTREAR ENCOMENDA</h2>
              <p>Saiba tudo sobre a sua remessa, desde a coleta até a entrega ao destinatário.</p>
            </div>
            <div className="form-tracking">
              <input className='input-tracking' type="text" placeholder='Nota de despacho / Nota fiscal / Código tastreamento'/>
              <button className='button-send'><span className='fa fa-search'></span></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}