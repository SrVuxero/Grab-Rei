function Login() {
  return (
    <>
      <div className="login-header">
        <img src="/public/grab.png" alt="grab" />
      </div>
      <div className="login-container">
         <div className="login-card">
         <div className="login-title">
            <h2>Masukan nomor telepon Anda</h2>
            <p>Kami Akan mengirimkan kode OTP untuk verifikasi.</p>
         </div>
         <div className="input-phonenumber">
            <input type="number" placeholder="12345678" />
         </div>
         <div className="remember">
            <input type="checkbox" name="" id="" />
            <p>Remember me on this device for 90 days</p>
         </div>
         <div className="next">
            <button>
                Lanjutkan
            </button>
         </div>
         <div className="or">
            <div className="or-child"></div>
            <span>atau</span>
            <div className="or-child"></div>
         </div>
         <div className="login-using-external">
            <div className="external google">
            <div className="left">
            <svg height={'17px'} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="LgbsSe-Bz112c"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>
            </div>
        
               <div className="right">
                 <p>Lanjutkan dengan Google</p>
               </div>
            </div>
            <div className="external facebook">
                <div className="left">
                   <img src="https://weblogin.grab.com/static/images/fb-icon.1t6WZ1a.png" alt="" />
                </div>
                <div className="right">
                   <p>Lanjutkan dengan Facebook</p>
                </div>
            </div>
            <div className="external apple">
                <div className="left">
                   <img src="https://weblogin.grab.com/static/images/apple_icon.3tt6j-b.svg" alt="" />
                </div>
                <div className="right">
                  <p>Lanjutkan dengan Apple</p>
                </div>
            </div>
         </div>
         <div className="login-footer">
            <p>© 2023 Grab Inc.Terms and Conditions.
reCAPTCHA tak terlihat oleh Google Kebijakan Privasi dan Persyaratan penggunaan .</p>
         
         </div>
         </div>
        
      </div>
    </>
  )
}

export default Login