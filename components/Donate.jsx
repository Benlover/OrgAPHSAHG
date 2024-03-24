import Image from "next/image";
import React from "react";

const Donate = () => {
  return (
    <div className="w-full md:w-[80%] lg:w-[65%] xl:w-[60%] 2xl:w-1/2 flex flex-col gap-6">
      <div className="p-4 bg-white flex flex-col gap-4 rounded-lg">
        <h1 className="text-5xl font-extrabold uppercase">
          {" "}
          Un Don pour Une Vie
        </h1>
        <h2 className="text-xl font-bold">
          Des personnes vulnérables ont plus que jamais besoin de vous.
        </h2>
        <p className="text-lg font-extralight">
          Peu importe la valeur! <br />
          Votre don d'aujourd'hui peut contribuer à apporter des changements qui
          protègent la vie des enfants, des familles et de leurs communautés.
        </p>
        <div className="flex flex-col gap-4 text-white">
          <div className="flex items-center gap-12 bg-[#008080] px-4 py-4 rounded-xl">
            <div className="relative w-[120px] h-[65px] flex items-center">
              <Image
                src="/assets/paypal.png"
                alt="paypal"
                width={360}
                height={250}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col gap-2 font-semibold">
              <p>
                <span> Nom: </span>
                <span> APHSAGH HAITI </span>
              </p>
              <p>
                <span>Email: </span>
                <span>aphsagh49@gmail.com</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-12 bg-[#0056a6] px-4 py-4 rounded-xl">
            <div className="relative w-[120px] h-[65px] flex items-center">
              <Image
                src="/assets/unibank.png"
                alt="paypal"
                width={360}
                height={250}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-2 font-semibold">
              <p>
                <span> Nom: </span>
                <span> APHSAGH HAITI </span>
              </p>
              <p>
                <span>No compte: </span>
                <span>210-2015-11708-118</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-12 bg-red-600 px-4 py-4 rounded-xl">
            <div className="relative w-[120px] h-[65px] flex items-center">
              <Image
                src="/assets/moncash.png"
                alt="paypal"
                width={360}
                height={250}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-2 font-semibold">
              <p>
                <span> Nom: </span>
                <span> APHSAGH HAITI </span>
              </p>
              <p>
                <span>No: </span>
                <span>(+509) 37870513</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-12 bg-[#f18130] px-4 py-4 rounded-xl">
            <div className="relative w-[120px] h-[65px] flex items-center">
              <Image
                src="/assets/natcash.png"
                alt="paypal"
                width={360}
                height={250}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-2 font-semibold">
              <p>
                <span> Nom: </span>
                <span> APHSAGH HAITI </span>
              </p>
              <p>
                <span>No: </span>
                <span>(+509) 40089857</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white flex flex-col gap-4 rounded-lg">
        <h2 className="font-bold text-2xl">
          Chaque don permet d'aider des enfants et des familles qui souffrent
          sur le plan physique et mental
        </h2>

        <div className="flex flex-col gap-2 font-extralight">
          <p>
            Un monde où la faim n'existe plus est possible. Lorsque vous faites
            un don à APHSAGH, vous contribuez directement à la construction de
            ce monde.
          </p>
          <p>
            Vous pouvez sauver des vies en situations d'urgences ou permettre à
            des enfants de recevoir chaque jour un repas scolaire.
          </p>
          <p>
            Nous ne pouvons pas agir sans votre soutien. L'APHSAGH étant
            entièrement financé par des dons volontaires, chacune de vos
            contributions compte.
          </p>
          <p>
            Agissez dès aujourd'hui. Aidez-nous à construire un monde meilleur
            en faisant un don.
          </p>
          <p>
            Nous vous tiendrons informé du travail réalisé par l' APHSAGH et des
            vies sauvées grâce à votre générosité.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donate;
