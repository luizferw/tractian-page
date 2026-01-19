import { parsePhoneNumberWithError } from "libphonenumber-js";

export function isPhoneValid(phone: string) {
  try {
    return parsePhoneNumberWithError(phone).isValid();
  } catch {
    return false;
  }
}
