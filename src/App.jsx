import { useState } from 'react'
import SliderImg from './assets/images/slider-img.png'
import AboutImg from './assets/images/about-img.jpg'
import F1Img from './assets/images/f1.png'
import F2Img from './assets/images/f2.png'
import F3Img from './assets/images/f3.png'
import F4Img from './assets/images/f4.png'
import B1Img from './assets/images/b1.jpg'
import B2Img from './assets/images/b2.jpg'
import B3Img from './assets/images/b3.jpg'
import ClientImg from './assets/images/client.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="hero_area">
        {/* <!-- header section strats --> */}
        <header className="header_section">
          <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand " href="index.html"> Olests </a>

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className=""> </span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about.html"> About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="shop.html">Shop</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="blog.html">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                    </a>
                  </li>
                  <form className="form-inline justify-content-center">
                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </form>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        {/* <!-- end header section --> */}
        {/* <!-- slider section --> */}
        <section className="slider_section ">
          <div id="customCarousel1" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
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
                        <img src={SliderImg} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
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
                        <img src={SliderImg} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
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
                        <img src={SliderImg} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel_btn-box container">
              <a className="carousel-control-prev" href="#customCarousel1" role="button" data-slide="prev">
                <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#customCarousel1" role="button" data-slide="next">
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </section>
        {/* <!-- end slider section --> */}
      </div>

      {/* <!-- about section --> */}

      <section className="about_section layout_padding">
        <div className="container">
          <div className="detail-box">
            <div className="heading_container heading_center">
              <h2>
                About Us
              </h2>
            </div>
            <p>
              Normal distribution of letters, as opposed to using 'Content here, content here', making it look like
              readable English. Many desktop publishing packages and web page editors has a more-or-less normal
              distribution of letters, as opposed to using 'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors
            </p>
          </div>
          <div className="col-md-9 mx-auto px-0">
            <div className="img-box">
              <img src={AboutImg} alt="" />
            </div>
            <div className="btn-box">
              <a href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- end about section --> */}

      {/* <!-- fruits section --> */}

      <section className="fruits_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center ">
            <h2 className="">
              Our Fruits
            </h2>
            <p className="col-lg-9 px-0">
              If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
            </p>
          </div>
          <div className="fruits_owl-carousel owl-carousel owl-theme ">
            <div className="item">
              <div className="box">
                <div className="img-box">
                  <img src={F1Img} alt="" />
                </div>
                <div className="detail-box">
                  <h4>
                    Apple
                  </h4>
                  <h6 className="price">
                    <span className="new_price">
                      40$
                    </span>
                    <span className="old_price">
                      45$
                    </span>
                  </h6>
                  <a href="">
                    <i className="fa fa-shopping-basket" aria-hidden="true"></i> Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="box">
                <div className="img-box">
                  <img src={F2Img} alt="" />
                </div>
                <div className="detail-box">
                  <h4>
                    Banana
                  </h4>
                  <h6 className="price">
                    <span className="new_price">
                      38$
                    </span>
                    <span className="old_price">
                      43$
                    </span>
                  </h6>
                  <a href="">
                    <i className="fa fa-shopping-basket" aria-hidden="true"></i> Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="box">
                <div className="img-box">
                  <img src={F3Img} alt="" />
                </div>
                <div className="detail-box">
                  <h4>
                    Watermelon
                  </h4>
                  <h6 className="price">
                    <span className="new_price">
                      44$
                    </span>
                    <span className="old_price">
                      48$
                    </span>
                  </h6>
                  <a href="">
                    <i className="fa fa-shopping-basket" aria-hidden="true"></i> Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="box">
                <div className="img-box">
                  <img src={F4Img} alt="" />
                </div>
                <div className="detail-box">
                  <h4>
                    Orange
                  </h4>
                  <h6 className="price">
                    <span className="new_price">
                      41$
                    </span>
                    <span className="old_price">
                      47$
                    </span>
                  </h6>
                  <a href="">
                    <i className="fa fa-shopping-basket" aria-hidden="true"></i> Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="">
              View More Fruits
            </a>
          </div>
        </div>
      </section>

      {/* <!-- fruits section ends --> */}

      {/* <!-- blog section --> */}

      <section className="blog_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Our Blog
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src={B1Img} alt="" />
                  <h4 className="blog_date">
                    <span>
                      11 Feb <br />
                      2021
                    </span>
                  </h4>
                </div>
                <div className="detail-box">
                  <h5>
                    Nemo fugit corporis sitTenetur pariatur culpa harum
                  </h5>
                  <a href="">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src={B2Img} alt="" />
                  <h4 className="blog_date">
                    <span>
                      11 Feb <br />
                      2021
                    </span>
                  </h4>
                </div>
                <div className="detail-box">
                  <h5>
                    Ut facere necessitatibus modi eum architecto? Minima
                  </h5>
                  <a href="">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src={B3Img} alt="" />
                  <h4 className="blog_date">
                    <span>
                      10 Feb <br />
                      2021
                    </span>
                  </h4>
                </div>
                <div className="detail-box">
                  <h5>
                    Sapiente obcaecati cupiditate assumenda illum incidunt
                  </h5>
                  <a href="">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- end blog section --> */}

      {/* <!-- client section --> */}

      <section className="client_section layout_padding-bottom">
        <div className="container ">
          <div className="heading_container heading_center">
            <h2>
              Testimonial
            </h2>
          </div>
          <div id="customCarousel2" className="carousel slide" data-ride="carousel">
            <div className="carousel_btn-container">
              <a className="carousel-control-prev" href="#customCarousel2" role="button" data-slide="prev">
                <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#customCarousel2" role="button" data-slide="next">
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                <span className="sr-only">Next</span>
              </a>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="box">
                  <div className="img-box">
                    <img src={ClientImg} alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>
                      Klara Mason
                    </h5>
                    <p>
                      It is a long established fact that a reader will be distracted by the readable content of a page when
                      looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                      distribution of letters, as opposed to using 'Content here, content here', making it look
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="box">
                  <div className="img-box">
                    <img src={ClientImg} alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>
                      Klara Mason
                    </h5>
                    <p>
                      It is a long established fact that a reader will be distracted by the readable content of a page when
                      looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                      distribution of letters, as opposed to using 'Content here, content here', making it look
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="box">
                  <div className="img-box">
                    <img src={ClientImg} alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>
                      Klara Mason
                    </h5>
                    <p>
                      It is a long established fact that a reader will be distracted by the readable content of a page when
                      looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                      distribution of letters, as opposed to using 'Content here, content here', making it look
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- end client section --> */}

      {/* <!-- info section --> */}
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
