import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function EnsVision() {
  const tasks = [
    {
      text: "Etude de projet et mise en place d'une suite de solutions numériques avec HTML, CSS, JS, GUIDAP.",
      keywords: ["projet", "solutions","HTML","CSS","JS", "GUIDAP"],
    },
    {
      text: "Approche itérative des besoins des utilisateurs et des parties prenantes pour garantir la qualité des solutions.",
      keywords: ["itérative", "besoins", "qualité", "solutions"],
    },
    {
      text: "Responsivité et Dynamisme des pages web pour une meilleure expérience utilisateur.",
      keywords: ["responsivité", "dynamisme", "expérience utilisateur"],
    },
    {
      text: "Intégration d'une solution adaptée pour la gestion d'un parc de canoe et paiements sécurisés en ligne.",
      keywords: ["paiements sécurisés", "solution adaptée", "gestion d'un parc"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Webmaster <span className="text-AAsecondary"></span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Avr 2024 - Juin 2024</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.hdm-canoe.fr", "_blank")}
          >
            www.hdm-canoe.fr
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
