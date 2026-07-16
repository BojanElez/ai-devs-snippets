import { FolderPlus, Layers, PanelLeft, Plus, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface TopBarProps {
  onToggleSidebar: () => void;
}

export function TopBar({ onToggleSidebar }: TopBarProps) {
  return (
    <header className="flex h-14 shrink-0 items-center gap-4 border-b border-border px-4">
      <div className="flex items-center gap-2 font-semibold">
        <Layers className="size-5 text-primary" />
        DevStash
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={onToggleSidebar}
        aria-label="Toggle sidebar"
      >
        <PanelLeft />
      </Button>
      <div className="relative max-w-md flex-1">
        <Search className="absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search items..." className="pl-8" disabled />
      </div>
      <Button variant="outline" disabled>
        <FolderPlus />
        New Collection
      </Button>
      <Button disabled>
        <Plus />
        New Item
      </Button>
    </header>
  );
}
