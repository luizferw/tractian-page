"use client";

import { Button } from "@/components/ui/Button/Button";
import { Field, Input } from "@headlessui/react";
import { useEffect, useId, useRef, useState, useCallback } from "react";
import { JobTitleCombobox } from "./JobTitleCombobox";
import { IndustrySectorCombobox } from "./IndustrySectorCombobox";
import MostInterestedSolutionListbox from "./MostInterestedSolutionListbox";
import PhoneField from "./PhoneField";
import { isPhoneValid } from "@/lib/phone";
import { cn } from "@/lib/cn";
import { useTranslations } from "next-intl";

export type Option = { id: string; label: string };

const baseInputClassName =
  "rounded-[2px] p-3 text-body-md ring-0 w-full placeholder:text-slate-500 text-slate-700 bg-white outline outline-1 outline-slate-400 hover:outline-slate-700 focus:outline-2 focus:outline-blue-600 disabled:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-70";

function validateName(name: string, t: any): string | null {
  const value = name.trim();

  if (!/^[A-Za-z\s]+$/.test(value)) {
    return t("form.name.invalid");
  }

  const words = value.split(/\s+/);

  if (words.length < 2) {
    return t("form.name.incomplete");
  }

  const hasWordWithTwoChars = words.some((w) => w.length >= 2);

  if (!hasWordWithTwoChars && words.length < 5) {
    return t("form.name.incomplete");
  }

  return null;
}

const EMAIL_REGEX =
  /^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)*([A-Za-z0-9-]{3,})\.([A-Za-z]{2,})$/;
function validateEmail(email: string, t: any): string | null {
  const value = email.trim();

  if (!EMAIL_REGEX.test(value)) {
    return t("form.email.invalid");
  }

  return null;
}

function getSafeString(v: FormDataEntryValue | null) {
  return typeof v === "string" ? v : "";
}

export default function Form() {
  const formId = useId();
  const t = useTranslations("GetDemoDialog");

  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLDivElement | null>(null);

  const [phone, setPhone] = useState("");

  const [jobTitle, setJobTitle] = useState<Option | null>(null);

  const [industrySector, setIndustrySector] = useState<Option | null>(null);

  const [solution, setSolution] = useState<string>("");

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isInitialDelayComplete, setIsInitialDelayComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialDelayComplete(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  function closeAndReset() {
    setFieldErrors({});
    setIsSubmitting(false);
    close();
  }

  function validate(formData: FormData) {
    const errors: Record<string, string> = {};

    const website = getSafeString(formData.get("website"));
    if (website)
      return {
        ok: false as const,
        errors: {} as Record<string, string>,
        isBot: true as const,
      };

    const name = getSafeString(formData.get("name")).trim();
    const email = getSafeString(formData.get("email")).trim();
    const phone = getSafeString(formData.get("phone")).trim();
    const jobTitleValue = getSafeString(formData.get("jobTitle")).trim();
    const industryValue = getSafeString(formData.get("industrySector")).trim();
    const solutionValue = getSafeString(formData.get("solution")).trim();

    if (!name) {
      errors.name = t("form.name.required");
    } else {
      const nameError = validateName(name, t);
      if (nameError) errors.name = nameError;
    }

    if (!email) {
      errors.email = t("form.email.required");
    } else {
      const emailError = validateEmail(email, t);
      if (emailError) errors.email = emailError;
    }

    if (!phone || !isPhoneValid(phone)) {
      errors.phone = t("form.phone.required");
    }

    if (!jobTitleValue) errors.jobTitle = t("form.jobTitle.required");
    if (!industryValue)
      errors.industrySector = t("form.industrySector.required");
    if (!solutionValue) errors.solution = t("form.solution.required");

    return {
      ok: Object.keys(errors).length === 0,
      errors,
      isBot: false as const,
    };
  }

  const validateField = useCallback(
    (fieldName: string, value: string) => {
      const errors: Record<string, string> = {};

      switch (fieldName) {
        case "name":
          if (!value.trim()) {
            errors.name = t("form.name.required");
          } else {
            const nameError = validateName(value, t);
            if (nameError) errors.name = nameError;
          }
          break;
        case "email":
          if (!value.trim()) {
            errors.email = t("form.email.required");
          } else {
            const emailError = validateEmail(value, t);
            if (emailError) errors.email = emailError;
          }
          break;
        case "phone":
          if (!value.trim() || !isPhoneValid(value)) {
            errors.phone = t("form.phone.required");
          }
          break;
        case "jobTitle":
          if (!value.trim()) {
            errors.jobTitle = t("form.jobTitle.required");
          }
          break;
        case "industrySector":
          if (!value.trim()) {
            errors.industrySector = t("form.industrySector.required");
          }
          break;
        case "solution":
          if (!value.trim()) {
            errors.solution = t("form.solution.required");
          }
          break;
      }

      return errors[fieldName] || null;
    },
    [t],
  );

  const handleFieldValidation = useCallback(
    (fieldName: string, value: string) => {
      if (!hasSubmitted) return;

      const error = validateField(fieldName, value);
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        if (error) {
          newErrors[fieldName] = error;
        } else {
          delete newErrors[fieldName];
        }
        return newErrors;
      });
    },
    [hasSubmitted, validateField],
  );

  function focusFirstErrorField(errors: Record<string, string>) {
    const fieldOrder = ["name", "email"] as const;
    const refs = {
      name: nameRef,
      email: emailRef,
    };

    for (const field of fieldOrder) {
      if (errors[field] && refs[field]?.current) {
        (refs[field].current as HTMLInputElement).focus();
        break;
      }
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    formData.set("jobTitle", jobTitle?.label ?? "");
    formData.set("industrySector", industrySector?.label ?? "");
    formData.set("solution", solution);

    const result = validate(formData);

    if (result.isBot) {
      closeAndReset();
      return;
    }

    if (!result.ok) {
      setFieldErrors(result.errors);
      setHasSubmitted(true);
      focusFirstErrorField(result.errors);
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);

    try {
      await new Promise((r) => setTimeout(r, 1000));
      alert(
        "Form Data:\n" +
          JSON.stringify(
            {
              name: formData.get("name"),
              email: formData.get("email"),
              phone: formData.get("phone"),
              jobTitle: formData.get("jobTitle"),
              industrySector: formData.get("industrySector"),
              solution: formData.get("solution"),
            },
            null,
            2,
          ),
      );
      closeAndReset();
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form id={formId} onSubmit={onSubmit} noValidate>
      {/* Honeypot */}
      <div className="pointer-events-none absolute -top-[9999px] opacity-0">
        <label htmlFor="website">Website</label>
        <input
          autoComplete="off"
          id="website"
          tabIndex={-1}
          type="text"
          name="website"
        />
      </div>

      <div className="flex w-full flex-col gap-y-3">
        <Field className="flex w-full flex-col gap-2" data-cid="input-field">
          <div className="relative">
            <Input
              ref={nameRef}
              id="name-modal-form"
              name="name"
              placeholder={t("form.name.placeholder")}
              onChange={(e) => handleFieldValidation("name", e.target.value)}
              aria-invalid={Boolean(fieldErrors.name) || undefined}
              aria-describedby={fieldErrors.name ? "name-error" : undefined}
              className={cn(
                baseInputClassName,
                fieldErrors.name &&
                  "focus:outline-2 !outline-red-500 hover:outline-red-500 focus:outline-red-600",
              )}
            />
            {fieldErrors.name && (
              <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center justify-center">
                <span className="relative flex size-5 items-center justify-center rounded-full bg-red-500 font-bold text-white text-tag">
                  !
                </span>
              </div>
            )}
          </div>
          {fieldErrors.name && (
            <>
              <label
                htmlFor="name-modal-form"
                id="name-error"
                className="text-body-sm text-red-600"
              >
                {fieldErrors.name}
              </label>
            </>
          )}
        </Field>

        <Field className="flex w-full flex-col gap-2" data-cid="input-field">
          <div className="relative">
            <Input
              ref={emailRef}
              id="email-modal-form"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="work email"
              placeholder={t("form.email.placeholder")}
              onChange={(e) => handleFieldValidation("email", e.target.value)}
              aria-invalid={Boolean(fieldErrors.email) || undefined}
              aria-describedby={fieldErrors.email ? "email-error" : undefined}
              className={cn(
                baseInputClassName,
                fieldErrors.email &&
                  "focus:outline-2 !outline-red-500 hover:outline-red-500 focus:outline-red-600",
              )}
            />
            {fieldErrors.email && (
              <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center justify-center">
                <span className="relative flex size-5 items-center justify-center rounded-full bg-red-500 font-bold text-white text-tag">
                  !
                </span>
              </div>
            )}
          </div>
          {fieldErrors.email && (
            <label
              htmlFor="email-modal-form"
              id="email-error"
              className="text-body-sm text-red-600"
            >
              {fieldErrors.email}
            </label>
          )}
        </Field>

        <section className="flex w-full flex-col gap-3 sm:flex-row">
          <Field
            className="flex w-full default-fieldset flex-col gap-2"
            data-cid="phone-number"
          >
            <div ref={phoneRef} className="relative" tabIndex={-1}>
              <PhoneField
                phoneValue={phone}
                onPhoneChange={(value) => {
                  setFieldErrors((prev) => {
                    const newErrors = { ...prev };
                    delete newErrors.phone;
                    return newErrors;
                  });
                  setPhone(value);
                }}
                errorMessage={fieldErrors.phone}
              />
            </div>

            {fieldErrors.phone && (
              <label
                htmlFor="phone-modal-form"
                id="phone-error"
                className="text-body-sm text-red-600"
              >
                {fieldErrors.phone}
              </label>
            )}
          </Field>

          <Field className="flex w-full flex-col gap-2">
            <JobTitleCombobox
              onChange={(value) => {
                setJobTitle(value);
                handleFieldValidation("jobTitle", value?.label || "");
              }}
              value={jobTitle}
              placeholder={t("form.jobTitle.placeholder")}
              errorMessage={fieldErrors.jobTitle}
            />
            {fieldErrors.jobTitle && (
              <label
                htmlFor="jobTitle-modal-form"
                id="jobTitle-error"
                className="text-body-sm text-red-600"
              >
                {fieldErrors.jobTitle}
              </label>
            )}
          </Field>
        </section>

        <Field className="flex w-full flex-col gap-2">
          <IndustrySectorCombobox
            value={industrySector}
            onChange={(value) => {
              setIndustrySector(value);
              handleFieldValidation("industrySector", value?.label || "");
            }}
            placeholder={t("form.industrySector.placeholder")}
            errorMessage={fieldErrors.industrySector}
          />

          {fieldErrors.industrySector && (
            <label
              htmlFor="industrySector-modal-form"
              id="industry-error"
              className="text-body-sm text-red-600"
            >
              {fieldErrors.industrySector}
            </label>
          )}
        </Field>

        <Field className="flex w-full flex-col gap-2" data-cid="select-input">
          <MostInterestedSolutionListbox
            value={solution}
            onChange={(value) => {
              setSolution(value);
              handleFieldValidation("solution", value);
            }}
            errorMessage={fieldErrors.solution}
          />
          {fieldErrors.solution && (
            <label
              htmlFor="solution-modal-form"
              id="solution-error"
              className="text-body-sm text-red-600"
            >
              {fieldErrors.solution}
            </label>
          )}
        </Field>

        <Button
          size="lg"
          className="outline-none max-w-fit w-full transition ease-in-out duration-150 text-center font-medium text-body-lg leading-[22px] lg:leading-6 px-6 py-3 bg-green-600 text-white disabled:text-white hover:bg-green-900 active:bg-green-950 disabled:outline-none disabled:bg-slate-300 min-w-full"
          type="submit"
          disabled={isSubmitting || !isInitialDelayComplete}
        >
          {t("form.submitButton")}
        </Button>

        <div />
      </div>
    </form>
  );
}
