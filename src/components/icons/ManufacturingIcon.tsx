export default function ManufacturingIcon(
  props: React.SVGProps<SVGSVGElement>,
) {
  const { className, ...rest } = props;
  const mergedClassName = ["text-slate-400", className]
    .filter(Boolean)
    .join(" ");

  return (
    <svg
      fill="none"
      height={20}
      viewBox="0 0 20 20"
      width={20}
      xmlns="http://www.w3.org/2000/svg"
      className={mergedClassName}
      {...rest}
    >
      <rect
        height={5}
        rx="2.5"
        stroke="currentColor"
        strokeWidth="0.75"
        width="17.5"
        x="1.25"
        y={13}
      />
      <circle cx="4.89551" cy="15.5" r="1.25" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="9.89551" cy="15.5" r="1.25" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="14.8955" cy="15.5" r="1.25" stroke="currentColor" strokeWidth="0.75" />
      <path d="M16 1H4V9.4V13H16L16 9.4L16 1Z" stroke="currentColor" strokeWidth="0.75" />
      <rect height={4} stroke="currentColor" strokeWidth="0.75" width={4} x={8} y={1} />
    </svg>
  );
}
