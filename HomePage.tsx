import { Logo } from "./Logo";

export function HomePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pt-16">
      {/* Background Design */}
      <div className="absolute inset-0">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-muted"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/15 rounded-lg rotate-45 blur-lg"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-primary/8 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-accent/12 rounded-lg rotate-12 blur-lg"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,123,255,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Floating accent elements */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-primary rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-accent rounded-full animate-pulse delay-1000"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <Logo />
      </div>
      
      {/* Subtle footer text */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <p className="text-muted-foreground text-sm text-center">
          Ready for your next feature
        </p>
      </div>
    </div>
  );
}
