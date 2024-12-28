import { Copy } from "lucide-react";
import { Command } from "../data/commands";
import { toast } from "sonner";

interface CommandCardProps {
  command: Command;
}

export const CommandCard = ({ command }: CommandCardProps) => {
  const copyCommand = () => {
    navigator.clipboard.writeText(command.syntax);
    toast.success("Command copied to clipboard!");
  };

  return (
    <div className="command-card">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-mono font-semibold">{command.name}</h3>
          <span className="text-xs text-muted-foreground">{command.location}</span>
        </div>
        <button
          onClick={copyCommand}
          className="p-2 hover:bg-secondary rounded-md transition-colors"
          aria-label="Copy command"
        >
          <Copy className="h-4 w-4" />
        </button>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4">{command.description}</p>
      
      <div className="bg-background/50 p-3 rounded-md">
        <code className="text-sm font-mono">{command.syntax}</code>
      </div>

      {command.examples.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-semibold mb-2">Examples:</h4>
          <div className="space-y-2">
            {command.examples.map((example, index) => (
              <div key={index} className="text-sm font-mono text-muted-foreground">
                {example}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};