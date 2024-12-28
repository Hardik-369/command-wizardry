import { useState } from "react";
import { Search } from "lucide-react";
import { CommandCard } from "../components/CommandCard";
import { commands } from "../data/commands";
import { Navbar } from "../components/Navbar";

const Commands = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");

  const filteredCommands = commands.filter((command) => {
    const matchesSearch = command.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         command.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = selectedLocation === "all" || command.location === selectedLocation;
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24">
        <h1 className="text-3xl font-bold mb-8">All Commands</h1>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <input
              type="text"
              placeholder="Search commands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-secondary/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="px-4 py-3 rounded-lg bg-secondary/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="all">All Locations</option>
            <option value="Built-in">Built-in</option>
            <option value="System32">System32</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCommands.map((command) => (
            <CommandCard key={command.id} command={command} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Commands;