import { Folder, Star, StickyNote } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import {
  collections,
  itemTypes,
  pinnedItems,
  recentItems,
} from "@/lib/mock-data";

interface Stat {
  label: string;
  value: number;
  icon: LucideIcon;
}

const allItems = [...pinnedItems, ...recentItems];

const stats: Stat[] = [
  {
    label: "Items",
    value: itemTypes.reduce((sum, type) => sum + type.count, 0),
    icon: StickyNote,
  },
  {
    label: "Collections",
    value: collections.length,
    icon: Folder,
  },
  {
    label: "Favorite Items",
    value: allItems.filter((item) => item.isFavorite).length,
    icon: Star,
  },
  {
    label: "Favorite Collections",
    value: collections.filter((collection) => collection.isFavorite).length,
    icon: Star,
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="flex items-center gap-3 rounded-xl border border-border p-4"
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
              <Icon className="size-5 text-muted-foreground" />
            </div>
            <div className="min-w-0">
              <div className="text-2xl font-semibold">{stat.value}</div>
              <div className="truncate text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
