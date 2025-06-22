import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function LesGrandsChenes() {
  const tasks = [
    {
      text: "Site vitrine pour location de gîtes et chambres d'hôtes. Développement front-end thème Wordpress custom.",
      keywords: ["front-end", "vitrine", "JS", "WordPress"],
    },
    {
      text: "Design responsive et dynamique pour une meilleure expérience utilisateur.",
      keywords: ["HTML", "CSS", "Responsive", "dynamique", "expérience utilisateur"],
    },
    {
      text: "Optimisation des images, du SEO et des métadatas.",
      keywords: ["SEO", "métadatas", "optimisation", "images"],
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
          <span className="font-mono text-xs text-gray-500">Mars - Avril 2024</span>
          <span className="font-mono text-xs text-AAsecondary hover:cursor-pointer" style={{ fontSize: "0.6rem" }}
           // set on click to open the website
           onClick={() => window.open("https://www.lesgrandschenes.info/", "_blank")}
          >
            www.les-grands-chenes.info
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
