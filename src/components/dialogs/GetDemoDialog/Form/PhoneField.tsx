"use client";

import { PhoneInput } from "@/components/ui/PhoneInput/PhoneInput";
import clsx from "clsx";

type CountryOption = {
  id: string; // iso2 (ex: "us")
  label: string; // country name
  dialCode: string; // "+1"
  flagSrc: string; // twemoji svg
};

export default function PhoneField({
  phoneValue,
  onPhoneChange,
  errorMessage,
}: {
  phoneValue: string;
  onPhoneChange: (next: string) => void;

  options?: CountryOption[];
  placeholder?: string;
  inputId?: string;
  name?: string;
  errorMessage?: string;
}) {
  return (
    <div>
      <div className="relative">
        <PhoneInput
          data-cid="phone-number"
          data-valid={errorMessage ? "false" : "true"}
          defaultCountry="us"
          forceDialCode
          value={phoneValue}
          onChange={onPhoneChange}
          inputProps={{
            id: "phone-modal-form",
            name: "phone",
            className: clsx(
              "react-international-phone-input",
              errorMessage &&
                "!outline-red-500 hover:!outline-red-500 focus:!outline-red-600",
            ),
          }}
        />
        {errorMessage && (
          <div className="absolute z-[99] right-4 top-1/2 flex -translate-y-1/2 items-center justify-center">
            <span className="relative flex size-5 items-center justify-center rounded-full bg-red-500 font-bold text-white text-tag">
              !
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
