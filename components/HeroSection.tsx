interface HeroData {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
}

interface HeroSectionProps {
  data?: HeroData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  // Default values if no data is provided
  const heroData = data || {
    title: "Perfect Game",
    subtitle: "The World's Largest Scouting Organization",
    buttonText: "Get Started",
    buttonLink: "#"
  };

  return (
    <section className="relative">
      <div className="w-full h-96 md:h-[500px] bg-gradient-to-r from-blue-900 to-blue-700 relative overflow-hidden">
        {/* Background image or gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">{heroData.title}</h2>
            <p className="text-xl md:text-2xl mb-8">{heroData.subtitle}</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              {heroData.buttonText}
            </button>
          </div>
        </div>
        
        {/* Background overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
        </div>
      </div>
    </section>
  );
}
