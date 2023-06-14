function Footbar() {
  return (
    <>
      <footer className="text-center text-lg-start bg-warna text-muted pt-3">
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-xl-3 col-sm-12 mb-4 text-dark">
                <h1 className="fw-bold mb-4">TRACLE.</h1>
                <img src="assets/Logo/11zon_cropped.png" width="150px" height="150px" alt="" className="ms-2" />
              </div>

              <div className="garis-vertikal" id="garis1"></div>

              <div className="col-xl-5 col-sm-12 mb-4 text-dark">
                <h3 className="text-center text-light fw-bold mb-4">Tentang Kami</h3>
                <div className="row fs-5 fw-bold">
                  <div className="col-md-8">
                    <ul>
                      <li className="mb-3 text-start">
                        <a href="" className="text-decoration-none text-light">
                          Tentang
                        </a>
                      </li>
                      <li className="mb-3 text-start">
                        <a href="" className="text-decoration-none text-light">
                          Kontak Kami
                        </a>
                      </li>
                      <li className="text-start">
                        <a href="" className="text-decoration-none text-light">
                          Privasi & Kebijakan
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul>
                      <li className="text-start">
                        <a href="" className="text-decoration-none text-light">
                          Forum
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="garis-vertikal" id="garis2"></div>

              <div className="col-xl-3 col-sm-12 mb-md-0 mb-3 text-dark">
                <h3 className="text-center text-light fw-bold mb-5">Ikuti Kami</h3>
                <div className="row m-auto">
                  <div className="col-md-3 mt-3">
                    <a href="">{/* <i className="fa-brands fa-twitter fa-2x" style="color: #000000"></i> */}</a>
                  </div>
                  <div className="col-md-3 mt-3">
                    <a href="">{/* <i className="fa-brands fa-facebook fa-2x" style="color: #000000"></i> */}</a>
                  </div>
                  <div className="col-md-3 mt-3">
                    <a href="">{/* <i className="fa-brands fa-instagram fa-2x" style="color: #000000"></i> */}</a>
                  </div>
                  <div className="col-md-3 mt-3">
                    <a href="">{/* <i className="fa-brands fa-youtube fa-2x" style="color: #000000"></i> */}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center p-3 bg-warna2">
            <h6 className="text-light fw-bold">Copyright © 2023. Tracle</h6>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footbar;
