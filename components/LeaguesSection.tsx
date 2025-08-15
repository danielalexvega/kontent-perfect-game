interface League {
  name: string;
  color: string;
  textColor: string;
}

interface LeaguesData {
  title?: string;
  description?: string;
  leagues?: League[];
}

interface LeaguesSectionProps {
  data?: LeaguesData;
}

export default function LeaguesSection({ data }: LeaguesSectionProps) {
  // Default values if no data is provided
  const sectionData = data || {
    title: "CURRENT PG LEAGUES & STANDINGS",
    description: "A season-based weekly format, competing with teams in your area and powered by Perfect Game.",
    leagues: [
      { name: 'NEW ENGLAND ELITE', color: 'bg-yellow-400', textColor: 'text-[#1a365d]' },
      { name: 'MASSACHUSETTS', color: 'bg-blue-600', textColor: 'text-white' },
      { name: 'NEW HAMPSHIRE/MAINE', color: 'bg-green-700', textColor: 'text-white' },
      { name: 'CONNECTICUT', color: 'bg-red-700', textColor: 'text-white' },
      { name: 'RHODE ISLAND', color: 'bg-orange-500', textColor: 'text-white' },
      { name: 'NEW ENGLAND 15-18U', color: 'bg-gray-700', textColor: 'text-white' },
      { name: 'IOWA', color: 'bg-[#1a365d]', textColor: 'text-white' },
    ]
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {sectionData.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {sectionData.description}
          </p>
        </div>

        {/* League Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {sectionData.leagues?.slice(0, 6).map((league, index) => (
            <div
              key={index}
              className={`${league.color} ${league.textColor} p-6 rounded-lg cursor-pointer hover:opacity-90 transition-opacity`}
            >
              <div className="flex items-center justify-between">
                <div className="text-lg font-bold">{league.name}</div>
                <div className="text-sm">PG LEAGUES</div>
              </div>
            </div>
          ))}
        </div>

        {/* Iowa League - Single Card */}
        {sectionData.leagues && sectionData.leagues.length > 6 && (
          <div className="flex justify-center">
            <div className={`${sectionData.leagues[6].color} ${sectionData.leagues[6].textColor} p-6 rounded-lg cursor-pointer hover:opacity-90 transition-opacity w-full max-w-md`}>
              <div className="flex items-center justify-between">
                <div className="text-lg font-bold">{sectionData.leagues[6].name}</div>
                <div className="text-sm">PG LEAGUES</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
