import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import { cn } from "@/lib/cn";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@/components/ui/Headless/Listbox";
import clsx from "clsx";
import { useTranslations } from "next-intl";

export const MOST_INTERESTED_SOLUTION_OPTIONS = [
  { id: "condition-monitoring", label: "Condition Monitoring" },
  { id: "cmms-software", label: "CMMS Software" },
  { id: "oee-solutions", label: "OEE Solutions" },
];

export default function MostInterestedSolutionListbox({
  value,
  onChange,
  options = MOST_INTERESTED_SOLUTION_OPTIONS,
  errorMessage,
}: {
  value: string;
  onChange: (value: string) => void;
  options?: { id: string; label: string }[];
  errorMessage?: string;
}) {
  const selected = options.find((opt) => opt.id === value);
  const t = useTranslations("GetDemoDialog");

  return (
    <Listbox value={value} onChange={onChange}>
      {({ open }) => (
        <div className="relative">
          <ListboxButton
            id="solution"
            name="solution"
            className={clsx(
              "rounded-[2px] p-3 text-body-md ring-0 w-full text-slate-400 bg-white outline outline-1 disabled:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-70",
              "appearance-none pr-10 text-slate-700 cursor-pointer text-left",
              value === "" && "text-slate-500",
              errorMessage
                ? "!outline-red-500 hover:outline-red-500 focus:outline-red-600"
                : "outline-slate-400 hover:outline-slate-700 focus-visible:outline-2 focus-visible:outline-blue-600",
              open && "outline-2 !outline-blue-600",
            )}
          >
            <span className={cn("text-slate-500", value && "text-slate-700")}>
              {selected ? selected.label : t("form.solution.placeholder")}
            </span>
            {errorMessage && (
              <div className="absolute right-10 top-1/2 flex -translate-y-1/2 items-center justify-center">
                <span className="relative flex size-5 items-center justify-center rounded-full bg-red-500 font-bold text-white text-tag">
                  !
                </span>
              </div>
            )}
            <ChevronDownIcon
              data-open={open}
              className="text-slate-400 data-[open=true]:-rotate-180 group pointer-events-none absolute top-4 right-3 size-4"
              aria-hidden="true"
            />
          </ListboxButton>

          {/* Hidden input para manter submit do form igual ao <select> */}
          <input type="hidden" name="solution" value={value} />

          <ListboxOptions
            anchor="bottom"
            className={clsx(
              "z-[999] w-[var(--button-width)] rounded-[2px] border-none ring-1 ring-black/5 ring-opacity-5 bg-white text-slate-500 shadow-xl",
              "[--anchor-gap:6px] !max-h-[250px] overflow-auto",
              "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0",
              "empty:invisible",
            )}
          >
            {/* “Placeholder” como item não-selecionável */}
            <ListboxOption
              value=""
              disabled
              className="pointer-events-none cursor-default pb-2 pl-3 pr-8 pt-3 text-slate-400 text-body-sm"
            >
              <span className="block truncate">
                Select the solution of most interest
              </span>
            </ListboxOption>

            {options.map((opt) => (
              <ListboxOption
                key={opt.id}
                value={opt.id}
                className={clsx(
                  "group flex cursor-pointer select-none items-center gap-2 rounded-[2px] py-2 pl-3 pr-8 text-slate-500",
                  "data-[checked]:bg-blue-100 data-[focus]:bg-slate-100 data-[selected]:bg-slate-100",
                  "data-[focus]:text-slate-500 data-[selected]:text-slate-500",
                )}
              >
                <span className="text-body-md">{opt.label}</span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      )}
    </Listbox>
  );
}
