"use client";

import {
  PhoneInput as BasePhoneInput,
  type PhoneInputProps,
} from "react-international-phone";
import "react-international-phone/style.css";
import "./PhoneInput.css";

export function PhoneInput(props: PhoneInputProps) {
  return <BasePhoneInput {...props} />;
}
