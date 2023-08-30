
import Food from '../../public/food.png';
import Mart from '../../public/mart.png';
import Send from '../../public/send.png';
import Jastip from '../../public/jastip.png';
import Transport from '../../public/transports.png';


export default function Content() {
  return (<>   
      <div className="hero-video">
        <video autoPlay muted width="100%" loop>
          <source src={'https://assets.grab.com/wp-content/uploads/media/videos/hero_banner_sg_q50.mp4'} type="video/mp4" />
        </video>
        <div className="hero-text">
          <h1>Grab. Jadikan Setiap Hari Lebih Istimewa.</h1>
        </div>
      </div>
      <div className="about-us-container">
        <div className="container">
          <a href=""><p className='i'>Tentang Kami</p></a>
        </div>
      </div>
      <div className="download-app-container">
        <div className="container">
          <a href=""><p className='i'>Unduh Aplikasi</p></a>
        </div>
      </div>
      <div className="content container">
        <div className="content-text">
          <h1>
            Dari layanan kebutuhan sehari-hari hingga peluang penghasilan. Satu Aplikasi serbabisa.
          </h1>
        </div>
        <div className="content-option">
          <div className="konsumen content-selected">
            Konsumen
          </div>
          <div className="mitra-pengemudi">
            Mitra Pengemudi
          </div>
          <div className="mitra-penjual">
            Mitra Penjual
          </div>
          <div className="layanan-perusahaan">
            Layanan Perusahaan
          </div>
        </div>
        <div className="content-types">
          <div className="types-left">
            <h1>Pengantaran</h1>
          </div>
          <div className="types-right">
            <div className="antar-wrappers">
              <div className="antar">
                <div className="antar-img">
                  <img src={Food} alt="food" />
                </div>
                <div className="antar-content">
                  <a href="">
                    <h3 className='o'>Makanan</h3>
                    <p className='o'>Dapatkan semua makanan diantarkan ke depan pintu Anda.</p>
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
                    <p className='o'>Temukan semua kebutuhan pokok Anda dan banyak lagi.</p>
                  </a>
                </div>
              </div>
              <div className="antar">
                <div className="antar-img">
                  <img src={Send} alt="food" />
                </div>
                <div className="antar-content">
                  <a href="">
                    <h3 className='o'>Pengiriman</h3>
                    <p className='o'>Kirim paket, dokumen, dan lain-lainnya.</p>
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
                    <p className='o'>Dapatkan semua kebutuhan Anda secara fleksibel di mana saja.</p>
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
            <h1>Mobilitas</h1>
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
                    <h3 className='o'>Transportasi</h3>
                    <p className='o'>Pilih beragam kendaraan untuk membawa Anda dari lokasi satu ke lainnya dengan aman.</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tampilkan-lain">
          <p>Tampilkan layanan lainnya</p><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
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
  