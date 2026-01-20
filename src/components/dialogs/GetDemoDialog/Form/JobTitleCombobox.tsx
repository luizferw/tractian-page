import { useRef, useState } from "react";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import { Option } from "./Form";

export const JOB_TITLE_OPTIONS = [
  { id: "assistant", label: "Assistant" },
  { id: "automation-analyst", label: "Automation Analyst" },
  { id: "automation-director", label: "Automation Director" },
  { id: "automation-manager", label: "Automation Manager" },
  { id: "business-consultant", label: "Business Consultant" },
  { id: "buyer", label: "Buyer" },
  { id: "commercial-director", label: "Commercial Director" },
  { id: "digital-manager", label: "Digital Manager" },
  { id: "operations-director", label: "Operations Director" },
  { id: "industrial-director", label: "Industrial Director" },
  { id: "industrial-manager", label: "Industrial Manager" },
  { id: "innovation-analyst", label: "Innovation Analyst" },
  { id: "innovation-manager", label: "Innovation Manager" },
  { id: "intern", label: "Intern" },
  { id: "it-consultant", label: "IT Consultant" },
  { id: "it-director", label: "IT Director" },
  { id: "it-manager", label: "IT Manager" },
  { id: "maintenance-consultant", label: "Maintenance Consultant" },
  { id: "maintenance-coordinator", label: "Maintenance Coordinator" },
  { id: "maintenance-engineer", label: "Maintenance Engineer" },
  { id: "maintenance-manager", label: "Maintenance Manager" },
  { id: "maintenance-planner", label: "Maintenance Planner" },
  { id: "maintenance-supervisor", label: "Maintenance Supervisor" },
  { id: "maintenance-technician", label: "Maintenance Technician" },
  { id: "operations-coordinator", label: "Operations Coordinator" },
  { id: "operations-manager", label: "Operations Manager" },
  { id: "partnership-director", label: "Partnership Director" },
  { id: "predictive-analyst", label: "Predictive Analyst" },
  { id: "predictive-technician", label: "Predictive Technician" },
  { id: "process-coordinator", label: "Process Coordinator" },
  { id: "process-manager", label: "Process Manager" },
  { id: "procurement-manager", label: "Procurement Manager" },
  { id: "production-operator", label: "Production Operator" },
  { id: "plant-manager", label: "Plant Manager" },
  { id: "reliability-engineer", label: "Reliability Engineer" },
  { id: "reliability-manager", label: "Reliability Manager" },
  { id: "sales-executive", label: "Sales Executive" },
  { id: "sales-representative", label: "Sales Representative" },
  { id: "supply-manager", label: "Supply Manager" },
];

function toggleMenuOptions(buttonEl: HTMLButtonElement) {
  buttonEl?.click();
}

export function JobTitleCombobox({
  value,
  onChange,
  options = JOB_TITLE_OPTIONS,
  placeholder = "Job Title",
  errorMessage,
}: {
  value: Option | null;
  onChange: (v: Option | null) => void;
  options?: Option[];
  placeholder?: string;
  errorMessage?: string;
}) {
  const [query, setQuery] = useState("");
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) => {
          return option.label.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox value={value} onChange={onChange} immediate>
      {({ open }) => (
        <div className="relative w-full">
          <div className="relative w-full">
            <ComboboxInput
              className={clsx(
                "min-w-full !pr-8 w-full rounded-[2px] outline outline-1 bg-white p-3 text-body-md focus:outline-2 disabled:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-70 placeholder:text-slate-500 text-slate-700",
                errorMessage
                  ? "!outline-red-500 hover:outline-red-500 focus:outline-red-600"
                  : "outline-slate-400 hover:outline-slate-700 focus:outline-blue-600",
              )}
              placeholder={placeholder}
              onChange={(e) => setQuery(e.target.value)}
              onBlur={() => {
                if (value) {
                  setQuery("");
                }
              }}
              displayValue={(v: Option | null) => v?.label ?? ""}
              onMouseDown={(e) => {
                e.preventDefault();
                if (btnRef.current) {
                  toggleMenuOptions(btnRef.current);
                }
              }}
            />

            <ComboboxButton
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              ref={btnRef}
              aria-label="Open job title options"
            >
              <ChevronDownIcon
                data-open={open}
                className={"size-4 text-slate-400 data-[open=true]:-rotate-180"}
              />
              {errorMessage && (
                <div className="absolute right-10 top-1/2 flex -translate-y-1/2 items-center justify-center">
                  <span className="relative flex size-5 items-center justify-center rounded-full bg-red-500 font-bold text-white text-tag">
                    !
                  </span>
                </div>
              )}
            </ComboboxButton>
          </div>

          <ComboboxOptions
            anchor="bottom"
            className={clsx(
              "z-[999] w-[314px] rounded-[2px] border border-slate-300 bg-white text-slate-500 shadow-xl",
              "[--anchor-gap:6px] !max-h-[250px] overflow-auto",
              "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0",
              "empty:invisible",
            )}
          >
            {filteredOptions.length ? (
              <>
                <div
                  aria-hidden="true"
                  className="pointer-events-none cursor-default pb-2 pl-3 pr-8 pt-3 text-slate-400 text-body-sm"
                >
                  <span className="block truncate">Job Title</span>
                </div>

                {filteredOptions.map((opt) => (
                  <ComboboxOption
                    key={opt.id}
                    value={opt}
                    className={clsx(
                      "group flex cursor-pointer select-none items-center gap-2 rounded-[2px] py-2 pl-3 pr-8 text-slate-500",
                      "data-[checked]:bg-blue-100 data-[focus]:bg-slate-100 data-[selected]:bg-slate-100",
                      "data-[focus]:text-slate-500 data-[selected]:text-slate-500",
                    )}
                  >
                    <div className="text-body-md">{opt.label}</div>
                  </ComboboxOption>
                ))}
              </>
            ) : (
              <div className="p-2 text-center text-body-md">
                No results found.
              </div>
            )}
          </ComboboxOptions>
        </div>
      )}
    </Combobox>
  );
}
