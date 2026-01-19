import { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  title: string;
  icon: ReactNode;
}

export default function SocialLink({ href, title, icon }: SocialLinkProps) {
  return (
    <a
      className="transition-all ease-in-out lg:hover:brightness-110 "
      href={href}
      target="_blank"
      title={title}
    >
      {icon}
    </a>
  );
}
