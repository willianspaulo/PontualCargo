import './../../assets/styles/css/doubt.min.css'
export default function Doubt() {
  return <>
    <section className='doubt'>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p><br /></p>
            <p><br /></p>
            <p><br /></p>
            <h2>DÚVIDA?</h2>
            <p>Saiba tudo sobre a sua remessa, <br /> desde a coleta até a entrega ao destinatário.</p>
            <p><br /></p>
            <h4>Ligue-nos para consulta</h4>
            <span className='h1'>(61) 2192-1200</span>
          </div>
          <div className="col-md-6">
            <div className='box-floating'>
              <form>
                <div className="form-row">
                  <div className="form-group input-group-lg col-md-6">
                    <label htmlFor="inputAddress">Nome</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder='João da Silva' />
                  </div>
                  <div className="form-group input-group-lg col-md-6">
                    <label htmlFor="inputEmail4">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="examplo@mail.com" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group input-group-lg col-md-12">
                    <label htmlFor="inputCity">Mensagem</label>
                    <textarea className='form-control' name="mensagem" rows="5"></textarea>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary btn-lg btn-block">ENVIAR</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}