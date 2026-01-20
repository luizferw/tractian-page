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
      <div className="absolute left-0 top-0 z-50 mt-[70px] w-full px-2 sm:px-0 lg:left-0 lg:ml-0 bg-slate-50">
        <div className="relative lg:px-2 shadow-lg">
          <div className="absolute inset-0 h-full w-full" />
          <div className="relative z-30 mx-auto w-full px-8 pb-12 pt-8 max-w-7xl">
            <div className="flex w-full gap-4 lg:justify-between">
              {navItem.subItems?.map((subItem) => {
                const Icon = subItem.icon;
                return (
                  <div
                    key={subItem.id}
                    className="animate-[fadeIn_0.8s_both] flex w-full flex-col gap-6 border-l border-slate-300 pl-4"
                  >
                    <Link
                      className="group flex w-full items-center gap-2 "
                      href={subItem.href![locale]}
                    >
                      <figure className="flex h-8 w-8 items-center justify-center rounded-[2px] border border-neutral-200 bg-white lg:bg-transparent">
                        {Icon}
                      </figure>
                      <article className="flex w-full flex-1 flex-col">
                        <div className="flex items-center gap-2">
                          <p className="text-slate-500 transition-all duration-150 group-hover:text-blue-600 lg:font-semibold lg:text-slate-700 text-body-lg">
                            {t(subItem.labelMessageKey)}
                          </p>
                          <svg
                            fill="none"
                            height={17}
                            viewBox="0 0 23 17"
                            width={23}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5 text-blue-600 opacity-0 transition-all duration-150 group-hover:opacity-100"
                          >
                            <path
                              d="M22.1 8.3L13.9 16.5L12.8 15.4L19.2 9H0V7.5H19.2L12.8 1.1L13.9 0L22.1 8.3Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </article>
                    </Link>
                    <div className="flex w-full flex-col gap-4">
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
          </div>
        </div>
        <div className="absolute h-screen w-full bg-black/60 backdrop-blur-[1px]" />
      </div>
    );
  }

  if (navItem.id === "whoWeServe") {
    return (
      <div className="absolute left-0 top-0 z-50 mt-[70px] w-full px-2 sm:px-0 lg:left-0 lg:ml-0 bg-slate-50">
        <div className="relative lg:px-2 shadow-lg">
          <div className="absolute inset-0 h-full w-full" />
          <div className="relative z-30 mx-auto w-full px-8 pb-12 pt-8 max-w-7xl">
            <div className="flex w-full gap-4 lg:justify-between">
              {navItem.subItems?.map((subItem) => {
                const isSector = subItem.id === "bySector";
                return (
                  <div
                    key={subItem.id}
                    className={`animate-[fadeIn_0.8s_both] flex flex-col gap-6 border-l border-slate-300 pl-4 w-full${
                      isSector ? "" : " max-w-[25%]"
                    }`}
                  >
                    <p className="text-slate-500 text-body-sm">
                      {t(subItem.labelMessageKey)}
                    </p>
                    <div
                      className={
                        isSector
                          ? "w-full gap-4 grid grid-cols-3"
                          : "w-full gap-4 flex flex-col"
                      }
                    >
                      {subItem.subItems?.map((subSubItem) => {
                        const SubIcon = subSubItem.icon;
                        return (
                          <a
                            key={subSubItem.id}
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
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="absolute h-screen w-full bg-black/60 backdrop-blur-[1px]" />
      </div>
    );
  }

  if (navItem.id === "resources") {
    return (
      <div className="absolute left-0 top-0 z-50 mt-[70px] w-full px-2 sm:px-0 lg:left-0 lg:ml-0 bg-black/60 backdrop-blur-[1px]">
        <div className="relative lg:px-2 ">
          <div className="absolute inset-0 h-full w-full" />
          <div className="relative z-30 mx-auto w-full px-8 pb-12 pt-8 max-w-[970px] bg-slate-50">
            <div className="flex w-full gap-4 lg:justify-between">
              {navItem.subItems?.map((subItem) => {
                const isCustomerHub = subItem.id === "customerHub";
                return (
                  <div
                    key={subItem.id}
                    className={`animate-[fadeIn_0.8s_both] flex flex-col gap-6 border-l border-slate-300 pl-4 w-full${
                      isCustomerHub ? " max-w-[30%]" : ""
                    }`}
                  >
                    <p className="text-slate-500 text-body-sm">
                      {t(subItem.labelMessageKey)}
                    </p>
                    <div
                      className={
                        isCustomerHub
                          ? "w-full gap-4 flex flex-col"
                          : "w-full gap-4 grid grid-cols-3"
                      }
                    >
                      {subItem.subItems?.map((subSubItem) => {
                        const SubIcon = subSubItem.icon;
                        return (
                          <a
                            key={subSubItem.id}
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
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="absolute h-screen w-full bg-black/60 backdrop-blur-[1px]" />
      </div>
    );
  }

  if (navItem.id === "company") {
    return (
      <div className="absolute left-0 top-0 z-50 mt-[70px] w-full px-2 sm:px-0 lg:left-0 lg:ml-0 bg-black/60 backdrop-blur-[1px]">
        <div className="relative lg:px-2 ">
          <div className="absolute inset-0 h-full w-full" />
          <div className="relative z-30 mx-auto w-full px-8 pb-12 pt-8 max-w-[970px] bg-slate-50">
            <div className="flex w-full gap-4 lg:justify-between">
              {navItem.subItems?.map((subItem) => {
                const isAbout = subItem.id === "aboutTractian";
                return (
                  <div
                    key={subItem.id}
                    className={`animate-[fadeIn_0.8s_both] flex flex-col gap-6 border-l border-slate-300 pl-4${
                      isAbout ? " w-full" : " w-[40%]"
                    }`}
                  >
                    <p className="text-slate-500 text-body-md">
                      {t(subItem.labelMessageKey)}
                    </p>
                    <div
                      className={
                        isAbout
                          ? "flex w-full flex-col gap-4 lg:flex-row"
                          : "flex w-full flex-col gap-4"
                      }
                    >
                      {subItem.subItems?.map((subSubItem) => {
                        const SubIcon = subSubItem.icon;
                        return (
                          <a
                            key={subSubItem.id}
                            className={
                              isAbout
                                ? "group ml-4 flex flex-row items-center gap-4 lg:ml-0 lg:w-[186px] lg:flex-col lg:items-start lg:gap-3 "
                                : "group flex w-full items-center gap-2 "
                            }
                            href={subSubItem.href?.[locale]}
                          >
                            <figure
                              className={
                                isAbout
                                  ? "h-[90px] w-[160px] rounded-[2px] lg:h-[110px] lg:w-[186px]"
                                  : "flex h-8 w-8 items-center justify-center rounded-[2px] border border-neutral-200 bg-white lg:bg-transparent"
                              }
                            >
                              {SubIcon}
                            </figure>
                            <article className="flex w-full flex-1 flex-col">
                              {isAbout ? (
                                <p className="font-medium text-slate-500 text-body-md lg:text-slate-700">
                                  {t(subSubItem.labelMessageKey)}
                                </p>
                              ) : (
                                <div className="flex items-center gap-2">
                                  <p className="text-slate-500 transition-all duration-150 group-hover:text-blue-600 lg:font-semibold lg:text-slate-700 text-body-sm">
                                    {t(subSubItem.labelMessageKey)}
                                  </p>
                                  <svg
                                    fill="none"
                                    height={17}
                                    viewBox="0 0 23 17"
                                    width={23}
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3.5 w-3.5 text-blue-600 opacity-0 transition-all duration-150 group-hover:opacity-100"
                                  >
                                    <path
                                      d="M22.1 8.3L13.9 16.5L12.8 15.4L19.2 9H0V7.5H19.2L12.8 1.1L13.9 0L22.1 8.3Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </div>
                              )}
                            </article>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="absolute h-screen w-full bg-black/60 backdrop-blur-[1px]" />
      </div>
    );
  }

  if (navItem.id === "pricing") {
    return (
      <div className="absolute left-0 top-0 z-50 mt-[70px] w-full px-2 sm:px-0 lg:left-0 lg:ml-0 bg-black/60 backdrop-blur-[1px]">
        <div className="relative lg:px-2 ">
          <div className="absolute inset-0 h-full w-full" />
          <div className="relative z-30 mx-auto w-full px-8 pb-12 pt-8 max-w-[970px] bg-slate-50">
            <div className="flex w-full gap-4 lg:justify-between">
              {navItem.subItems?.map((subItem) => {
                const Icon = subItem.icon;
                return (
                  <div
                    key={subItem.id}
                    className="animate-[fadeIn_0.8s_both] flex w-full border-l border-slate-300 pl-4"
                  >
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
                          <svg
                            fill="none"
                            height={17}
                            viewBox="0 0 23 17"
                            width={23}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5 text-blue-600 opacity-0 transition-all duration-150 group-hover:opacity-100"
                          >
                            <path
                              d="M22.1 8.3L13.9 16.5L12.8 15.4L19.2 9H0V7.5H19.2L12.8 1.1L13.9 0L22.1 8.3Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </article>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="absolute h-screen w-full bg-black/60 backdrop-blur-[1px]" />
      </div>
    );
  }
}
