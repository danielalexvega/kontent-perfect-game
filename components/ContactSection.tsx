interface ContactData {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

interface ContactSectionProps {
  data?: ContactData;
}

export default function ContactSection({ data }: ContactSectionProps) {
  // Default values if no data is provided
  const sectionData = data || {
    title: "DON'T SEE A LEAGUE NEAR YOU?",
    description: "If PG Leagues aren't available in your area, we encourage club owners, league directors, and coaches to contact us with their interest as we build out our local offerings.",
    buttonText: "CONTACT PG LEAGUES",
    buttonLink: "#"
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {sectionData.title}
        </h2>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          {sectionData.description}
        </p>
        <button className="bg-[#1a365d] hover:bg-[#0f2a4a] text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
          {sectionData.buttonText}
        </button>
      </div>
    </section>
  );
}
