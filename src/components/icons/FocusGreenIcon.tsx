import { cn } from "@/lib/cn";

export default function FocusGreenIcon({
  className = "",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      height={117}
      viewBox="0 0 107 117"
      width={107}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "h-[98px] w-[89px] animate-[scalePulseSoft_1.5s_ease-in-out_infinite] md:h-[117px] md:w-[107px]",
        className,
      )}
      {...props}
    >
      <g filter="url(#filter0_d_9250_4781)">
        <rect
          fill="#C3FFD9"
          height="52.0057"
          rx="26.0028"
          width="52.0057"
          x="27.2065"
          y="3.19388"
        />
        <rect
          height="52.0057"
          rx="26.0028"
          stroke="#16A34A"
          strokeWidth="4.41291"
          width="52.0057"
          x="27.2065"
          y="3.19388"
        />
        <circle
          cx="53.2091"
          cy="29.1967"
          r="24.933"
          stroke="#16A34A"
          strokeWidth="1.32387"
        />
        <path
          d="M52.7768 40.9874H45.3961V17.0701H53.1038C55.4239 17.0701 57.4092 17.5489 59.0598 18.5066C60.7103 19.4564 61.9755 20.8228 62.8552 22.6057C63.735 24.3808 64.1749 26.5062 64.1749 28.9821C64.1749 31.4734 63.7311 33.6184 62.8436 35.4168C61.956 37.2075 60.6636 38.5856 58.9664 39.551C57.2691 40.5086 55.2059 40.9874 52.7768 40.9874ZM48.2923 38.4182H52.59C54.5675 38.4182 56.2064 38.0367 57.5066 37.2737C58.8067 36.5107 59.7761 35.4246 60.4145 34.0154C61.0529 32.6062 61.3721 30.9285 61.3721 28.9821C61.3721 27.0512 61.0568 25.389 60.4261 23.9954C59.7955 22.594 58.8535 21.5196 57.6 20.7722C56.3465 20.017 54.7855 19.6394 52.917 19.6394H48.2923V38.4182Z"
          fill="#16A34A"
        />
        <path
          d="M54.3604 65.2725C53.8028 66.2375 52.4618 66.2979 51.8066 65.4531L51.6855 65.2725L46.6523 56.5547C46.0579 55.525 46.8013 54.2383 47.9902 54.2383L58.0566 54.2383C59.1712 54.2385 59.8943 55.3696 59.4902 56.3594L59.3936 56.5547L54.3604 65.2725Z"
          fill="#16A34A"
          stroke="#16A34A"
          strokeWidth="0.441291"
        />
      </g>
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="115.278"
          id="filter0_d_9250_4781"
          width="106.419"
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
            result="effect1_dropShadow_9250_4781"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_9250_4781"
            mode="normal"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
