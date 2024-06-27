import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function EnsVision() {
  const tasks = [
    {
      text: "Etude de projet et mise en place d'une suite de solutions numériques avec HTML, CSS, JS, GUIDAP.",
      keywords: ["HTML", "CSS", "JS"],
    },
    {
      text: "Approche itérative des besoins des utilisateurs et des parties prenantes pour garantir la qualité des solutions.",
      keywords: ["quality", "testing tasks", "user base"],
    },
    {
      text: "Responsivité et Dynamisme des pages web pour une meilleure expérience utilisateur.",
      keywords: ["website design"],
    },
    {
      text: "Intégration d'une solution adaptée pour la gestion d'un parc de canoe et paiements sécurisés en ligne.",
      keywords: ["secure payments", "GUIDAP"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Mission Freelance <span className="text-AAsecondary"></span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Avr 2024 - Jun 2024</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.ens.vision/", "_blank")}
          >
            www.ens.vision
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
