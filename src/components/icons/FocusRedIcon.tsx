import { cn } from "@/lib/cn";

export default function FocusRedIcon({
  className = "",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      height={96}
      viewBox="0 0 89 96"
      width={89}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "h-[111px] w-[100px] animate-[scalePulseSoft_1.5s_ease-in-out_infinite] md:h-[121px] md:w-[110px]",
        className,
      )}
      {...props}
    >
      <g filter="url(#filter0_d_9250_4789)">
        <rect
          fill="#FFD2D2"
          height="35.4627"
          rx="17.7313"
          width="35.4627"
          x="26.5046"
          y="2.49201"
        />
        <rect
          height="35.4627"
          rx="17.7313"
          stroke="#DC2626"
          strokeWidth="3.00917"
          width="35.4627"
          x="26.5046"
          y="2.49201"
        />
        <circle
          cx="44.2364"
          cy="20.2234"
          r="17.0018"
          stroke="#DC2626"
          strokeWidth="0.90275"
        />
        <path
          d="M39.8365 26.9874H37.9899L43.3308 12.442H45.149L50.4899 26.9874H48.6433L44.2967 14.7431H44.1831L39.8365 26.9874ZM40.5183 21.3056H47.9615V22.8681H40.5183V21.3056Z"
          fill="#DC2626"
        />
        <path
          d="M45.1525 44.8984C44.6892 45.7009 43.531 45.7009 43.0677 44.8984L39.6357 38.9539C39.1724 38.1515 39.7515 37.1484 40.6781 37.1484L47.5422 37.1484C48.4688 37.1484 49.0479 38.1515 48.5846 38.9539L45.1525 44.8984Z"
          fill="#DC2626"
        />
      </g>
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="94.5128"
          id="filter0_d_9250_4789"
          width="88.4717"
          x={0}
          y="0.987427"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={25} />
          <feGaussianBlur stdDeviation="12.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0901961 0 0 0 0 0.145098 0 0 0 0 0.329412 0 0 0 0.5 0"
          />
          <feBlend
            in2="BackgroundImageFix"
            mode="normal"
            result="effect1_dropShadow_9250_4789"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_9250_4789"
            mode="normal"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
