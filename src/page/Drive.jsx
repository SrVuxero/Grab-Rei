import LogoGrab from "../../public/grab.png";

export default function Drive() {
    return (
     <>
        <header>
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
        </header>
        <main>
        <p className="text-header-drive-mitra">Mitra Pengemudi</p>
            <div className="text-content-mitra">
                <p className="text-header-drive">Yuk bergabung sebagai mitra pengemudi Grab</p>
                <img className="gambar-drive" src="	https://assets.grab.com/wp-content/uploads/sites/4/2021/09/30152517/dax-drive-car-hero-m402x.png" alt="" />
            </div>
            <div className="button-daftar-drive">
                <a className="button-daftar" href="">
                    <div className="teks-button-daftar"><b>Daftar</b></div> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg></a><br />
                <a className="button-unduh" href=""> 
                <div className="teks-button-daftar"><b>Unduh Aplikasi GrabDriver</b></div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg></a>
            </div>
            <div className="body-driver">
                <div className="layanan-driver">
                    <p>Mengapa menggunakan layanan kami?</p>
                </div>
                <div className="text-number">
                    <div className="text-number-in">
                        <p className="text-number-in-1"><b>1 Penarikan dana instan</b></p>
                        <p className="text-number-in-1-1">Transfer penghasilan Anda ke rekening bank dengan mudah.</p>
                    </div>
                    <div className="text-number-in-2">
                        <p className="text-number-in-2"><b>2 Bantuan 24/7</b></p>
                        <p className="text-number-in-1-2">Siap membantu mitra pengemudi dan memastikan keselamatan kapan pun Anda membutuhkannya.</p>
                    </div>
                    <div className="text-number-in">
                        <p className="text-number-in-1"><b>1 Penarikan dana instan</b></p>
                        <p className="text-number-in-1-1">Transfer penghasilan Anda ke rekening bank dengan mudah.</p>
                    </div>
                    <p className="text-testi">Testimonial</p>
                </div>
                <div className="testimoni-drive">
                        <img className="testimoni-drive" src="https://assets.grab.com/wp-content/uploads/sites/9/2022/12/15133931/img-riszal.png" alt="" />
                        <img className="testimoni-drive" src="https://assets.grab.com/wp-content/uploads/sites/4/2021/09/30152522/dax-drive-avatar-02403x.png" alt="" />
                        <img className="testimoni-drive" src="https://assets.grab.com/wp-content/uploads/sites/4/2021/09/30152524/dax-drive-avatar-03403x.png" alt="" />
                    <div className="desc-testi">
                        <p></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        .
                    </div>
                </div>
            </div>
        </main></>
    );
  }

