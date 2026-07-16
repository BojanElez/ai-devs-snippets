import { MoreHorizontal, Star } from "lucide-react";
import Link from "next/link";

import { borderColorClassMap, iconColorClassMap, iconMap } from "@/lib/icon-map";
import { cn } from "@/lib/utils";
import type { Collection } from "@/lib/mock-data";

interface CollectionCardProps {
  collection: Collection;
}

export function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <Link
      href={`/collections/${collection.id}`}
      className={cn(
        "flex flex-col gap-3 rounded-xl border border-border border-l-4 p-4 transition-colors hover:bg-accent/50",
        borderColorClassMap[collection.color]
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <h3 className="font-semibold">{collection.name}</h3>
          {collection.isFavorite && (
            <Star className="size-4 fill-yellow-400 text-yellow-400" />
          )}
        </div>
        <MoreHorizontal className="size-4 shrink-0 text-muted-foreground" />
      </div>

      <div className="text-sm text-muted-foreground">
        {collection.itemCount} items
      </div>

      <p className="text-sm text-muted-foreground">{collection.description}</p>

      <div className="flex items-center gap-2">
        {collection.itemTypeIcons.map((icon, index) => {
          const Icon = iconMap[icon];
          return Icon ? (
            <Icon
              key={`${icon}-${index}`}
              className={cn(
                "size-4",
                iconColorClassMap[icon] ?? "text-muted-foreground"
              )}
            />
          ) : null;
        })}
      </div>
    </Link>
  );
}
