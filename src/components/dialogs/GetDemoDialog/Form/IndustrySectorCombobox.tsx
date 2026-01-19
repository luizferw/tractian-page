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

export const INDUSTRY_SECTOR_OPTIONS = [
  { id: "aeronautics", label: "Aeronautics" },
  { id: "agriculture", label: "Agriculture" },
  { id: "animal-nutrition", label: "Animal Nutrition" },
  { id: "airports", label: "Airports" },
  { id: "automotive", label: "Automotive" },
  { id: "beverage", label: "Beverage" },
  { id: "bioenergy", label: "Bioenergy" },
  { id: "buildings", label: "Buildings" },
  { id: "building-complex", label: "Building Complex" },
  { id: "cement", label: "Cement" },
  { id: "ceramics", label: "Ceramics" },
  { id: "chemical", label: "Chemical" },
  { id: "construction", label: "Construction" },
  { id: "consumer-goods", label: "Consumer Goods" },
  { id: "cosmetics", label: "Cosmetics" },
  { id: "data-center", label: "Data Center" },
  { id: "distributors", label: "Distributors" },
  { id: "education", label: "Education" },
  { id: "electronics", label: "Electronics" },
  { id: "energy", label: "Energy" },
  { id: "facilities", label: "Facilities" },
  { id: "fertilizers", label: "Fertilizers" },
  { id: "food", label: "Food" },
  { id: "foundry", label: "Foundry" },
  { id: "furniture", label: "Furniture" },
  { id: "franchising", label: "Franchising" },
  { id: "glass", label: "Glass" },
  { id: "hospitals", label: "Hospitals" },
  { id: "hygiene", label: "Hygiene" },
  { id: "logistics", label: "Logistics" },
  { id: "machinery", label: "Machinery" },
  { id: "machining-cnc", label: "Machining CNC" },
  { id: "maritime", label: "Maritime" },
  { id: "metal-mechanics", label: "Metal-mechanics" },
  { id: "metallurgy", label: "Metallurgy" },
  { id: "mills", label: "Mills" },
  { id: "mining", label: "Mining" },
  { id: "oil-and-gas", label: "Oil And Gas" },
  { id: "other", label: "Other" },
  { id: "packaging", label: "Packaging" },
  { id: "pulp-and-paper", label: "Pulp and Paper" },
  { id: "pharmaceutical", label: "Pharmaceutical" },
  { id: "plastic", label: "Plastic" },
  { id: "power-plant", label: "Power Plant" },
  { id: "pulp-and-paper-2", label: "Pulp And Paper" },
  { id: "shopping-mall", label: "Shopping Mall" },
  { id: "sanitation", label: "Sanitation" },
  { id: "service-provider", label: "Service Provider" },
  { id: "stores", label: "Stores" },
  { id: "solar-energy", label: "Solar Energy" },
  { id: "sugar-and-alcohol", label: "Sugar And Alcohol" },
  { id: "supermarket", label: "Supermarket" },
  { id: "textile", label: "Textile" },
  { id: "waste", label: "Waste" },
  { id: "wholesaler", label: "Wholesaler" },
  { id: "wood", label: "Wood" },
];

function toggleMenuOptions(buttonEl: HTMLButtonElement) {
  buttonEl?.click();
}

export function IndustrySectorCombobox({
  value,
  onChange,
  options = INDUSTRY_SECTOR_OPTIONS,
  placeholder = "Industry Sector",
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
              {errorMessage ? (
                <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center justify-center">
                  <span className="relative flex size-5 items-center justify-center rounded-full bg-red-500 font-bold text-white text-tag">
                    !
                  </span>
                </div>
              ) : (
                <ChevronDownIcon
                  data-open={open}
                  className={
                    "size-4 text-slate-400 data-[open=true]:-rotate-180"
                  }
                />
              )}
            </ComboboxButton>
          </div>

          <ComboboxOptions
            anchor="bottom"
            className={clsx(
              "z-[999] w-[640px] !max-w-[100vw] rounded-[2px] border border-slate-300 bg-white text-slate-500 shadow-xl",
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
                  <span className="block truncate">Industry Sector</span>
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
