import LogoGrab from '/public/grab.png';
import { Link } from 'react-router-dom';

function Help() {
    return (
        <>
            <header>
                <div className="wrappers container help-header">
                    <div className="header-left">
                        <div className="grab-logo">
                            <img src={LogoGrab} alt="logo-grab" style={{ height: '35px' }} />
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="help-lang">
                            <img src="https://help.grab.com/6375309/static/media/id.01623514.png" alt="" />
                            <p>Indonesia(Bahasa In...</p>
                        </div>
                        <div className="daftar-mitra help-btn">
                            PENDAFTARAN MITRA PENGEMUDI
                        </div>
                        <Link to={'/login'} className="login help-btn">
                            LOGIN
                        </Link>
                    </div>

                </div>
            </header>
            <div className="help-hero">
                <div className="help-hero-wrappers">
                    <h1>Anda Memerlukan Bantuan?</h1>
                    <div className="solusi-search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                        <input type="text" placeholder='Cari solusi' />
                    </div>
                </div>
            </div>
            <div className="help-list">
                <ul className="list list-1">
                    <li style={{ color: '#00b14f' }}>Pengguna</li>
                    <li>Pengemudi</li>
                    <li>Merchant</li>
                </ul>
                <ul className="list list-2">
                    <li>Keselamatan dan Kecelakaan</li>
                    <li>Transportasi</li>
                    <li>Makanan</li>
                    <li>Mart</li>
                    <li>Express</li>
                    <li>Pembayaran</li>
                    <li>Asuransi</li>
                    <li>Rewards</li>
                </ul>
                <ul className="list list-3">
                    <li>Paket Diskon</li>
                    <li>Tantangan</li>
                    <li>Gift Card</li>
                    <li>Akun dan Keamanan</li>
                    <li>Kendala Aplikasi</li>
                    <li>Bisnis</li>
                    <li>Lainnya</li>
                </ul>
            </div>
            <div className="personal-help-container">
                <div className="help-title">
                    <img src="https://help.grab.com/6375309/static/media/phone-icon.999e3d06.svg" alt="help" />
                    <h1>Dapatkan bantuan yang lebih personal, hubungi kami dari aplikasi Grab</h1>
                </div>
                <div className="steps">
                    <div className="step-1">
                        <div className="step-text">
                            <h1>LANGKAH 1</h1>
                            <div className="step-detail">
                               <h3><b>Tekan Akun</b> & pilih <b>Pusat Bantuan</b> dari aplikasi Grab</h3>
                            </div>
                        </div>

                        <img src="https://help.grab.com/6375309/static/media/id-step-one-nudge.93195d39.png" alt="step-1" />
                    </div>
                    <div className="step-2">
                        <div className="step-text">
                            <h1>LANGKAH 2</h1>
                            <div className="step-detail">
                              <h3>Pilih <b>Pusat Bantuan,</b> geser ke bawah & tekan <b>Hubungi Kami</b></h3>
                            </div>
                        </div>
                        <img src="https://help.grab.com/6375309/static/media/id-step-two-nudge.129aa176.png" alt="step-2" />
                    </div>
                </div>

            </div>
            <div className="help-footer">
              <div className="top-wrappers">
              <div className="top-footer">
                 <div className="footer-icon">
                    <img src="/public/grab.png" alt="" />
                 </div>
                 <div className="footer-menu">
                    <ul>
                        <li><b>PERUSAHAAN</b></li>
                        <li>Tentang Kami</li>
                        <li>Media</li>
                        <li>Blog</li>
                        <li>Food Blog</li>
                        <li>Karir</li>
                        <li>Security</li>
                        <li>Driver Centre</li>
                    </ul>
                    <ul>
                        <li><b>LAYANAN</b></li>
                        <li>GrabTaxi</li>
                        <li>GrabCar</li>
                        <li>GrabBike</li>
                        <li>GrabExpress</li>
                        <li>GrabFood</li>
                    </ul>
                    <ul>
                        <li><b>KORPORAT</b></li>
                        <li>Grab for Business</li>
                        <li>Mitra</li>
                    </ul>
                    <ul>
                        <li><b>TUMPANGAN</b></li>
                        <li>Mengendarai</li>
                        <li>Keamanan</li>
                        <li>Etika & Keadilan</li>
                        <li>Pusat Bantuan</li>
                    </ul>
                 </div>
              </div>
              <div className="bottom-footer">
                 <p>Follow us and keep updated!</p>
                 <div className="social-media-links">
                    <div className="link facebook">
                        <img src="https://help.grab.com/6375309/static/media/facebook.e4c598c3.svg" alt="" />
                    </div>
                    <div className="link instagram">
                        <img src="https://help.grab.com/6375309/static/media/instagram.2debe84e.svg" alt="" />

                    </div>
                    <div className="link twitter">
                         <img src="https://help.grab.com/6375309/static/media/twitter.d11cd6f6.svg" alt="" />
                    </div>
                 </div>
              </div>
              </div>
              <div className="bottom-wrappers">
                <div className="bw-left">
                   <p>Peraturan dan Kebijakan    •   </p>
                   <p>Pemberitahuan Privasi</p>
                </div>
                <div className="bw-right">
                    © Grab 2023
                </div>
              
              </div>
            
            </div>
        </>
    )
}

export default Help