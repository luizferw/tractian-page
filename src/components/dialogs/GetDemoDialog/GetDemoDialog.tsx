"use client";

import CloseIcon from "@/components/icons/CloseIcon";
import { useGetDemoDialog } from "@/components/providers/GetDemoDialogProvider";
import { Button } from "@/components/ui/Button/Button";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import Form from "./Form/Form";
import { useTranslations } from "next-intl";
import { Fragment } from "react/jsx-runtime";

export default function GetDemoDialog() {
  const { isOpen, close } = useGetDemoDialog();
  const t = useTranslations("GetDemoDialog");

  function closeAndReset() {
    close();
  }

  return (
    <Dialog
      open={isOpen}
      onClose={closeAndReset}
      transition
      className="relative z-[999]"
    >
      <DialogBackdrop className="fixed inset-0 bg-slate-900/70" />

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <TransitionChild
            as={Fragment}
            enter="ease-in-out duration-150"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in-out duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="relative w-full shadow-xl md:w-auto">
              <div className="absolute right-3 top-3 z-20 size-6">
                <Button
                  onClick={closeAndReset}
                  variant={"ghost"}
                  aria-label={t("closeButton")}
                  className="h-3 !w-3 !p-0 rounded-[2px] text-slate-500 duration-default hover:bg-transparent hover:text-blue-600"
                >
                  <CloseIcon className="!size-3" />
                </Button>
              </div>

              <div className="flex max-w-3xl flex-col rounded-[2px] bg-white text-left">
                <div className="w-full bg-slate-50 px-6 py-8 md:px-16 lg:py-12">
                  <article className="mb-6 flex flex-col gap-y-2 px-5 text-center">
                    <DialogTitle className="font-semibold text-title-md">
                      {t("title")}
                    </DialogTitle>
                    <p className="text-slate-500 text-body-md">
                      {t("description")}
                    </p>
                  </article>
                  <Form />
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  );
}
