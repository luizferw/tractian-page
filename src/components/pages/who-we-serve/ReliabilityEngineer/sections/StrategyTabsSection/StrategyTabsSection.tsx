import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import StrategyTabsClient, { StrategyTabItem } from "./StrategyTabsClient";

export default function StrategyTabsSection() {
  const t = useTranslations("ReliabilityEngineer.StrategyTabsSection");
  const locale = useLocale();

  const tabs: StrategyTabItem[] = [
    {
      id: "confirmFailure",
      title: t("tabs.confirmFailure.title"),
      body: [
        t("tabs.confirmFailure.body.p1"),
        t("tabs.confirmFailure.body.p2"),
      ].filter(Boolean),
      Image: (
        <Image
          src={`/who-we-serve/${locale}/confirm-the-failure.png`}
          alt="Move from fire fighting to fire prevention"
          height={600}
          width={800}
          className="object-contain"
        />
      ),
    },
    {
      id: "proveStrategy",
      title: t("tabs.proveStrategy.title"),
      body: [t("tabs.proveStrategy.body.p1")].filter(Boolean),
      Image: (
        <Image
          src={`/who-we-serve/${locale}/prove-your-strategy.png`}
          alt="Streamline machine troubleshooting"
          height={600}
          width={800}
          className="object-contain"
        />
      ),
    },
    {
      id: "focusTime",
      title: t("tabs.focusTime.title"),
      body: [t("tabs.focusTime.body.p1"), t("tabs.focusTime.body.p2")].filter(
        Boolean,
      ),
      Image: (
        <>
          <Image
            src={`/who-we-serve/machines.png`}
            alt="Take work off your plate"
            height={350}
            width={600}
            className="object-contain"
          />
          <div className="absolute inset-0 h-full w-full">
            <figure className="animate-[fadeIn_1s_both] absolute left-[12%] top-1/2 flex -translate-y-1/2">
              <svg
                fill="none"
                height={121}
                viewBox="0 0 110 121"
                width={110}
                xmlns="http://www.w3.org/2000/svg"
                className="h-[86px] w-[79px] animate-[scalePulseSoft_1.5s_ease-in-out_infinite] md:h-[96px] md:w-[89px]"
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
            </figure>
            <figure className="animate-[fadeIn_1s_both] absolute left-[31%] top-[47%] flex -translate-y-1/2 md:left-[34%]">
              <svg
                fill="none"
                height={96}
                viewBox="0 0 89 96"
                width={89}
                xmlns="http://www.w3.org/2000/svg"
                className="h-[111px] w-[100px] animate-[scalePulseSoft_1.5s_ease-in-out_infinite] md:h-[121px] md:w-[110px]"
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
            </figure>
            <figure className="animate-[fadeIn_1s_both] absolute right-[29%] top-[51%] flex -translate-y-1/2 md:right-[31%]">
              <svg
                fill="none"
                height={117}
                viewBox="0 0 107 117"
                width={107}
                xmlns="http://www.w3.org/2000/svg"
                className="h-[98px] w-[89px] animate-[scalePulseSoft_1.5s_ease-in-out_infinite] md:h-[117px] md:w-[107px]"
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
            </figure>
            <figure className="animate-[fadeIn_1s_both] absolute right-[9%] top-[40%] flex -translate-y-1/2">
              <svg
                fill="none"
                height={121}
                viewBox="0 0 110 121"
                width={110}
                xmlns="http://www.w3.org/2000/svg"
                className="h-[102px] w-[92px] animate-[scalePulseSoft_1.5s_ease-in-out_infinite] md:h-[121px] md:w-[110px]"
              >
                <g filter="url(#filter0_d_9250_4773)">
                  <rect
                    fill="#DDECFF"
                    height="55.274"
                    rx="27.637"
                    width="55.274"
                    x="27.3451"
                    y="3.33255"
                  />
                  <rect
                    height="55.274"
                    rx="27.637"
                    stroke="#3B82F6"
                    strokeWidth="4.69024"
                    width="55.274"
                    x="27.3451"
                    y="3.33255"
                  />
                  <circle
                    cx="54.9817"
                    cy="30.9695"
                    r="26.4999"
                    stroke="#3B82F6"
                    strokeWidth="1.40707"
                  />
                  <path
                    d="M65.5485 25.5117H62.3236C62.1329 24.5841 61.7992 23.7692 61.3224 23.067C60.8542 22.3648 60.2821 21.7753 59.6059 21.2985C58.9384 20.8131 58.1972 20.449 57.3823 20.2062C56.5674 19.9635 55.7178 19.8421 54.8336 19.8421C53.2211 19.8421 51.7604 20.2496 50.4514 21.0645C49.151 21.8794 48.1151 23.08 47.3435 24.6665C46.5806 26.2529 46.1992 28.1991 46.1992 30.5051C46.1992 32.811 46.5806 34.7572 47.3435 36.3437C48.1151 37.9301 49.151 39.1308 50.4514 39.9457C51.7604 40.7606 53.2211 41.168 54.8336 41.168C55.7178 41.168 56.5674 41.0466 57.3823 40.8039C58.1972 40.5612 58.9384 40.2014 59.6059 39.7246C60.2821 39.2391 60.8542 38.6453 61.3224 37.9431C61.7992 37.2323 62.1329 36.4174 62.3236 35.4985H65.5485C65.3058 36.8595 64.8637 38.0775 64.2222 39.1525C63.5807 40.2274 62.7831 41.142 61.8295 41.8962C60.8759 42.6417 59.8053 43.2096 58.6176 43.5997C57.4386 43.9898 56.1773 44.1848 54.8336 44.1848C52.5623 44.1848 50.5424 43.63 48.7739 42.5204C47.0054 41.4107 45.614 39.833 44.5998 37.7871C43.5855 35.7412 43.0783 33.3138 43.0783 30.5051C43.0783 27.6963 43.5855 25.269 44.5998 23.2231C45.614 21.1772 47.0054 19.5994 48.7739 18.4898C50.5424 17.3801 52.5623 16.8253 54.8336 16.8253C56.1773 16.8253 57.4386 17.0204 58.6176 17.4105C59.8053 17.8006 60.8759 18.3727 61.8295 19.1269C62.7831 19.8725 63.5807 20.7827 64.2222 21.8577C64.8637 22.924 65.3058 24.142 65.5485 25.5117Z"
                    fill="#3B82F6"
                  />
                  <path
                    d="M56.4114 69.4294C55.6893 70.6802 53.884 70.6802 53.1619 69.4294L47.8125 60.164C47.0904 58.9133 47.9931 57.3499 49.4373 57.3499L60.1361 57.3499C61.5803 57.3499 62.4829 58.9133 61.7608 60.164L56.4114 69.4294Z"
                    fill="#3B82F6"
                  />
                </g>
                <defs>
                  <filter
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="119.38"
                    id="filter0_d_9250_4773"
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
                      result="effect1_dropShadow_9250_4773"
                    />
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_dropShadow_9250_4773"
                      mode="normal"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </figure>
          </div>
        </>
      ),
    },
    {
      id: "deepenExpertise",
      title: t("tabs.deepenExpertise.title"),
      body: [t("tabs.deepenExpertise.body.p1")].filter(Boolean),
      Image: (
        <Image
          src={`/who-we-serve/${locale}/get-insights.png`}
          alt="Cut through the noise, focus on what’s critical"
          height={800}
          width={920}
          className="object-contain"
        />
      ),
    },
  ];

  return (
    <section
      className="w-full bg-slate-100 px-4 py-12 lg:py-16"
      style={{ overflowAnchor: "none" }}
    >
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-6xl lg:gap-16">
        <article className="flex w-full flex-col gap-4">
          <p className="uppercase text-blue-600 text-body-md">{t("eyebrow")}</p>
          <h2 className="font-bold text-title-lg">{t("title")}</h2>
        </article>

        <StrategyTabsClient
          ariaLabel={t("aria.selectTab")}
          tabs={tabs}
          initialActiveId="confirmFailure"
        />
      </div>
    </section>
  );
}
