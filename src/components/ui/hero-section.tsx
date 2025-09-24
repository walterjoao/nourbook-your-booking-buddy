import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

export const HeroSection = () => {
  return (
    <section className="gradient-hero py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                The best booking experience for{" "}
                <span className="text-gradient">home service businesses</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Take bookings, send quotes, and schedule jobs in real time—plus manage 
                dispatch and payments, all in one place.
              </p>
            </div>

            {/* Email Signup Form */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 h-12 text-base"
              />
              <Button className="btn-hero h-12 px-8 whitespace-nowrap">
                Start Free Trial
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>Easy setup</span>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="card-elevated p-4 bg-white">
              <img 
                src={heroImage} 
                alt="NourBook booking dashboard interface" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            {/* Floating elements for visual appeal */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};