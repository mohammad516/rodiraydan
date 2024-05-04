import Image from 'next/image'
import React from 'react'

function Brain1() {
  return (
    <>
  <section
    id="scrollspyAbout"
    className="py-3 py-md-5 py-xl-8 pb-xxl-0 bsb-section-pt-xxl-1"
  >
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-10 col-lg-8">
          <h2 className="display-5 fw-bold mb-4">
            Наш путь начался с мечты переопределить, как мир воспринимает
            красоту.
          </h2>
        </div>
      </div>
    </div>
    <div className="container overflow-hidden">
      <div className="row gy-4 gy-lg-0">
        <div className="col-12 col-lg-6">
          <article>
            <div className="card border-0">
            <Image
              width={940}
              height={788}
                className="card-img-top img-fluid m-0"
                loading="lazy"
                src="/images/px.png"
                alt=""
              />
              <div className="card-body border bg-white p-4">
                <div className="entry-header mb-3">
                  <h2 className="card-title entry-title h4 mb-0">
                    <a className="link-dark text-decoration-none" href="#!">
                      Наше видение
                    </a>
                  </h2>
                </div>
                <p className="card-text entry-summary text-secondary mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco .
                </p>
              </div>
            </div>
          </article>
        </div>
        <div className="col-12 col-lg-6">
          <article>
            <div className="card border-0">
              <Image
              width={940}
              height={788}
                className="card-img-top img-fluid m-0"
                loading="lazy"
                src="/images/px.png"
                alt=""
              />
              <div className="card-body border bg-white p-4">
                <div className="entry-header mb-3">
                  <h2 className="card-title entry-title h4 mb-0">
                    <a className="link-dark text-decoration-none" href="#!">
                      Наш подход
                    </a>
                  </h2>
                </div>
                <p className="card-text entry-summary text-secondary mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco .
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>

 
</>

  )
}

export default Brain1