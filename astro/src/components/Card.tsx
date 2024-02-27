import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import { getSanityImageURL } from "@utils/helpers";

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
  key?: string;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, publishedAt, mainImage, mainImageAlt, description } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-xl font-body not-italic text-center no-underline mt-4",
  };

  const linkProps = {
    className: "inline-block text-lg font-body text-skin-body no-underline ease-in duration-150 hover:scale-105",
  };

  const divProps = {
    className: "w-64 h-128 bg-card/20 sm:w-72",
  };

  const imgProps = {
    className: "w-72 h-60",
  };

  const spanProps = {
    className: "flex justify-center",
  };

  const pProps = {
    className: "mt-0 px-2 pb-2",
  };

  return (
    <a
      href={href}
      {...linkProps}
    >
      <div {...divProps}>
        <img
          src={getSanityImageURL(mainImage).width(288).height(240).fit("crop").url()}
          alt={mainImageAlt}
          {...imgProps}
         />
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
        <span {...spanProps}>
          <Datetime datetime={publishedAt} />
        </span>
        <p {...pProps}>{description}</p>
      </div>
    </a>
  );
}
