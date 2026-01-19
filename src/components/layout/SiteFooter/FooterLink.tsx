interface FooterLinkProps {
  href: string;
  label: string;
  target?: string;
}

export default function FooterLink({ href, label, target }: FooterLinkProps) {
  return (
    <li>
      <a href={href} target={target}>
        <p className="font-light text-slate-50 transition ease-in-out text-body-sm hover:text-blue-300 hover:brightness-125">
          {label}
        </p>
      </a>
    </li>
  );
}
