import Image from "next/image";
import Link from "next/link";
import Hero from "./components/Hero";
import OutfitWomen from "./components/OutfitWomen";
import Service from "./components/Service";
import { HiChevronDoubleDown } from "react-icons/hi2";
import Video from "./components/Video";


export default function Home() {
  return (
    <>
      <div className="w-full h-screen bg-[url('/heroBanner.png')] bg-cover bg-center" >

        <div className="container flex flex-col h-full items-center">
          <div className="flex flex-col lg:flex-row h-full w-full ">
            {/* banner text part start */}
            <div className="flex flex-col px-4 h-2/3 md:h-full">

              {/* banner text part */}
              <div
                id="bannerText"
                className="text-white h-full flex flex-col justify-center"
              >
                <h2 className="font-second font-normal text-[12px] md:text-[16px]">
                  MADE IN BANGLADESH, DEDICATED TO BANGLADESH
                </h2>
                <h1 className="font-prime font-medium text-[36px] md:text-[56px] lg:text-[76px] leading-tight md:leading-[1.1]">
                  DISCOVER THE ART OF DRESSING UP
                </h1>

              </div>
            </div>
            {/* banner text part end */}


            {/* banner product part start */}
            <div
              id="bannerProduct"
              className="
    md:aspect-[2/1] md:w-1/2 lg:w-1/3 self-end flex flex-col
    gap-y-6 md:gap-y-[23px] justify-end items-end h-1/3 md:h-full
    px-4 
  "
            >
              {/* First Product Card */}
              <div
                id="singleProduct"
                className="
      flex flex-row bg-white h-40 w-full lg:w-[320px] 
      rounded-lg shadow-md overflow-hidden
    "
              >
                <div
                  id="singProdImg"
                  className="flex-shrink-0"
                >
                  <Image
                    src="/slim-fit-wool-blazer.png"
                    alt="Slim-fit wool blazer"
                    width={200}
                    height={200}
                    // h-40 ensures it matches the card height. w-full/w-[160px] controls image width
                    className="h-40 w-30 md:w-[160px] object-cover object-top"
                  />
                </div>
                <div
                  id="singProdInfo"
                  className="flex flex-col p-4 bg-white flex-grow" // flex-grow allows info to take remaining space
                >
                  <div>
                    <h3 className="font-prime font-normal text-[20px] leading-[28px] text-dark-gray capitalize">
                      Slim-fit wool blazer
                    </h3>
                    <p className="font-second font-normal text-[12px] text-light-gray">£57.40</p>
                  </div>
                  <p className="font-second font-normal text-[12px] mt-auto text-dark-gray">shop now</p>
                </div>
              </div>

              {/* Second Product Card */}
              <div
                id="singleProduct"
                className="
      flex flex-row-reverse bg-white h-40 w-full lg:w-[320px]
      rounded-lg shadow-md overflow-hidden
    "
              >
                <div
                  id="singProdImg"
                  className="flex-shrink-0"
                >
                  <Image
                    src="/ivory-frame-jeans.png"
                    alt="Ivory Frame Slim Jeans"
                    width={200}
                    height={200}
                    // h-40 ensures it matches the card height. w-full/w-[160px] controls image width
                    className="h-40 w-30 md:w-[160px] object-cover object-center"
                  />
                </div>
                <div
                  id="singProdInfo"
                  className="flex flex-col p-4 bg-white flex-grow"
                >
                  <div>
                    <h3 className="font-prime font-normal text-[20px] leading-[28px] text-dark-gray capitalize">
                      Ivory Frame Slim Jeans
                    </h3>
                    <p className="font-second font-normal text-[14px] text-light-gray">£57.40</p>
                  </div>
                  <p className="font-second font-normal text-[12px] mt-auto text-dark-gray">shop now</p>
                </div>
              </div>
            </div>
            {/* banner product part end */}          </div>

          <div className="flex gap-2 items-center mb-10 text-white">Scroll below <HiChevronDoubleDown /></div>


        </div>
      </div>
      <OutfitWomen />
      <OutfitWomen />
      <Service />
      <Video />

    </>
  );
}
