export interface Command {
  id: string;
  name: string;
  description: string;
  syntax: string;
  location: "Built-in" | "System32" | "Other";
  examples: string[];
  category: string;
  featured?: boolean;
}

export const commands: Command[] = [
  {
    id: "cd",
    name: "cd",
    description: "Changes the current directory or displays the current directory path.",
    syntax: "cd [path]",
    location: "Built-in",
    examples: [
      "cd C:\\Users",
      "cd ..",
      "cd \\",
    ],
    category: "Navigation",
    featured: true,
  },
  {
    id: "dir",
    name: "dir",
    description: "Displays a list of files and subdirectories in a directory.",
    syntax: "dir [drive:][path][filename]",
    location: "Built-in",
    examples: [
      "dir",
      "dir /a",
      "dir *.txt",
    ],
    category: "File Management",
    featured: true,
  },
  // Add more commands as needed
];

export const featuredCommands = commands.filter(cmd => cmd.featured);