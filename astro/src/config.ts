import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://steamboatinspectionagency.com", // replace this with your deployed domain
  author: "Jules Harter",
  desc: "Adventures of a curious mind.",
  title: "Steamboat Inspection Agency",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 400,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Facebook",
    href: "https://facebook.com/steamboatinspectionagency",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/steamboatinspectionagency",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/julianemcassidy",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/steamboatinspectionagency",
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/steamboatinspectionagency",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/steamboatinspectionagency",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "Tumblr",
    href: "https://tumblr.com/steamboatinspectionagency",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
];
