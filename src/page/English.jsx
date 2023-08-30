import LogoGrab from "../../public/grab.png";
import Food from '../../public/food.png';
import Mart from '../../public/mart.png';
import Send from '../../public/send.png';
import Jastip from '../../public/jastip.png';
import Transport from '../../public/transports.png';

function Header() {
  return <header>
        <div className="wrappers container">
          <div className="header-left">
            <div className="menu-hamburger">
              <button className="menu-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
                <p>
                  Menu
                </p>
              </button>
            </div>
            <div className="grab-logo">
              <img src={LogoGrab} alt="logo-grab" />
            </div>
          </div>
          <ul className="header-right">
            <li>
              <div className="dropdown">
                <button className="dropbtn">Be Our Partner
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                     <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
                <div className="dropdown-content">
                  <a href="">Grab Car</a>
                  <a href="">Grab Bike</a>
                  <a href="">Mitra GrabFood</a>
                  <a href="">Mitra GrabMart</a>
                  <a href="">Kios Merchant</a>
                  <a href="">GrabWheels</a>
                </div>
              </div>
            </li>
            <a href="">Help Centre</a>
            <li className='lang'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
            </svg>
            <li>
              <div className="dropdown">
                <button className="dropbtn">English</button>
                <div className="dropdown-content">
                  <a href="">Bahasa Indonesia</a>
                </div>
              </div>
            </li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
            </li>
            <li>
              <input className="search-box" type="text" />
              <button className="search-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </header>;
}

function Content() {
    return (<>   
        <div className="hero-video">
          <video autoPlay muted width="100%" loop>
            <source src={'https://assets.grab.com/wp-content/uploads/media/videos/hero_banner_sg_q50.mp4'} type="video/mp4" />
          </video>
          <div className="hero-text">
            <h1>Grab. Making Everyday Better.</h1>
          </div>
        </div>
        <div className="about-us-container">
          <div className="container">
            <a href=""><p className='i'>Read About Us</p></a>
          </div>
        </div>
        <div className="download-app-container">
          <div className="container">
            <a href=""><p className='i'>Download App</p></a>
          </div>
        </div>
        <div className="content container">
          <div className="content-text">
            <h1>
            From essential services to earning opportunities. We're an all-in-one platform.
            </h1>
          </div>
          <div className="content-option">
            <div className="konsumen content-selected">
              Consumer
            </div>
            <div className="mitra-pengemudi">
              Driver
            </div>
            <div className="mitra-penjual">
              Merchant
            </div>
            <div className="layanan-perusahaan">
              Enterprise
            </div>
          </div>
          <div className="content-types">
            <div className="types-left">
              <h1>Deliveries</h1>
            </div>
            <div className="types-right">
              <div className="antar-wrappers">
                <div className="antar">
                  <div className="antar-img">
                    <img src={Food} alt="food" />
                  </div>
                  <div className="antar-content">
                    <a href="">
                      <h3 className='o'>Food</h3>
                      <p className='o'>Have all your cravings delivered to your doorstep.</p>
                    </a>
                  </div>
                </div>
                <div className="antar">
                  <div className="antar-img">
                    <img src={Mart} alt="food" />
                  </div>
                  <div className="antar-content">
                    <a href="">
                      <h3 className='o'>Mart</h3>
                      <p className='o'>Find everything you need-groceries and more.</p>
                    </a>
                  </div>
                </div>
                <div className="antar">
                  <div className="antar-img">
                    <img src={Send} alt="food" />
                  </div>
                  <div className="antar-content">
                    <a href="">
                      <h3 className='o'>Express</h3>
                      <p className='o'>Send packages, documents, and beyond.</p>
                    </a>
                  </div>
                </div>
                <div className="antar" style={{
                border: 'none'
              }}>
                  <div className="antar-img">
                    <img src={Jastip} alt="food" style={{
                    height: '55px'
                  }} />
                  </div>
                  <div className="antar-content">
                    <a href="">
                      <h3 className='o'>Jastip</h3>
                      <p className='o'>Get everything you need, flexibly, everywhere.</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-types mobility" style={{
          borderTopWidth: '1px',
          borderColor: "#ccc",
          width: '100%'
        }}>
            <div className="types-left">
              <h1>Mobility</h1>
            </div>
            <div className="types-right">
              <div className="antar-wrappers">
                <div className="antar" style={{
                border: 'none'
              }}>
                  <div className="antar-img">
                    <img src={Transport} alt="food" style={{
                    height: '55px'
                  }} />
                  </div>
  
                  <div className="antar-content">
                    <a href="">
                      <h3 className='o'>Transportation</h3>
                      <p className='o'>Choose from a variety of vehicles to take you from A to B safely.</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tampilkan-lain">
            <p>Show More Services</p><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
        </div>
        <div className="ruang-berita container">
          <h1>Ruang Berita</h1>
          <div className="berita-list">
            <div className="berita">
              <div className="berita-img">
                <img src="https://assets.grab.com/wp-content/uploads/sites/9/2023/05/08131147/Grab_Final_Master_Logo_2019_RGB_green.png" alt="" />
              </div>
              <div className="berita-content">
                <div className="content-date">
                  <p>08/05/23</p>
                </div>
                <div className="content-title">
                  <p>Grab Indonesia Umumkan Pengangkatan Ridzki Kramadibrata sebagai Komisaris</p>
                </div>
                <div className="content-mores">
                  <p>Baca Selengkapnya</p>
                </div>
              </div>
            </div>
            <div className="berita">
              <div className="berita-img">
                <img src="https://assets.grab.com/wp-content/uploads/sites/9/2023/02/06111823/SRC.jpeg" alt="" />
              </div>
              <div className="berita-content">
                <div className="content-date">
                  <p>08/05/23</p>
                </div>
                <div className="content-title">
                  <p>Grab Indonesia Umumkan Pengangkatan Ridzki Kramadibrata sebagai Komisaris</p>
                </div>
                <div className="content-mores">
                  <p>Baca Selengkapnya</p>
                </div>
              </div>
            </div>
            <div className="berita">
              <div className="berita-img">
                <img src="https://assets.grab.com/wp-content/uploads/sites/9/2023/01/26160841/Foto-1-HMG-Yogyakarta-Mitra-Grab-menikmati-penampilan-musik-di-Hari-Mitra-Grab-OVO-2022-min-scaled.jpg" alt="" />
              </div>
              <div className="berita-content">
                <div className="content-date">
                  <p>08/05/23</p>
                </div>
                <div className="content-title">
                  <p>Grab Indonesia Umumkan Pengangkatan Ridzki Kramadibrata sebagai Komisaris</p>
                </div>
                <div className="content-mores">
                  <p>Baca Selengkapnya</p>
                </div>
              </div>
            </div>
            <div className="berita">
              <div className="berita-img">
                <img src="https://assets.grab.com/wp-content/uploads/sites/9/2023/01/26155642/Foto-1-KOTAK-Band-tampil-menghibur-ribuan-Mitra-di-acara-HAJATAN-yang-berlangsung-di-Balai-Komando-Kopassus-Cijantung-Jakarta.-.jpeg" alt="" />
              </div>
              <div className="berita-content">
                <div className="content-date">
                  <p>08/05/23</p>
                </div>
                <div className="content-title">
                  <p>Grab Indonesia Umumkan Pengangkatan Ridzki Kramadibrata sebagai Komisaris</p>
                </div>
                <div className="content-mores">
                  <p>Baca Selengkapnya</p>
                </div>
              </div>
            </div>
          </div>
          <div className="wrappers-berita-other">
            <div className="button-berita-other">
              <a href="">
                <p className='o'>Berita Terbaru Lainnya</p>
              </a>
            </div>
          </div>
        </div>
        </>)
  }
 
function Footer() {
    return <footer>
          <div className="footer-wrappers">
            <div className="footer-top container-fluid">
              <div className="footer-top-left">
                <div className="grab-logo">
                  <img src={LogoGrab} alt="logograb" />
                </div>
                <p>Forward Together</p>
                <p className="follow">Follow us and keep updated!</p>
                <div className="social-media">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tiktok" viewBox="0 0 16 16">
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
                  </svg>
                </div>
                <div className="select-lang">     
                  <div className="nation">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" zoomAndPan="magnify" viewBox="0 0 30 30.000001" height="40" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 2.128906 5.222656 L 27.53125 5.222656 L 27.53125 15 L 2.128906 15 Z M 2.128906 5.222656 " clipRule="nonzero" /></clipPath><clipPath id="id2"><path d="M 2.128906 14 L 27.53125 14 L 27.53125 23.371094 L 2.128906 23.371094 Z M 2.128906 14 " clipRule="nonzero" /></clipPath></defs><g clipPath="url(#id1)"><path fill="rgb(86.268616%, 12.159729%, 14.898682%)" d="M 24.703125 5.222656 L 4.957031 5.222656 C 3.398438 5.222656 2.132812 6.472656 2.132812 8.015625 L 2.132812 14.296875 L 27.523438 14.296875 L 27.523438 8.015625 C 27.523438 6.472656 26.261719 5.222656 24.703125 5.222656 Z M 24.703125 5.222656 " fillOpacity="1" fillRule="nonzero" /></g><g clipPath="url(#id2)"><path fill="rgb(93.328857%, 93.328857%, 93.328857%)" d="M 27.523438 20.578125 C 27.523438 22.121094 26.261719 23.371094 24.703125 23.371094 L 4.957031 23.371094 C 3.398438 23.371094 2.132812 22.121094 2.132812 20.578125 L 2.132812 14.296875 L 27.523438 14.296875 Z M 27.523438 20.578125 " fillOpacity="1" fillRule="nonzero" /></g></svg>
                     <p>Indonesia</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                      <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                     </svg>
                  </div>
              </div>
              <div className="footer-top-right">
                 <ul>
                  <li className="li-header">About</li>
                  <li>About Us</li>
                  <li>Inside Grab</li>
                  <li>Investor Relations</li>
                  <li>Locations</li>
                  <li>Trust & Safety</li>
                  <li>Impact</li>
                  <li>Newsroom</li>
                  <li>Careers</li>
                  <li>GrabForGood Fund</li>
                 </ul>
                 <ul>
                  <li className="li-header">Consumer</li>
                  <li>What's New</li>
                  <li>Transport</li>
                  <li>GrabFood</li>
                  <li>GrabMart</li>
                  <li>GrabExpress</li>
                  <li>Pay</li>
                  <li>GrabRewards</li>
                  <li>Groceries</li>
                  <li>Subscriptions</li>
                  <li>GrabKios</li>
                  <li>GrabGifts</li>
                  <li>Entertainment</li>
                 </ul>
                 <ul>
                   <li className="li-header">Driver</li>
                   <li>What's New</li>
                   <li>Transport</li>
                   <li>GrabFood</li>
                   <li>GrabExpress</li>
                   <li>Driver Centre</li>
                   <li>Code Of Ethics</li>
                 </ul>
                 <ul>
                   <li className="li-header">Enterprise</li>
                   <li>Grab for Bussiness</li>
                   <li>GrabAds</li>
                   <li>GrabGifts</li>
                   <li>GrabExpress</li>
                   <li>Business Delivery Service</li>
                 </ul>
                 <ul>
                   <li className="li-header">Quick Links</li>
                   <li>Help Centre</li>
                   <li>Food Menu</li>
                   <li>GrabMart Consumer Service</li>
                   <li>Developer Portal</li>
                 </ul>
              </div>
            </div>
            <div className="footer-bottom">
                <div className="bottom-left">
                    <span>Terms and Policies • Private Notice</span>
                </div>
                <div className="bottom-center">
                   <p>© Grab 2010 - 2023</p>
                </div>
                <div className="bottom-right">
                     <img src="https://www.grab.com/id/wp-content/uploads/media/images/footer/app-store.png" alt="" />
                     <img src="https://www.grab.com/id/wp-content/uploads/media/images/footer/google-play.png" alt="" />
                     <img src="https://assets.grab.com/wp-content/uploads/media/footer/AppGallery.png" alt="" />  
                </div>
            </div>
          </div>
        </footer>;
  }

export default function English(){
    return (
        <>
         <Header/>
         <Content/>
          <Footer/> 
        </>
    )
}