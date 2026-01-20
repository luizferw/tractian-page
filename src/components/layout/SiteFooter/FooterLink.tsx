interface FooterLinkProps {
  href: string;
  label: string;
  target?: string;
}

export default function FooterLink({ href, label, target }: FooterLinkProps) {
  return (
    <li className="animate-[fadeIn_1s_both] sm:animate-none py-2 sm:py-0">
      <a href={href} target={target}>
        <p className="sm:font-light text-slate-50 transition ease-in-out text-body-sm hover:text-blue-300 hover:brightness-125">
          {label}
        </p>
      </a>
    </li>
  );
}
