import { Calendar, Clock, DollarSign, MapPin, MessageSquare, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Automated booking system that syncs with your calendar and optimizes routes for maximum efficiency."
    },
    {
      icon: MessageSquare,
      title: "Instant Quotes", 
      description: "Generate and send professional quotes instantly based on service type, location, and requirements."
    },
    {
      icon: MapPin,
      title: "Route Optimization",
      description: "AI-powered dispatch system that optimizes technician routes and reduces travel time."
    },
    {
      icon: DollarSign,
      title: "Payment Processing",
      description: "Accept payments on-site or remotely with integrated payment processing and invoicing."
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Manage your entire team, track performance, and assign jobs based on skills and availability."
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Keep customers informed with automatic notifications and real-time job status updates."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Scheduling software that works the way{" "}
            <span className="text-gradient">your service business does</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to run your home service business efficiently, 
            from initial quote to final payment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-elevated p-6 hover:scale-105 transition-all duration-300">
              <CardContent className="p-0 space-y-4">
                <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-lg w-fit">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};