interface TechData {
  title?: string;
  description?: string;
  image?: string;
}

interface TechSectionProps {
  data?: TechData;
}

export default function TechSection({ data }: TechSectionProps) {
  // Default values if no data is provided
  const sectionData = data || {
    title: "THE TECH THAT DRIVES DEVELOPMENT",
    description: "PG Leagues feature DiamondKast Plus advanced stat tracking. Athletes will add data to their baseball resume and coaches will have productive statistics at their fingertips. Select Leagues events may feature top-tier data like Yakker/Trakker pitch data and Pulotoro swing analysis."
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="w-full h-80 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg overflow-hidden">
              {/* Placeholder for baseball player with bat image */}
              <div className="w-full h-full bg-gradient-to-br from-purple-300 to-purple-500 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">🏏</div>
                  <p className="text-lg">Baseball Player with Bat</p>
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
          </div>
        </div>
      </div>
    </section>
  );
}
