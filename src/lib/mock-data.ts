export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

export interface ItemType {
  id: string;
  name: string;
  icon: string;
  color: string;
  count: number;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  color: string;
  isFavorite: boolean;
  itemCount: number;
  itemTypeIcons: string[];
}

export interface Item {
  id: string;
  title: string;
  description: string;
  typeIcon: string;
  typeColor: string;
  tags: string[];
  isPinned: boolean;
  isFavorite: boolean;
  createdAt: string;
}

export const currentUser: User = {
  id: "user-1",
  name: "John Doe",
  email: "john@example.com",
};

export const itemTypes: ItemType[] = [
  { id: "type-snippet", name: "Snippets", icon: "code", color: "blue", count: 24 },
  { id: "type-prompt", name: "Prompts", icon: "sparkles", color: "purple", count: 18 },
  { id: "type-command", name: "Commands", icon: "terminal", color: "orange", count: 15 },
  { id: "type-note", name: "Notes", icon: "file-text", color: "yellow", count: 12 },
  { id: "type-file", name: "Files", icon: "file", color: "gray", count: 5 },
  { id: "type-image", name: "Images", icon: "image", color: "pink", count: 3 },
  { id: "type-url", name: "Links", icon: "link", color: "green", count: 8 },
];

export const collections: Collection[] = [
  {
    id: "collection-react-patterns",
    name: "React Patterns",
    description: "Common React patterns and hooks",
    color: "blue",
    isFavorite: true,
    itemCount: 12,
    itemTypeIcons: ["code", "file-text", "link"],
  },
  {
    id: "collection-python-snippets",
    name: "Python Snippets",
    description: "Useful Python code snippets",
    color: "blue",
    isFavorite: false,
    itemCount: 8,
    itemTypeIcons: ["code", "file"],
  },
  {
    id: "collection-context-files",
    name: "Context Files",
    description: "AI context files for projects",
    color: "purple",
    isFavorite: true,
    itemCount: 5,
    itemTypeIcons: ["file", "file-text"],
  },
  {
    id: "collection-interview-prep",
    name: "Interview Prep",
    description: "Technical interview preparation",
    color: "yellow",
    isFavorite: false,
    itemCount: 24,
    itemTypeIcons: ["file-text", "code", "link", "sparkles"],
  },
  {
    id: "collection-git-commands",
    name: "Git Commands",
    description: "Frequently used git commands",
    color: "orange",
    isFavorite: true,
    itemCount: 15,
    itemTypeIcons: ["terminal", "file"],
  },
  {
    id: "collection-ai-prompts",
    name: "AI Prompts",
    description: "Curated AI prompts for coding",
    color: "purple",
    isFavorite: false,
    itemCount: 18,
    itemTypeIcons: ["sparkles", "code", "file"],
  },
];

export const pinnedItems: Item[] = [
  {
    id: "item-use-auth-hook",
    title: "useAuth Hook",
    description: "Custom authentication hook for React applications",
    typeIcon: "code",
    typeColor: "blue",
    tags: ["react", "auth", "hooks"],
    isPinned: true,
    isFavorite: true,
    createdAt: "2026-01-15",
  },
  {
    id: "item-api-error-handling",
    title: "API Error Handling Pattern",
    description: "Fetch wrapper with exponential backoff retry logic",
    typeIcon: "code",
    typeColor: "blue",
    tags: ["api", "error-handling"],
    isPinned: true,
    isFavorite: false,
    createdAt: "2026-01-12",
  },
];

export const recentItems: Item[] = [
  {
    id: "item-debounce-hook",
    title: "useDebounce Hook",
    description: "Debounce any fast-changing value in React",
    typeIcon: "code",
    typeColor: "blue",
    tags: ["react", "hooks", "performance"],
    isPinned: false,
    isFavorite: true,
    createdAt: "2026-01-14",
  },
  {
    id: "item-code-review-prompt",
    title: "Code Review Prompt",
    description: "Prompt template for thorough AI code reviews",
    typeIcon: "sparkles",
    typeColor: "purple",
    tags: ["ai", "review"],
    isPinned: false,
    isFavorite: false,
    createdAt: "2026-01-13",
  },
  {
    id: "item-git-undo-commit",
    title: "Undo Last Commit",
    description: "git reset --soft HEAD~1 to keep changes staged",
    typeIcon: "terminal",
    typeColor: "orange",
    tags: ["git"],
    isPinned: false,
    isFavorite: false,
    createdAt: "2026-01-13",
  },
  {
    id: "item-docker-cleanup",
    title: "Docker Cleanup Commands",
    description: "Prune unused containers, images, and volumes",
    typeIcon: "terminal",
    typeColor: "orange",
    tags: ["docker", "cleanup"],
    isPinned: false,
    isFavorite: true,
    createdAt: "2026-01-11",
  },
  {
    id: "item-zod-schema-note",
    title: "Zod Validation Notes",
    description: "Common Zod schema patterns for form validation",
    typeIcon: "file-text",
    typeColor: "yellow",
    tags: ["zod", "validation"],
    isPinned: false,
    isFavorite: false,
    createdAt: "2026-01-10",
  },
  {
    id: "item-tailwind-cheatsheet",
    title: "Tailwind Layout Cheatsheet",
    description: "Flexbox and grid utility reference",
    typeIcon: "link",
    typeColor: "green",
    tags: ["tailwind", "css"],
    isPinned: false,
    isFavorite: false,
    createdAt: "2026-01-09",
  },
  {
    id: "item-prisma-seed",
    title: "Prisma Seed Script",
    description: "Idempotent seed script for local development",
    typeIcon: "code",
    typeColor: "blue",
    tags: ["prisma", "database"],
    isPinned: false,
    isFavorite: false,
    createdAt: "2026-01-08",
  },
  {
    id: "item-nextauth-config",
    title: "NextAuth GitHub Provider",
    description: "GitHub OAuth provider configuration for NextAuth v5",
    typeIcon: "file",
    typeColor: "gray",
    tags: ["auth", "nextauth"],
    isPinned: false,
    isFavorite: true,
    createdAt: "2026-01-07",
  },
  {
    id: "item-sql-index-note",
    title: "When to Add an Index",
    description: "Notes on indexing strategy for Postgres queries",
    typeIcon: "file-text",
    typeColor: "yellow",
    tags: ["sql", "postgres", "performance"],
    isPinned: false,
    isFavorite: false,
    createdAt: "2026-01-06",
  },
  {
    id: "item-refactor-prompt",
    title: "Refactor to Hooks Prompt",
    description: "Prompt for converting class components to hooks",
    typeIcon: "sparkles",
    typeColor: "purple",
    tags: ["ai", "react", "refactor"],
    isPinned: false,
    isFavorite: false,
    createdAt: "2026-01-05",
  },
];
