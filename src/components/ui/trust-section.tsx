export const TrustSection = () => {
  const companies = [
    { name: "Renewal by Andersen", logo: "🏠" },
    { name: "BalconyCleaners", logo: "🧽" },
    { name: "Casabella", logo: "✨" },
    { name: "Mr Clean Carpet Care", logo: "🧹" },
    { name: "Mike's Hauling Service", logo: "🚛" },
    { name: "SpinX Digital", logo: "💫" }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg text-muted-foreground mb-12">
          Trusted by home service businesses worldwide.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-white/50 transition-all duration-300 cursor-pointer group"
            >
              <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                {company.logo}
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};