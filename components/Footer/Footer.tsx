import React from "react";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";

const ClickableIcon = (props) => {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      <props.Icon className="w-5 h-5 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer" />
    </a>
  );
};

const IconsData = [
  { href: "https://github.com/Akalabete", Icon: GithubIcon },
  { href: "https://www.linkedin.com/in/lacour-alexandre", Icon: LinkedinIcon },
];

export default function Footer(props: { githubUrl: string; hideSocialsInDesktop: boolean }) {
  return (
    <div className="bg-AAprimary flex flex-col justify-center items-center py-8 space-y-4">
      {/* // ? Pour me suivre */}
      <div className={`flex flex-row space-x-8 ${props.hideSocialsInDesktop ? "lg:hidden" : ""}`}>
        {IconsData.map((iconData, index) => (
          <ClickableIcon key={index} href={iconData.href} Icon={iconData.Icon} />
        ))}
      </div>
      <div className="flex flex-col font-mono justify-center items-center text-gray-400 text-sm space-y-2">
        <span className="group-hover:text-AAsecondary sm:text-sm text-xs">
          Dev&apos;your Synergy
        </span>
        <span className="text-xs flex flex-row items-center space-x-2 group-hover:text-AAsecondary">
          <GithubIcon className="w-4 h-4 text-gray-400 fill-current group-hover:text-AAsecondary" />
          <span>Source code - Github</span>
        </span>
      </div>
    </div>
  );
}
