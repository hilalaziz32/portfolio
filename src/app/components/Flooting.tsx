import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
} from "@tabler/icons-react";
import { SlSocialLinkedin } from "react-icons/sl";
import { SiFiverr } from "react-icons/si";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Linkedin",
      icon: (
        <SlSocialLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/mishal-manzoor-00991731a/",
    },
    {
        title: "GitHub",
        icon: (
          <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://github.com/mishalmkay",
      },

    {
      title: "Fiverr",
      icon: (
        <SiFiverr className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    // {
    //   title: "Facebook",
    //   icon: (
    //     <FaFacebookF className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#",
    // },
 
    // {
    //   title: "Instagram",
    //   icon: (
    //     <FaInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#",
    // },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

  ];
  return (
    <div className="flex items-center justify-center  w-full">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
