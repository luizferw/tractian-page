import Image from "next/image";
import G2BadgeIcon from "@/components/icons/G2BadgeIcon";
import QuoteIcon from "@/components/icons/QuoteIcon";

export function TestimonialCard({
  quote,
  name,
  role,
  company,
  imageSrc,
  showG2Badge,
}: {
  quote: string;
  name: string;
  role: string;
  company?: string;
  imageSrc: string;
  showG2Badge?: boolean;
  grabCursor?: boolean;
}) {
  return (
    <div className="flex-1 flex mr-6 sm:mr-0 h-auto min-w-[486px] max-w-[486px] sm:min-w-auto sm:max-w-full flex-col gap-4">
      <div className="flex w-full items-center gap-4">
        <QuoteIcon />
        {showG2Badge ? <G2BadgeIcon /> : null}
      </div>

      <p className="h-full text-slate-500 text-quote">{quote}</p>

      <div className="flex items-center gap-3 lg:justify-between">
        <figure className="flex h-12 w-12 items-center justify-center rounded-full lg:h-14 lg:w-14">
          <Image
            alt={name}
            src={imageSrc}
            width={56}
            height={56}
            className="h-full w-full rounded-full"
          />
        </figure>

        <article className="flex w-full flex-1 flex-col">
          <p className="font-bold text-body-sm">{name}</p>
          <p className="text-body-sm">{role}</p>
          {company ? <p className="font-bold text-body-sm">{company}</p> : null}
        </article>
      </div>
    </div>
  );
}
