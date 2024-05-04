import Image from "next/image";
import Link from "next/link";
import React from "react";

function Banner() {
  return (
    <div className="container-fluid banner my-5 bbg">
      <div className="container py-5">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className="py-4">
              <h1 className="tw-text-white tw-text-6xl sm:tw-text-7xl">Hair Conditioner</h1>
              <p className="fw-normal display-3 text-dark mb-4">in Our Store</p>
              <p className="mb-4 text-dark">
                The generated Lorem Ipsum is therefore always free from
                repetition injected humour, or non-characteristic words etc.
              </p>
              <Link
                href="/products"
                className="banner-btn btn border-2 border-white rounded-pill text-dark-bold bg-white py-3 px-5"
              >
                BUY
              </Link>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="position-relative">
              <Image
                width={900}
                height={600}
                src="/images/r4.png"
                className="img-fluid w-100 rounded"
                alt=""
              />
              <div
                className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute "
                style={{ width: 100, height: 100, top: 0, left: 0 }}
              >
                <div className="d-flex flex-column ">
                <Image
                width={900}
                height={600}
                src="/images/new.gif"
                className="img-fluid w-100 rounded"
                alt=""
              />
                  {/* <span className="h2 mb-0">NEW</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
