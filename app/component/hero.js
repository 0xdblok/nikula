import React from "react";
import logo from "../asset/logo.png";
import america from "../asset/america.png";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="pt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
      <div className="space-y-4 flex-1 sm:text-center lg:text-left">
        <h1 className="text-center font-bold text-4xl xl:text-5xl">
          Abraham Lincoln
        </h1>
        <p className=" max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum
        </p>
      </div>
      <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
        <Image
          className="mx-auto sm:w-10/12  lg:w-2/3"
          src={logo}
          alt="Nikula Tisla"
          width={200}
          height={200}
        />{" "}
      </div>
    </section>
  );
}
