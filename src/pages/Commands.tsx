import { useState } from "react";
import { Search } from "lucide-react";
import { CommandCard } from "../components/CommandCard";
import { commands } from "../data/commands";
import { Navbar } from "../components/Navbar";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Commands = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");

  const filteredCommands = commands.filter((command, index, self) => {
    // Remove duplicates based on id
    const isDuplicate = self.findIndex(cmd => cmd.id === command.id) !== index;
    if (isDuplicate) return false;

    const matchesSearch = 
      command.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      command.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLocation = 
      selectedLocation === "all" || 
      command.location === selectedLocation;

    return matchesSearch && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24">
        <h1 className="text-3xl font-bold mb-8">All Commands</h1>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search commands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10"
            />
          </div>
          
          <Select
            value={selectedLocation}
            onValueChange={setSelectedLocation}
          >
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="Built-in">Built-in</SelectItem>
              <SelectItem value="System32">System32</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCommands.map((command) => (
            <CommandCard key={command.id} command={command} />
          ))}
        </div>

        {filteredCommands.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No commands found matching your search criteria.
          </div>
        )}
      </main>
    </div>
  );
};

export default Commands;