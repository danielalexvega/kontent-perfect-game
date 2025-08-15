interface LegitLocalData {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  image?: string;
}

interface LegitLocalSectionProps {
  data?: LegitLocalData;
}

export default function LegitLocalSection({ data }: LegitLocalSectionProps) {
  // Default values if no data is provided
  const sectionData = data || {
    title: "LEGIT. LOCAL.",
    description: "PG Leagues brings competitive development closer to home with flexible, regional weekly leagues.",
    buttonText: "SEE ALL LEAGUES",
    buttonLink: "#"
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="w-full h-80 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg overflow-hidden">
              {/* Placeholder for baseball player image */}
              <div className="w-full h-full bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">⚾</div>
                  <p className="text-lg">Baseball Player Image</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              {sectionData.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {sectionData.description}
            </p>
            <button className="bg-[#1a365d] hover:bg-[#0f2a4a] text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              {sectionData.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
