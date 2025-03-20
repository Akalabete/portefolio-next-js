import React, { forwardRef } from "react";
import Img from "../../../components/smallComp/image/Img";
import ArrowIcon from "../../../components/Icons/ArrowIcon";

const AboutMe = forwardRef<HTMLDivElement, React.PropsWithChildren<{}>>((props, ref) => {
  const technologies = [
    ["Next.js", "JavaScript (ES6+)", "Tailwind CSS", "WordPress"],
    ["Node.js", "TypeScript", "Bootstrap", "Vue.js"],
  ];

  return (
    <div ref={ref} id="aboutSection" data-aos="fade-up" className="snap-start flex flex-col items-center py-20 bg-AAprimary">
      {/* // ? 0.1 About Me */}
      <div className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px]">
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center mr-4">
            <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"} />
            <span className="text-AAsecondary font-Header text-sm sm:text-xl"> 01.</span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              Qui suis-je:
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>
        {/* // ? Paragraphs */}
        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm">
            <div className="font-Header">
              <span className="text-gray-400 ">
                Bonjour! Je m&apos;appelle Alexandre, passionné par le numérique et son écosystème, j&apos;aime écrire
                du code propre et des designs percutants. Mon parcours informatique a commencé quand j&apos;avais 10ans et
                que j&apos;apprenais les rudiments du basic. Je ne devais renouer avec cette passion que tardivement, en
                2022 où je poussais les portes d&apos;Open Classrooms, marquant le début de ma nouvelle carrière.
              </span>
            </div>
            <div className="font-Header">
              <span className="text-gray-400 ">
                Depuis la fin de mon parcours diplomant, j&apos;ai été amené à travailler sur différents secteurs, me permettant de 
                diversifier mon expertise dans le développement mobile et desktop. Dans ce vaste domaine du{" "}
                <span className="text-AAsecondary">web3</span>, je voudrais continuer à apprendre et à contribuer activement à 
                son avancée. Consolidant mon expérience au fur et à mesure de rencontres avec{" "}
                <span className="text-AAsecondary">l&apos;Ostal Numérique</span>, dans leur création de site vitrine,{" "}
                <span className="text-AAsecondary">HDM-canoë</span>, avec intégration de solutions de paiement et 
                réservations en ligne sur une base de loisirs nautique dans un camping. Où encore
                <span className="text-AAsecondary"> Hélène Lazowinsky</span> dans la création de sa galerie de peinture personnelle.
              </span>
            </div>
            <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">
                Je suis établi aujourd&apos;hui en tant que freelance, mais j&apos;aimerais poursuivre mon apprentissage de
                <span className="text-AAsecondary"> Développeur Concepteur d&apos;Application</span>, en alternance. 
                <span className="text-AAsecondary"> Curieux</span> par nature, j&apos;aime apprendre et les défis stimulants.
              </span>
            </div>

            <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">
                Voici les technologies que j&apos;appréhende le plus souvent dans mes projets:
              </span>
            </div>
            <div className="font-Header tracking-wide flex flex-row space-x-16">
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[0].map((tech, index) => {
                    return (
                      <div key={index} className="flex flex-row items-center space-x-2">
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[1].map((tech, index) => {
                    return (
                      <div key={index} className="flex flex-row items-center space-x-2">
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* // ? Image in Desktop and Tablet */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
            <div
              className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 
               translate-y-5 rounded"
            ></div>

            <div className="absolute w-5/6 h-5/6 rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Img
                src={"/photomoi.webp"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>
          {/* // ?Image in Mobile */}
          <div className="relative w-full h-48 md:hidden flex justify-center items-center">
            <div className="absolute w-48 h-full rounded translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Img
                src={"/photomoi.webp"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
            <div className="absolute w-48 h-full bg-AAsecondary opacity-10 md:opacity-60 rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AboutMe;