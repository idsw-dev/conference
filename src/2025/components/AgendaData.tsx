import { useState } from "react";
import type { Agenda } from "../@types/agenda";

type Props = {
  data: Agenda[];
};
export default function AgendaData({ data }: Props) {
  const [active, setActive] = useState(0);
  return (
    <div className="grid grid-cols-12">
      <div className="agenda-left relative col-span-12 items-end pb-0 lg:col-span-3 lg:block">
        <div className="bg-to-start bg-primary-dark"></div>
        <div className="agenda-text text-white">
          <h2 className="mb-12 text-3xl font-bold lg:text-5xl">Event Agenda</h2>
          <div className="mb-8 flex gap-5 text-left lg:flex-col">
            {data.map((day, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={
                  active == i
                    ? "w-full bg-lightblue p-5 text-left text-2xl font-bold"
                    : "w-full bg-white/10 p-5 text-left text-2xl font-bold text-white/60 transition hover:bg-lightblue/20 hover:text-white/80"
                }
              >
                {day.day}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="agenda-right relative col-span-12 grid flex-shrink grid-cols-9 flex-col lg:col-start-5">
        {data.map((agenda, i) =>
          i == active
            ? agenda.agendas.map((e, j) => (
                <div
                  className="event-card col-span-12 mb-8 flex bg-gradient-to-r from-[#2F4D78] to-[#28456F] text-white lg:grid-rows-1"
                  key={j}
                >
                  <div className="event-card-content lg:border-t-none border-t-none border-t-white border-opacity-50 p-4">
                    <h3 className="event-card-title mb-3 text-xl font-bold">
                      {e.title}
                    </h3>
                    <p className="event-card-description mb-4 leading-tight">
                      {e.speakers?.join(", ")}
                    </p>
                    <p className="event-card-time font-medium">
                      {e.time_start} - {e.time_end}
                    </p>
                  </div>
                </div>
              ))
            : "",
        )}
      </div>
    </div>
  );
}
