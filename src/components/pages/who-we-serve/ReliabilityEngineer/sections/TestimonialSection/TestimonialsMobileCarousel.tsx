"use client";

import type { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export default function TestimonialsMobileCarousel({
  children,
}: {
  children: ReactNode[];
}) {
  return (
    <div className="flex w-full sm:hidden">
      <div className="relative flex w-full">
        <section className="relative mx-auto w-full max-w-full">
          <div className="relative z-20 max-w-full select-none">
            <Swiper
              modules={[Pagination, Navigation]}
              loop
              pagination={{ clickable: true }}
              slidesPerView={"auto"}
              spaceBetween={0}
              lazyPreloadPrevNext={1}
              wrapperClass="ml-4"
            >
              {children.map((child, idx) => (
                <SwiperSlide
                  style={{
                    maxWidth: "486px",
                  }}
                  key={idx}
                  className="mb-20 mr-6 !max-w-[486px)]"
                >
                  {child}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
    </div>
  );
}
