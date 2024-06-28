import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function IdealFresh() {
  const tasks = [
    {
      text: "Participation à la création du collectif Eulatech, développeurs & designer.",
      keywords: ["création", "collectif", "Eulatech","développeurs", "designer"],
    },
    {
      text: "Etude de projet, concrétisation.",
      keywords: ["projet", "concrétisation"],
    },
    {
      text: "Développement front-end, back-end, marketing, automatisation, design et prise de vue, notament par drones.",
      keywords: ["front-end", "back-end", "design", "marketing", "automatisation", "drones"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Développeur Front-end <span className="text-AAsecondary">@ Eulatech</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">depuis Juin 2024 </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.eulatech.fr", "_blank")}
          >
            www.eulatech.fr
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
            {/* Tasks Description 1 */}
            {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
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
