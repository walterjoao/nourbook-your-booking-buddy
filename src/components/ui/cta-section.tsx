import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export const CtaSection = () => {
  return (
    <section className="py-20 gradient-hero">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Ready to transform your{" "}
            <span className="text-gradient">booking experience?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of home service businesses who trust NourBook 
            to manage their operations efficiently.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 h-12 text-base bg-white"
            />
            <Button className="btn-hero h-12 px-8 group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Start your 14-day free trial today. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};