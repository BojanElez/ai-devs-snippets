import {
  Code,
  File,
  FileText,
  Image,
  Link,
  Sparkles,
  Terminal,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  code: Code,
  sparkles: Sparkles,
  terminal: Terminal,
  "file-text": FileText,
  file: File,
  image: Image,
  link: Link,
};

export const colorClassMap: Record<string, string> = {
  blue: "text-blue-400",
  purple: "text-purple-400",
  orange: "text-orange-400",
  yellow: "text-yellow-400",
  gray: "text-gray-400",
  pink: "text-pink-400",
  green: "text-green-400",
};

export const iconColorClassMap: Record<string, string> = {
  code: "text-blue-400",
  sparkles: "text-purple-400",
  terminal: "text-orange-400",
  "file-text": "text-yellow-400",
  file: "text-gray-400",
  image: "text-pink-400",
  link: "text-green-400",
};

export const borderColorClassMap: Record<string, string> = {
  blue: "border-l-blue-400",
  purple: "border-l-purple-400",
  orange: "border-l-orange-400",
  yellow: "border-l-yellow-400",
  gray: "border-l-gray-400",
  pink: "border-l-pink-400",
  green: "border-l-green-400",
};
