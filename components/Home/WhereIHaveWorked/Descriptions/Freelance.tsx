import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Freelance() {
  const tasks = [
    {
      text: "Développeur Freelance indépendant, devis, facturation, gestion de projet, développement front-end et back-end.",
      keywords: ["Freelance", "devis", "facturation", "gestion de projet", "front-end", "back-end"],
    },
    {
      text: "Perfectionnement et apprentissage des technologies web, notamment React, Next.js, Node.js, Express, MongoDB.",
      keywords: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
    },
    {
      text: "Perfectionnement des languages web courants, HTML, CSS, JS, PHP.",
      keywords: ["HTML", "CSS", "JS", "PHP"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Développeur Front-End <span className="text-AAsecondary">@ Freelance</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Depuis Février 2023</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
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
