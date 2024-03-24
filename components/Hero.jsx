import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-[65vh] relative">
      <Image
        src="/assets/slide3.jpeg"
        alt="ecole"
        width={1920}
        height={780}
        className="w-full h-full object-cover"
      />
      <div className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,.6)] md:bg-[rgba(0,0,0,.6)] flex items-center">
        <div className="px-6 lg:px-12 xl:px-32 py-10 flex items-center self-end md:self-auto">
          <div className="flex flex-col gap-8 items-start">
            <p className="flex flex-col gap-4 items-start text-3xl font-bold">
              <span className="inline-flex gap-2 p-4 bg-white text-black">
                {" "}
                <span> Votre </span>{" "}
                <span className="text-red-600 uppercase"> générosité</span>{" "}
              </span>
              <span className="p-4 bg-white text-black ">
                {" "}
                peut illuminer les jours les plus sombres
              </span>
            </p>
            <Link
              href="/donation"
              className="inline-flex text-md lg:text-lg  hover:bg-red-700 bg-red-600 text-white p-4 rounded-lg uppercase font-extrabold"
            >
              Faire un don
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
