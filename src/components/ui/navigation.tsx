import { Button } from "@/components/ui/button";
import { Calendar, ChevronDown } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="w-full bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-lg">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">NourBook</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1 text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
              <span>Product</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
              Pricing
            </span>
            <div className="flex items-center space-x-1 text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
              <span>Resources</span>
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button className="btn-hero">
              Free Trial
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};