import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import { getSanityImageURL } from "@utils/helpers";
import type React from "react";
import type { HTMLAttributes } from "astro/types";
import type { AnchorHTMLAttributes } from "react";

export interface Props {
  href?: string;
  frontmatter: {
    title: string,
    publishedAt: string,
    description: string,
    mainImage: string,
    mainImageAlt: string,
  };
  secHeading?: boolean;
}

export interface PROPS extends Props, HTMLAttributes<any>, AnchorHTMLAttributes<any> {

}

export default function Card({ href, frontmatter, secHeading = true }: PROPS) {
  const { title, publishedAt, mainImage, mainImageAlt, description } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-xl font-body not-italic text-center no-underline mt-4 -mb-1",
  };

  return (
    <a
      href={href}
      className="inline-block text-lg font-body text-skin-body no-underline"
    >
      <div className="w-64 h-128 bg-card/20 sm:w-72">
        <img 
          src={getSanityImageURL(mainImage).width(288).height(240).fit("crop").url()}
          alt={mainImageAlt}
         />
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
        <span className="flex justify-center">
          <Datetime datetime={publishedAt} />
        </span>
        <p className="mt-0.5 px-2 pb-2">{description}</p>
      </div>
    </a>
  );
}
