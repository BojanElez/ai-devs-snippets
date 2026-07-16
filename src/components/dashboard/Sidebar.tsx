import { ChevronDown, Folder, Settings, Star } from "lucide-react";
import Link from "next/link";

import { colorClassMap, iconMap } from "@/lib/icon-map";
import { cn } from "@/lib/utils";
import { collections, currentUser, itemTypes } from "@/lib/mock-data";

function slugify(name: string) {
  return name.toLowerCase();
}

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const favoriteCollections = collections.filter((c) => c.isFavorite);
  const recentCollections = collections.filter((c) => !c.isFavorite);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 shrink-0 -translate-x-full flex-col overflow-y-auto border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-transform duration-200 md:static md:z-auto md:transition-[width]",
          open
            ? "translate-x-0 md:w-64"
            : "md:w-0 md:-translate-x-0 md:border-r-0 md:overflow-hidden"
        )}
      >
        <div className="flex w-64 shrink-0 flex-col gap-6 p-4">
          <div>
            <div className="mb-1 flex items-center gap-1 px-1 text-sm font-medium text-muted-foreground">
              Types
              <ChevronDown className="size-3.5" />
            </div>
            <nav className="flex flex-col gap-0.5">
              {itemTypes.map((type) => {
                const Icon = iconMap[type.icon];
                return (
                  <Link
                    key={type.id}
                    href={`/items/${slugify(type.name)}`}
                    className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-sidebar-accent"
                  >
                    {Icon && (
                      <Icon
                        className={cn("size-4", colorClassMap[type.color])}
                      />
                    )}
                    <span className="flex-1">{type.name}</span>
                    <span className="text-muted-foreground">{type.count}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div>
            <div className="mb-1 flex items-center gap-1 px-1 text-sm font-medium text-muted-foreground">
              Collections
              <ChevronDown className="size-3.5" />
            </div>

            {favoriteCollections.length > 0 && (
              <div className="mb-3">
                <div className="px-1 py-1 text-xs font-medium text-muted-foreground">
                  Favorites
                </div>
                <nav className="flex flex-col gap-0.5">
                  {favoriteCollections.map((collection) => (
                    <Link
                      key={collection.id}
                      href={`/collections/${collection.id}`}
                      className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-sidebar-accent"
                    >
                      <Folder className="size-4 text-muted-foreground" />
                      <span className="flex-1">{collection.name}</span>
                      <Star className="size-3.5 fill-yellow-400 text-yellow-400" />
                    </Link>
                  ))}
                </nav>
              </div>
            )}

            {recentCollections.length > 0 && (
              <div>
                <div className="px-1 py-1 text-xs font-medium text-muted-foreground">
                  All Collections
                </div>
                <nav className="flex flex-col gap-0.5">
                  {recentCollections.map((collection) => (
                    <Link
                      key={collection.id}
                      href={`/collections/${collection.id}`}
                      className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-sidebar-accent"
                    >
                      <Folder className="size-4 text-muted-foreground" />
                      <span className="flex-1">{collection.name}</span>
                      <span className="text-muted-foreground">
                        {collection.itemCount}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            )}
          </div>
        </div>

        <div className="mt-auto flex w-64 shrink-0 items-center gap-2 border-t border-sidebar-border p-4">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sidebar-accent text-sm font-medium">
            {currentUser.name.charAt(0)}
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-medium">
              {currentUser.name}
            </div>
            <div className="truncate text-xs text-muted-foreground">
              {currentUser.email}
            </div>
          </div>
          <Settings className="size-4 shrink-0 text-muted-foreground" />
        </div>
      </aside>
    </>
  );
}
