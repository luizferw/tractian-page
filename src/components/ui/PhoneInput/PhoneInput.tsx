"use client";

import {
  PhoneInput as BasePhoneInput,
  type PhoneInputProps,
} from "react-international-phone";

export function PhoneInput(props: PhoneInputProps) {
  return <BasePhoneInput {...props} />;
}
