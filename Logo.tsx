import { Car } from "lucide-react";

export function Logo() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative">
        <div className="flex items-center justify-center w-24 h-24 bg-primary rounded-2xl shadow-2xl">
          <Car className="w-12 h-12 text-primary-foreground" />
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
          <div className="w-3 h-3 bg-accent-foreground rounded-full"></div>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
          Parking <span className="text-primary">POP</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          Your Smart Parking Solution
        </p>
      </div>
    </div>
  );
}
