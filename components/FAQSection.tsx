'use client';

import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQData {
  title?: string;
  faqs?: FAQ[];
}

interface FAQSectionProps {
  data?: FAQData;
}

export default function FAQSection({ data }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Default values if no data is provided
  const sectionData = data || {
    title: "LEAGUES FAQ",
    faqs: [
      {
        question: "Can individual athletes sign up for a PG League?",
        answer: "Yes, individual athletes can sign up for PG Leagues. We offer both team and individual registration options to accommodate different needs and preferences."
      },
      {
        question: "What age & skill divisions are available within PG Leagues?",
        answer: "PG Leagues offer multiple age divisions ranging from 8U to 18U, with skill-based divisions within each age group to ensure competitive and fair play."
      },
      {
        question: "Will there be a League Championship?",
        answer: "Yes, each PG League season concludes with a championship tournament where teams compete for the league title and recognition."
      },
      {
        question: "What are the key benefits of joining a PG League?",
        answer: "Key benefits include professional stat tracking, exposure to scouts, competitive weekly games, and integration with Perfect Game's comprehensive scouting network."
      },
      {
        question: "What is the PG League structure?",
        answer: "PG Leagues follow a season-based weekly format with regular season games, playoffs, and championships. Each league is regionally organized for convenient participation."
      }
    ]
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {sectionData.title}
          </h2>
        </div>

        <div className="space-y-4">
          {sectionData.faqs?.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                <span className="text-2xl text-gray-500">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
