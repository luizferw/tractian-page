import { ReactNode } from "react";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import FooterLink from "./FooterLink";

export interface FooterLinkItem {
  href: string;
  label: string;
  target?: string;
}

interface FooterSectionProps {
  title: string;
  links: FooterLinkItem[];
  extraContent?: ReactNode;
}

export default function FooterSection({ title, links, extraContent }: FooterSectionProps) {
  return (
    <article className="sm:w-full sm:col-span-1 ">
      <p className="mb-2 hidden font-semibold uppercase text-slate-50 text-body-md sm:block">
        {title}
      </p>
      <button
        className=" mb-2 flex w-full items-center justify-between border-b border-blue-900 pb-4 sm:hidden"
        type="button"
      >
        <h6 className="text-ellipsis whitespace-nowrap font-bold uppercase text-slate-50 text-body-sm">
          {title}
        </h6>
        <ChevronDownIcon className="h-3 w-3 text-blue-50 transition-all" />
      </button>
      <ul className="hidden gap-2 sm:grid sm:grid-cols-1">
        {links.map((link) => (
          <FooterLink key={link.href + link.label} {...link} />
        ))}
      </ul>
      {extraContent}
    </article>
  );
}
