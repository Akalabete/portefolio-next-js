import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function FeverTokens() {
  const tasks = [
    {
      text: "Rafraichissement du site de l'Ostal Numérique, tiers-lieu à Saint Aulaye.",
      keywords: ["Ostal Numérique", "tiers-lieu", "rafraichissement"],
    },
    {
      text: "Mise en avant des ateliers de l'association",
      keywords: ["Association", "ateliers"],
    },
    {
      text: "Création de la page d'accueil, avec thème Wordpress custom. Développement front-end.",
      keywords: ["front-end", "WordPress","page d'accueil"],
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
          <span className="font-mono text-xs text-gray-500">Mars 2024</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https:///www.fevertokens.io", "_blank")}
          >
            www.ostal24.com
          </span>
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
