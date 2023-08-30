import LogoGrab from "../../public/grab.png";


export default function Footer() {
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
                <li className="li-header">Tentang Grab</li>
                <li>Cerita Grab</li>
                <li>Inside Grab</li>
                <li>Hubungan Investor</li>
                <li>Lokasi</li>
                <li>Tanggung Jawab & Keselamatan</li>
                <li>Dampak Positif</li>
                <li>Ruang Berita</li>
                <li>Karir</li>
                <li>GrabForGood Fund</li>
               </ul>
               <ul>
                <li className="li-header">Pengguna</li>
                <li>Yang Terbaru</li>
                <li>Transportasi</li>
                <li>GrabFood</li>
                <li>GrabExpress</li>
                <li>Pembayaran Grab</li>
                <li>GrabRewards</li>
                <li>Groceries</li>
                <li>Paket Hemat</li>
                <li>GrabKios</li>
                <li>GrabGifts</li>
                <li>Entertainment</li>
               </ul>
               <ul>
                 <li className="li-header">Pengemudi</li>
                 <li>Yang Terbaru</li>
                 <li>Transportasi</li>
                 <li>GrabFood</li>
                 <li>GrabExpress</li>
                 <li>Pusat Pengemudi</li>
                 <li>Kode Etik</li>
               </ul>
               <ul>
                 <li className="li-header">Perusahaan</li>
                 <li>Grab for Bussiness</li>
                 <li>GrabAds</li>
                 <li>GrabGifts</li>
                 <li>GrabExpress</li>
                 <li>Layanan Pengantaran untuk Bisnis</li>
               </ul>
               <ul>
                 <li className="li-header">Tautan Langsung</li>
                 <li>Pusat Bantuan</li>
                 <li>Menu Makanan</li>
                 <li>Layanan Pengaduan GrabMart</li>
                 <li>Developer Portal</li>
               </ul>
            </div>
           

          </div>
          <div className="footer-bottom">
              <div className="bottom-left">
                  <span>Peraturan dan Kebijakan • Pemberitahuan Privasi</span>
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
  