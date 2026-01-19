import { cn } from "@/lib/cn";

export default function BackToTopIcon({
  className = "",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 18 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path
        d="M16.0998 10.25L9.6998 3.84995V23.05H8.1998V3.84995L1.7998 10.25L0.799805 9.14995L8.9998 0.949951L17.1998 9.14995L16.0998 10.25Z"
        fill="currentColor"
      />
    </svg>
  );
}
