"use client";

import { NavItem } from "../nav.config";
import MenuItem from "./MenuItem";
import { useState } from "react";

export default function MenuSection({
  filteredNavItems,
}: {
  filteredNavItems: NavItem[];
}) {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  return filteredNavItems.map((navItem) => (
    <MenuItem
      key={navItem.labelMessageKey}
      {...navItem}
      isOpen={openItemId === navItem.labelMessageKey}
      onToggle={() =>
        setOpenItemId(
          openItemId === navItem.labelMessageKey
            ? null
            : navItem.labelMessageKey,
        )
      }
    />
  ));
}
