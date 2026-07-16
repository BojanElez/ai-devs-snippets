import { Pin, Star } from "lucide-react";
import Link from "next/link";

import { borderColorClassMap, iconColorClassMap, iconMap } from "@/lib/icon-map";
import { cn } from "@/lib/utils";
import type { Item } from "@/lib/mock-data";

interface ItemRowProps {
  item: Item;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export function ItemRow({ item }: ItemRowProps) {
  const Icon = iconMap[item.typeIcon];

  return (
    <Link
      href={`/items/${item.id}`}
      className={cn(
        "flex items-start gap-3 rounded-xl border border-border border-l-4 p-4 transition-colors hover:bg-accent/50",
        borderColorClassMap[item.typeColor]
      )}
    >
      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted">
        {Icon && (
          <Icon className={cn("size-4", iconColorClassMap[item.typeIcon])} />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <h3 className="truncate font-medium">{item.title}</h3>
          {item.isPinned && (
            <Pin className="size-3.5 shrink-0 text-muted-foreground" />
          )}
          {item.isFavorite && (
            <Star className="size-3.5 shrink-0 fill-yellow-400 text-yellow-400" />
          )}
        </div>

        <p className="truncate text-sm text-muted-foreground">
          {item.description}
        </p>

        {item.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <time className="shrink-0 text-xs text-muted-foreground">
        {formatDate(item.createdAt)}
      </time>
    </Link>
  );
}
