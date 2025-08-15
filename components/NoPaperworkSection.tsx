interface NoPaperworkData {
  title?: string;
  description?: string;
  image?: string;
}

interface NoPaperworkSectionProps {
  data?: NoPaperworkData;
}

export default function NoPaperworkSection({ data }: NoPaperworkSectionProps) {
  // Default values if no data is provided
  const sectionData = data || {
    title: "NO PAPERWORK. JUST PLAY.",
    description: "With PG Leagues, we handle the scheduling, stat tracking, and integration of Player Profiles with data partners. You show up at locations near you each week and play ball."
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              {sectionData.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {sectionData.description}
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="w-full h-80 bg-gradient-to-br from-green-400 to-green-600 rounded-lg overflow-hidden">
              {/* Placeholder for coach and players image */}
              <div className="w-full h-full bg-gradient-to-br from-green-300 to-green-500 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">👨‍🏫</div>
                  <p className="text-lg">Coach & Players Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
