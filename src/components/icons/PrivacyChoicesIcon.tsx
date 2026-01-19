import { cn } from "@/lib/cn";

export default function PrivacyChoicesIcon({
  className = "",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      height={24}
      viewBox="0 0 48 24"
      width={48}
      xmlns="http://www.w3.org/2000/svg"
      className={cn("flex w-6", className)}
      {...props}
    >
      <g clipPath="url(#clip0_6373_1758)">
        <rect
          height="22.4"
          rx="11.2"
          stroke="#fff"
          strokeWidth="1.6"
          width="46.4"
          x="0.8"
          y="0.8"
        />
        <path
          d="M22.0667 23.2L28.6 0.8H36C42.1856 0.8 47.2 5.81441 47.2 12C47.2 18.1856 42.1856 23.2 36 23.2H22.0667Z"
          fill="#fff"
          stroke="#fff"
          strokeWidth="1.6"
        />
        <path
          d="M7.12019 11.4853L11.3628 15.7279L19.8481 7.24264"
          stroke="#fff"
          strokeWidth="1.6"
        />
        <path
          d="M39.228 16.2426L30.7427 7.75732"
          stroke="#172554"
          strokeWidth="1.6"
        />
        <path
          d="M39.228 7.75739L30.7427 16.2427"
          stroke="#172554"
          strokeWidth="1.6"
        />
      </g>
      <defs>
        <clipPath id="clip0_6373_1758">
          <rect fill="#fff" height={24} width={48} />
        </clipPath>
      </defs>
    </svg>
  );
}
