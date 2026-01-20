import clsx from "clsx";

type Props = {
  open: boolean;
  active: boolean;
  className?: string;
};

export default function ReliabilityFaqChevronIcon({
  open,
  active,
  className,
}: Props) {
  return (
    <svg
      className={clsx(
        "transition-transform duration-150 ease-out",
        open ? "-rotate-90" : "rotate-90",
        className,
      )}
      fill="none"
      height="14"
      viewBox="0 0 9 14"
      width="9"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M1 1.35364L7 7.35364L1 13.3536"
        stroke={active ? "#2563eb" : "#94A3B8"}
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
    </svg>
  );
}
