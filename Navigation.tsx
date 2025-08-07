import { Button } from "./ui/button";

interface NavigationProps {
  currentPage: 'home' | 'contact';
  onPageChange: (page: 'home' | 'contact') => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-primary-foreground rounded-sm"></div>
            </div>
            <span className="font-bold text-foreground">Parking POP</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant={currentPage === 'home' ? 'default' : 'ghost'}
              onClick={() => onPageChange('home')}
              className="relative"
            >
              Home
            </Button>
            <Button
              variant={currentPage === 'contact' ? 'default' : 'ghost'}
              onClick={() => onPageChange('contact')}
              className="relative"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
