import { CommandCard } from "../components/CommandCard";
import { featuredCommands } from "../data/commands";
import { Navbar } from "../components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24">
        {/* Hero Section */}
        <section 
          className="text-center py-20 relative overflow-hidden" 
          style={{
            background: 'radial-gradient(circle at center, rgba(128, 128, 128, 0.2), rgba(64, 64, 64, 0.1))',
          }}
        >
          <div className="absolute inset-0 bg-gray-100/10 blur-3xl opacity-50"></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
              Windows Command Prompt
              <span className="text-primary"> Guide</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Your comprehensive resource for mastering Windows Command Prompt commands and techniques.
            </p>
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