"use client";

import { useLocale, useTranslations } from "next-intl";
import { NavItem } from "../nav.config";
import { Locale } from "@/i18n.config";
import Link from "next/link";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

export default function MenuSubItems(navItem: NavItem) {
  const locale = useLocale() as Locale;
  const t = useTranslations("SiteNav");

  if (navItem.id === "solutions") {
    return (
      <div className="animate-[fadeIn_1s_both] relative flex flex-col bg-slate-100 px-4 py-4">
        <article className="flex flex-col gap-y-2 pb-4">
          <div className="flex w-full flex-col gap-8">
            {navItem.subItems?.map((subItem) => {
              const Icon = subItem.icon;
              return (
                <div key={subItem.id} className="flex w-full flex-col gap-4">
                  <Link
                    className="group flex w-full items-center gap-2 "
                    href={subItem.href![locale]}
                  >
                    <figure className="flex h-8 w-8 items-center justify-center rounded-[2px] border border-neutral-200 bg-white lg:bg-transparent">
                      {Icon}
                    </figure>
                    <article className="flex w-full flex-1 flex-col">
                      <div className="flex items-center gap-2">
                        <p className="text-slate-500 transition-all duration-150 group-hover:text-blue-600 lg:font-semibold lg:text-slate-700 text-body-sm">
                          {t(subItem.labelMessageKey)}
                        </p>
                        <ArrowRightIcon />
                      </div>
                    </article>
                  </Link>
                  <div className="ml-4 flex w-full flex-col gap-3">
                    {subItem.subItems?.map((subSubItem) => {
                      const SubIcon = subSubItem.icon;
                      return (
                        <Link
                          key={subSubItem.id}
                          className="group flex w-full items-center gap-2 "
                          href={subSubItem.href![locale]}
                        >
                          <figure className="flex h-8 w-8 items-center justify-center rounded-[2px] border border-neutral-200 bg-white lg:bg-transparent">
                            {SubIcon}
                          </figure>
                          <article className="flex w-full flex-1 flex-col">
                            <div className="flex items-center gap-2">
                              <p className="text-slate-500 transition-all duration-150 group-hover:text-blue-600 lg:font-semibold lg:text-slate-700 text-body-sm">
                                {t(subSubItem.labelMessageKey)}
                              </p>
                              <ArrowRightIcon />
                            </div>
                            {subSubItem.descriptionMessageKey && (
                              <p className="text-slate-500 text-tag">
                                {t(subSubItem.descriptionMessageKey)}
                              </p>
                            )}
                          </article>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </div>
    );
  }

  if (navItem.id === "pricing") {
    return (
      <div className="animate-[fadeIn_1s_both] relative flex flex-col bg-slate-100 px-4 py-4">
        <article className="flex flex-col gap-y-2 pb-4">
          <div className="flex w-full flex-col gap-4">
            {navItem.subItems?.map((subItem) => {
              const Icon = subItem.icon;
              return (
                <div key={subItem.id} className="flex w-full flex-col gap-4">
                  <Link
                    className="group flex w-full items-center gap-2 "
                    href={subItem.href![locale]}
                  >
                    <figure className="flex h-8 w-8 items-center justify-center rounded-[2px] border border-neutral-200 bg-white lg:bg-transparent">
                      {Icon}
                    </figure>
                    <article className="flex w-full flex-1 flex-col">
                      <div className="flex items-center gap-2">
                        <p className="text-slate-500 transition-all duration-150 group-hover:text-blue-600 lg:font-semibold lg:text-slate-700 text-body-sm">
                          {t(subItem.labelMessageKey)}
                        </p>
                        <ArrowRightIcon />
                      </div>
                    </article>
                  </Link>
                </div>
              );
            })}
          </div>
        </article>
      </div>
    );
  }

  if (navItem.id === "company") {
    return (
      <div className="animate-[fadeIn_1s_both] relative flex flex-col bg-slate-100 px-4 py-4">
        <article className="flex flex-col gap-y-2 pb-4">
          <div className="flex w-full flex-col gap-8">
            {navItem.subItems?.map((subItem) => (
              <div key={subItem.id} className="flex w-full flex-col gap-4">
                <p className="uppercase text-slate-500 text-body-sm">
                  {t(subItem.labelMessageKey)}
                </p>
                {subItem.id === "aboutTractian" &&
                  subItem.subItems?.map((subSubItem) => {
                    const Icon = subSubItem.icon;
                    return (
                      <div key={subSubItem.id}>
                        <a
                          className="group ml-4 flex flex-row items-center gap-4 lg:ml-0 lg:w-[186px] lg:flex-col lg:items-start lg:gap-3 "
                          href={subSubItem.href?.[locale]}
                        >
                          <figure className="h-[90px] w-[160px] rounded-[2px] lg:h-[110px] lg:w-[186px]">
                            {Icon}
                          </figure>
                          <article className="flex w-full flex-1 flex-col">
                            <p className="font-medium text-slate-500 text-body-md lg:text-slate-700">
                              {t(subSubItem.labelMessageKey)}
                            </p>
                          </article>
                        </a>
                      </div>
                    );
                  })}
                {subItem.id !== "aboutTractian" &&
                  subItem.subItems?.map((subSubItem) => {
                    const SubIcon = subSubItem.icon;
                    return (
                      <div key={subSubItem.id}>
                        <a
                          className="group flex w-full items-center gap-2 "
                          href={subSubItem.href?.[locale]}
                        >
                          <figure className="flex h-8 w-8 items-center justify-center rounded-[2px] border border-neutral-200 bg-white lg:bg-transparent">
                            {SubIcon}
                          </figure>
                          <article className="flex w-full flex-1 flex-col">
                            <div className="flex items-center gap-2">
                              <p className="text-slate-500 transition-all duration-150 group-hover:text-blue-600 lg:font-semibold lg:text-slate-700 text-body-sm">
                                {t(subSubItem.labelMessageKey)}
                              </p>
                              <ArrowRightIcon />
                            </div>
                          </article>
                        </a>
                      </div>
                    );
                  })}
              </div>
            ))}
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="animate-[fadeIn_1s_both] relative flex flex-col bg-slate-100 px-4 py-4">
      <article className="flex flex-col gap-y-2 pb-4">
        <div className="flex w-full flex-col gap-8">
          {navItem.subItems?.map((subItem) => (
            <div key={subItem.id} className="flex w-full flex-col gap-4">
              <p className="uppercase text-slate-500 text-body-sm">
                {t(subItem.labelMessageKey)}
              </p>
              {subItem.subItems?.map((subSubItem) => {
                const SubIcon = subSubItem.icon;
                return (
                  <div key={subSubItem.id}>
                    <a
                      className="group flex w-full items-center gap-2 "
                      href={subSubItem.href![locale]}
                    >
                      <figure className="flex h-8 w-8 items-center justify-center rounded-[2px] border border-neutral-200 bg-white lg:bg-transparent">
                        {SubIcon}
                      </figure>
                      <article className="flex w-full flex-1 flex-col">
                        <div className="flex items-center gap-2">
                          <p className="text-slate-500 transition-all duration-150 group-hover:text-blue-600 lg:font-semibold lg:text-slate-700 text-body-sm">
                            {t(subSubItem.labelMessageKey)}
                          </p>
                          <ArrowRightIcon />
                        </div>
                      </article>
                    </a>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
