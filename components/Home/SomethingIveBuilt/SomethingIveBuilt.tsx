import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> 03.</span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Diverses Réalisations
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        {/* // ?  Project  1*/}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96 ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              {/* <Link href={"/typing"}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link> */}

              <a href="https://www.hdm-canoe.fr" target={"_blank"} rel="noreferrer">
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img src={"/hdmcanoe.webp"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/hdmcanoe.webp"} alt={"Project Screen shot"} className={`w-full h-full `} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">HDM canoë </span>
                <a href="https://www.hdm-canoe.fr" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    HDM canoë, loisirs aquatiques
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right ">
                  Avec <span className="text-AAsecondary">HDM canoë</span>, J&apos;ai allié le design avec l&apos;intégration d&apos;une
                  solution, <span className="text-AAsecondary">GUIDAP</span>, afin de permettre aux clients de réserver en ligne
                  et de payer pour des activités nautiques dans un camping, sur la Dronne, en Dordogne.
                  Nous avons également pu y intégrer <span className="text-AAsecondary">des prise de vues aériennes</span>{" "}
                  prise avec le drone de <span className="text-AAsecondary">Kévin @ Eulatech</span>. 
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">HTML</span>
                <span className="pr-4 z-10">CSS</span>
                <span className="pr-4 z-10">JS</span>
                <span className="pr-4 z-10">SEO</span>
                <span className="pr-4 z-10">DRONE</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
              <GithubIcon link="https://github.com/Akalabete/hdm-canoe" />
                <a href="https://www.hdm-canoe.fr/" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 2 */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a href={"https://www.lesgrandschenes.info"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"/lesgrandschenes.webp"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/lesgrandschenes.webp"} alt={"Project Screen shot"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">Locations saisonnières</span>
                <a href="https://www.lesgrandschenes.info/" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Gite les grands chênes
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  Le site web <span className="text-AAsecondary">Gite les grands chênes</span> est la vitrine
                  d&apos;un gîte situé à Festalemps, en Dordogne. Il permet aux visiteurs de vérifier les disponibilités
                  et de réserver sur <span className="text-AAsecondary">Abritel</span> il dispose de:{" "}
                  <span className="text-AAsecondary"> carroussel dynamique,</span>
                  <span className="text-AAsecondary"> avis clients</span>et d&apos;un excellent{" "}
                  <span className="text-AAsecondary"> référencement naturel</span>pour apparaitre dans les moteurs malgré
                  <span className="text-AAsecondary"> une forte résistance</span>sur les mots clés du secteur.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">SEO</span>
                <span className="pr-4 z-10">Optimisation</span>
                <span className="pr-4 z-10">Accessibilité</span>
                <span className="pr-4 z-10">Site vitrine</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/Akalabete/lesgrandschenes" />
                <a href="https://www.lesgrandschenes.info/" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* // ?  Project  3*/}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96 ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <Link href={"https://akalabete.github.io/ip-adress-tracker-frontend-mentor-project/"}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>

              <Img src={"/geoloc.webp"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/geoloc.webp"} alt={"Project Screen shot"} className={`w-full h-full `} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Projet Perso</span>
                <Link href={"https://akalabete.github.io/ip-adress-tracker-frontend-mentor-project/"}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Géolocalisation d&apos;adresse IP
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  Cette application prends 2 <span className="text-AAsecondary">API </span> l&apos;une pour la détection
                  de <span className="text-AAsecondary">l&apos; adresse IP</span> la seconde utilise les infos pour{" "}
                  <span className="text-AAsecondary"> géolocaliser la source</span>, fonctionne également avec les noms de domaines
                  design <span className="text-AAsecondary">responsive</span>.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Algorythmes</span>
                <span className="pr-4 z-10">API</span>
                <span className="pr-4 z-10">Asynchrone</span>
                <span className="pr-4 z-10">Responsive</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/Akalabete/ip-adress-tracker-frontend-mentor-project" />
                <a href="https://akalabete.github.io/ip-adress-tracker-frontend-mentor-project/" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
