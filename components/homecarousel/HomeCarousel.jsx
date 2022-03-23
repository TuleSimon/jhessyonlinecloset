import Image from "next/image";
import Link from "next/link";
import React from "react";

function HomeCarousel() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide relative xs_hidden"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 md:mb-4 mb-1">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active float-left w-full relative">
          <div className="relative">
            <div id="overlay"></div>
            <img
              src="/img/product-img/floor9.jpg"
              className="block w-full h-full object-cover"
              alt="Carousel"
            />
            <div
              className="text-center flex place-items-center place-content-center flex-col
       text-white sm:px-2 md:px-4 w-full lg:px-6 absolute top-0 bottom-0 left-0 right-0"
            >
              <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-0 mb-2 md:mb-4 mb-6">
                GET THE BEST DISCOUNTS
              </h1>
              <h3 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold md:mb-4 mb-2 lg:mb-8">
                SHOPPING WITH US
              </h3>
              <Link href="/shop">
              <button
                type="button"
                className="inline-block px-6 py-2.5 border-2 border-primary text-white font-medium text-sm md:text-lg lg:text-xl
             leading-tight uppercase rounded hover:bg-opacity-7 hover:bg-primary
              focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                SHOP NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel-item float-left w-full">
          <div className="relative">
            <div id="overlay"></div>
            <img
              src="/img/product-img/floor10.jpg"
              className="block w-full h-full object-cover"
              alt="Carousel"
            />
            <div
              className="text-center flex place-items-center place-content-center flex-col
       text-white sm:px-2 md:px-4 w-full lg:px-6 absolute top-0 bottom-0 left-0 right-0"
            >
              <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-0 mb-2 md:mb-4 mb-6">
                GET THE LATEST DESIGNS
              </h1>
              <h3 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold md:mb-4 mb-2 lg:mb-8">
                SHOPPING WITH US
              </h3>
              <Link href="/shop">
              <button
                type="button"
                className="inline-block px-6 py-2.5 border-2 border-primary text-white font-medium text-sm md:text-lg lg:text-xl
             leading-tight uppercase rounded hover:bg-opacity-7 hover:bg-primary
              focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                SHOP NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel-item float-left w-full">
          <div className="relative">
            <div id="overlay"></div>
            <img
              src="/img/product-img/floor12.jpg"
              className="block w-full h-full object-cover"
              alt="Carousel"
            />
            <div
              className="text-center flex place-items-center place-content-center flex-col
       text-white sm:px-2 md:px-4 w-full lg:px-6 absolute top-0 bottom-0 left-0 right-0"
            >
              <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-0 mb-2 md:mb-4 mb-6">
                BUILD YOUR DREAM HOME
              </h1>
              <h3 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold md:mb-4 mb-2 lg:mb-8">
                SHOPPING WITH US
              </h3>
              <Link href="/shop">
              <button
                type="button"
                className="inline-block px-6 py-2.5 border-2 border-primary text-white font-medium text-sm md:text-lg lg:text-xl
             leading-tight uppercase rounded hover:bg-opacity-7 hover:bg-primary
              focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                SHOP NOW
              </button>
              </Link>
            </div>
          </div>{" "}
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default HomeCarousel;
