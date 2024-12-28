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
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Master the Windows Command Line Interface with our comprehensive guide to Command Prompt commands. Whether you're a beginner learning CMD basics or an advanced user seeking specific command references, our detailed tutorials and command listings will help you become proficient in command-line operations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore essential Command Prompt tutorials, learn powerful CMD commands, and discover Windows command line best practices. Our expertly curated collection of commands covers everything from basic directory navigation to advanced system administration tasks.
            </p>
          </div>
        </section>

        {/* Quick Start Guide */}
        <section className="py-12 glass-card rounded-xl mb-16 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold mb-6">Quick Start Guide</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Getting Started</h3>
                <ul className="space-y-2 text-muted-foreground text-left">
                  <li>1. Press Win + R and type 'cmd'</li>
                  <li>2. Click 'OK' to open Command Prompt</li>
                  <li>3. Type 'help' for a list of commands</li>
                  <li>4. Use 'cd' to navigate directories</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Basic Commands</h3>
                <ul className="space-y-2 text-muted-foreground text-left">
                  <li>• dir - List directory contents</li>
                  <li>• cd - Change directory</li>
                  <li>• mkdir - Create new folder</li>
                  <li>• copy - Copy files</li>
                </ul>
              </div>
            </div>
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