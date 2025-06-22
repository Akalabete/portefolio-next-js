import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function LesNotes() {
  const tasks = [
    {
      text: "Création d'un site vitrine pour un musicien professionnel, afin de promouvoir son activté.",
      keywords: ["site vitrine", "musicien professionnel", "promouvoir"],
    },
    {
      text: "intégration de vidéos depuis youtube et création de design personnalisé",
      keywords: ["intégration", "vidéos", "design personnalisé"],
    },
    {
      text: "Optimisation du référencement naturel et des performances du site.",
      keywords: ["Optimisation", "référencement naturel", "performances"],
    },
  ];
  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col spacey-y-2">
        {/* Title */}
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Webmaster <span className="text-AAsecondary">@ les notes</span>
        </span>
        {/* Date */}
        <span className="font-mono text-xs text-gray-500">June - July 2018</span>
        <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.les-notes-de-mon-moulin.fr", "_blank")}
          >
            www.les-notes-de-mon-moulin.fr
          </span>
      </div>
      <div className="flex flex-col space-y-4 sm:text-sm text-xs">
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
  );
}
