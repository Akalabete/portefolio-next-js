import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function OpenClassrooms() {
  const tasks = [
    {
      text: "Apprentissage des languages de programmation web, HTML, CSS, JS, REACTJs",
      keywords: ["ReactJS", "CSS", "JS", "HTML"],
    },
    {
      text: "Organisation, plannification et gestion de projet en méthodes Agiles.",
      keywords: ["Agiles", "gestion de projet", "plannification", "organisation"],
    },
    {
      text: "Divers projets structurés en utilisant notamment, NextJs, Redux, Git...",
      keywords: ["NextJs", "Redux", "Git"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Etudiant <span className="text-AAsecondary">@ OpenClassrooms</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Février 2023 - Novembre 2023</span>
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
