import { useState } from "react";
import type { Agenda, AgendaDetail } from "../@types/agenda";
import { BlurFade } from "./ui/blur-fade";

type Props = {
  data: Agenda[];
};

export default function EventAgenda({ data }: Props) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: number) => {
    if (index === activeTab) return;
    setActiveTab(index);
  };

  const getTypeBadge = (type: AgendaDetail["type"]) => {
    switch (type) {
      case "keynote":
        return (
          <div className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-3 py-1 text-xs font-semibold text-yellow-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Keynote
          </div>
        );
      case "sponsors":
        return (
          <div className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-3 py-1 text-xs font-semibold text-purple-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
              <line x1="7" y1="7" x2="7.01" y2="7" />
            </svg>
            Sponsor Session
          </div>
        );
      case "break":
        return (
          <div className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-3 py-1 text-xs font-semibold text-amber-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
              <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
              <line x1="6" x2="6" y1="2" y2="4" />
              <line x1="10" x2="10" y1="2" y2="4" />
              <line x1="14" x2="14" y1="2" y2="4" />
            </svg>
            Break
          </div>
        );
      case "others":
        return null;
      default:
        return null;
    }
  };

  return (
    <section className="relative z-10 bg-[#080814] bg-gradient-to-b py-12 text-white">
      <div className="container mx-auto">
        <div className="mx-auto">
          {/* Section Header */}
          <div className="section-header mb-12 text-center">
            <h2 className="mb-2 text-2xl font-bold md:text-3xl">
              Event Agenda
            </h2>
            <span className="text-xl">
              Explore sessions and speakers for each day.
            </span>
          </div>

          {/* Tab Navigation */}
          <div className="mb-8 flex justify-center">
            <div className="relative inline-flex gap-1 rounded-lg border border-white/10 bg-white/5 p-1 backdrop-blur-sm">
              {/* Tab Buttons */}
              {data.map((dayData, index) => (
                <button
                  key={`tab-${dayData.day}-${dayData.date}`}
                  type="button"
                  onClick={() => handleTabChange(index)}
                  className={`relative z-10 cursor-pointer rounded-md px-6 py-3 text-base font-semibold transition-all duration-300 ${
                    activeTab === index
                      ? "bg-blue-600/30 text-white shadow-lg shadow-blue-500/20 backdrop-blur-md"
                      : "bg-transparent text-white/60 hover:bg-blue-600/20 hover:text-white/80"
                  } `}
                >
                  Day {index + 1}{" "}
                  <span
                    className={`text-white/60 ${activeTab === index ? "text-white" : ""}`}
                  >
                    ({dayData.date})
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Agenda Content */}
          <div className="relative min-h-[500px]">
            {data.map((dayData, dayIndex) => (
              <div
                key={`day-${dayData.day}-${dayData.date}`}
                className={`transition-opacity duration-300 ${
                  activeTab === dayIndex
                    ? "opacity-100"
                    : "pointer-events-none absolute inset-0 opacity-0"
                } `}
              >
                <div className="space-y-4">
                  {activeTab === dayIndex &&
                    dayData.agendas.map((agenda, agendaIndex) => {
                      return (
                        <BlurFade
                          key={`agenda-${dayData.date}-${agenda.time_start}-${agendaIndex}`}
                          delay={0.1 + agendaIndex * 0.05}
                        >
                          <div className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-[#04060F] bg-gradient-to-br from-[#04060F]/95 via-[#070C1A]/95 to-[#0A1230]/90 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/10">
                            {/* Content */}
                            <div className="flex-1 p-5">
                              {/* Time and Type Badge Row */}
                              <div className="mb-3 flex flex-wrap items-center gap-2">
                                {/* Time Badge */}
                                <div className="inline-flex items-center gap-2 rounded-md bg-blue-600/20 px-3 py-1 text-sm font-medium text-blue-300">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-blue-300"
                                    aria-hidden="true"
                                  >
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                  </svg>
                                  <span>
                                    {agenda.time_start}
                                    {agenda.time_end && ` - ${agenda.time_end}`}
                                  </span>
                                </div>

                                {/* Type Badge */}
                                {getTypeBadge(agenda.type)}
                              </div>

                              {/* Title */}
                              <h3 className="mb-2 max-w-4xl text-lg font-bold text-white">
                                {agenda.title}
                              </h3>

                              {/* Speakers */}
                              {agenda.speakers &&
                                agenda.speakers.length > 0 && (
                                  <div className="flex items-center gap-2 text-white/70">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      aria-hidden="true"
                                    >
                                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                      <circle cx="9" cy="7" r="4" />
                                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                    <span className="text-sm">
                                      {agenda.speakers.join(", ")}
                                    </span>
                                  </div>
                                )}
                            </div>
                          </div>
                        </BlurFade>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-8 text-center">
            <BlurFade delay={0.8}>
              <p className="text-lg text-gray-300">
                The event committee may change the schedule at any time.
              </p>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
