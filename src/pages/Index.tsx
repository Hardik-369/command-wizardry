import { Search } from "lucide-react";
import { CommandCard } from "../components/CommandCard";
import { featuredCommands } from "../data/commands";
import { Navbar } from "../components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
            Windows Command Prompt
            <span className="text-primary"> Guide</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Your comprehensive guide to Windows Command Prompt commands
          </p>
          <div className="max-w-md mx-auto relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <input
              type="text"
              placeholder="Search commands..."
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-secondary/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </section>

        {/* Featured Commands */}
        <section className="py-16">
          <h2 className="text-2xl font-bold mb-8">Featured Commands</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCommands.map((command) => (
              <CommandCard key={command.id} command={command} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;