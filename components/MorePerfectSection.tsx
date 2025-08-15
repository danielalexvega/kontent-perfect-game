interface Card {
  title: string;
  description: string;
  image: string;
  color: string;
  buttonText: string;
}

interface MorePerfectData {
  title?: string;
  description?: string;
  cards?: Card[];
}

interface MorePerfectSectionProps {
  data?: MorePerfectData;
}

export default function MorePerfectSection({ data }: MorePerfectSectionProps) {
  // Default values if no data is provided
  const sectionData = data || {
    title: "THERE'S MORE PERFECT OUT THERE",
    description: "Looking to take your Perfect Game experience further? Explore our Tournaments where travel ball teams take on the highest levels of competition, or our Showcases and Prospect Gateways where individual excellence gets its opportunity.",
    cards: [
      {
        title: 'TOURNAMENTS',
        description: 'The ultimate travel ball team experience.',
        image: '🏟️',
        color: 'from-blue-400 to-blue-600',
        buttonText: 'GET STARTED'
      },
      {
        title: 'SHOWCASES',
        description: 'The premier evaluation, improvement and exposure venue.',
        image: '⚾',
        color: 'from-green-400 to-green-600',
        buttonText: 'GET STARTED'
      },
      {
        title: 'PROSPECT GATEWAYS',
        description: 'World class exposure and development for individual 13-14U athletes.',
        image: '🎯',
        color: 'from-yellow-400 to-yellow-600',
        buttonText: 'GET STARTED'
      }
    ]
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {sectionData.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {sectionData.description}
          </p>
        </div>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectionData.cards?.map((card, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              {/* Card Image */}
              <div className={`h-48 bg-gradient-to-br ${card.color} flex items-center justify-center`}>
                <div className="text-6xl">{card.image}</div>
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{card.description}</p>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                  {card.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
