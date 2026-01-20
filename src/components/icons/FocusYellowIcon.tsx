import { cn } from "@/lib/cn";

export default function FocusYellowIcon({
  className = "",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      height={121}
      viewBox="0 0 110 121"
      width={110}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "h-[86px] w-[79px] animate-[scalePulseSoft_1.5s_ease-in-out_infinite] md:h-[96px] md:w-[89px]",
        className,
      )}
      {...props}
    >
      <g filter="url(#filter0_d_9250_4765)">
        <rect
          fill="#FFFAC0"
          height="59.9642"
          rx="29.9821"
          width="59.9642"
          x={25}
          y="0.987427"
        />
        <rect
          height="55.274"
          rx="27.637"
          stroke="#EAB308"
          strokeWidth="4.69024"
          width="55.274"
          x="27.3451"
          y="3.33255"
        />
        <circle
          cx="54.9817"
          cy="30.9695"
          r="26.4999"
          stroke="#EAB308"
          strokeWidth="1.40707"
        />
        <path
          d="M46.8699 43.5588V18.6238H55.5875C57.3245 18.6238 58.7571 18.9241 59.8853 19.5247C61.0136 20.1173 61.8537 20.9168 62.4056 21.9233C62.9576 22.9217 63.2336 24.0296 63.2336 25.2471C63.2336 26.3186 63.0428 27.2033 62.6613 27.9014C62.2879 28.5994 61.7928 29.1514 61.1759 29.5572C60.5672 29.9631 59.9056 30.2634 59.1914 30.4582V30.7017C59.9543 30.7504 60.7214 31.0183 61.4925 31.5053C62.2636 31.9923 62.9089 32.6903 63.4284 33.5994C63.9478 34.5085 64.2076 35.6205 64.2076 36.9355C64.2076 38.1855 63.9235 39.3096 63.3553 40.308C62.7871 41.3064 61.8902 42.0978 60.6646 42.6822C59.4389 43.2666 57.844 43.5588 55.8797 43.5588H46.8699ZM49.8894 40.8803H55.8797C57.8521 40.8803 59.2522 40.4988 60.0802 39.7358C60.9162 38.9647 61.3342 38.0312 61.3342 36.9355C61.3342 36.0913 61.1191 35.3121 60.6889 34.5978C60.2587 33.8754 59.6459 33.2991 58.8504 32.8689C58.055 32.4306 57.1134 32.2114 56.0258 32.2114H49.8894V40.8803ZM49.8894 29.5816H55.4901C56.3991 29.5816 57.219 29.403 57.9495 29.0459C58.6881 28.6887 59.2725 28.1855 59.7027 27.5361C60.141 26.8868 60.3602 26.1238 60.3602 25.2471C60.3602 24.1514 59.9787 23.222 59.2157 22.459C58.4527 21.6879 57.2433 21.3023 55.5875 21.3023H49.8894V29.5816Z"
          fill="#EAB308"
        />
      </g>
      <g filter="url(#filter1_d_9250_4765)">
        <path
          d="M56.4114 69.4294C55.6893 70.6802 53.884 70.6802 53.1619 69.4294L47.8125 60.164C47.0904 58.9133 47.9931 57.3499 49.4373 57.3499L60.1361 57.3499C61.5803 57.3499 62.4829 58.9133 61.7608 60.164L56.4114 69.4294Z"
          fill="#EAB308"
        />
      </g>
      <defs>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="109.964"
          id="filter0_d_9250_4765"
          width="109.964"
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
            result="effect1_dropShadow_9250_4765"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_9250_4765"
            mode="normal"
            result="shape"
          />
        </filter>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="63.0176"
          id="filter1_d_9250_4765"
          width="64.4561"
          x="22.5586"
          y="57.3499"
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
            result="effect1_dropShadow_9250_4765"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_9250_4765"
            mode="normal"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
