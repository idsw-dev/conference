export const siteConfig = {
  event: {
    name: "IDSW 2026",
    tagline: "The Biggest Community-Led Developer Conference in Indonesia",
    dates: "21–22 Nov 2026",
    time: "08.30 – 17.30 WIB",
    venue: "Usmar Ismail Hall, Jakarta Selatan",
    venueUrl: "https://maps.google.com/?q=Usmar+Ismail+Hall+Jakarta",
    calendarUrl:
      "https://calendar.google.com/calendar/render?action=TEMPLATE&text=IDSW+2026+-+Indonesia+Software+Developer+Conference&dates=20261121T013000Z/20261122T103000Z&details=Indonesia+Software+Developer+Conference+2026.+Indonesia%27s+biggest+community-led+developer+conference.&location=Usmar+Ismail+Hall%2C+Jakarta",
  },

  phase: "cfp" as const,

  cfp: {
    enabled: true,
    url: "https://cfp.idsw.dev/",
    deadline: "26 September 2026",
    deadlineTime: "23:59 WIB",
    deadlineIso: "2026-09-26T23:59:59+07:00",
    formats: [
      {
        duration: "30 min",
        title: "Full session",
        desc: "Architecture, production systems, or a hard technical lesson on the main stage.",
      },
      {
        duration: "7 min",
        title: "Lightning talk",
        desc: "One tool, one technique, or one sharp idea. Then sit down.",
      },
    ],
    topics: [
      {
        title: "Product Engineering",
        desc: "How teams combine product thinking, user needs, and technical execution.",
      },
      {
        title: "Latest Trends",
        desc: "New tools, practices, and architectures changing how software is built.",
      },
      {
        title: "Technology Leadership",
        desc: "How technical leaders shape culture, teams, and architecture decisions.",
      },
      {
        title: "In-Depth Software Engineering",
        desc: "Production systems, performance, reliability, and hard-won lessons.",
      },
    ],
    whySpeak: [
      "Prep a talk on something you care about.",
      "Meet people working on the same problems.",
      "Speaker ticket included.",
      "Speaker dinner with the rest of the lineup.",
    ],
  },

  tickets: {
    enabled: false,
    url: "",
  },

  sponsors: {
    showSection: true,
    prospectusUrl: "/IDSW%202026%20-%20Sponsorship%20Proposal.pdf",
    email: "idsw.sponsor@perkodi.org",
    contactPerson: "Sidiq Permana",
    contactPhone: "+62 812-1084-1382",
  },

  about:
    "IDSW is a community-led developer conference run by PERKODI and tech communities across Indonesia (Python ID, id-ruby, TEKNUM, JakartaJS, Deeptech.id). 5,000+ developers have joined 15+ past editions since 2017.",

  previousEvents: [
    {
      year: 2024,
      url: "/2024",
      label: "IDSW 2024",
      edition: "Inaugural Edition",
      dates: "16–17 November 2024",
      venue: "GetCourse Hall, Jakarta",
      highlights: "12+ Keynotes & Sessions · Community Track",
      logo: "/2024/logo.svg",
    },
    {
      year: 2025,
      url: "/2025",
      label: "IDSW 2025",
      edition: "AI Edition · with SerpApi",
      dates: "22–23 November 2025",
      venue: "Usmar Ismail Hall, Jakarta",
      highlights: "450+ Attendees · 17+ Speakers · 88% Pros",
      logo: "/2025/logo-blue.png",
      logoWhite: "/2025/nav-logo.png",
    },
  ],

  nav: [
    { name: "Home", href: "/", external: false },
    { name: "CFP", href: "/#cfp", external: false },
    { name: "Sponsors", href: "/#sponsors", external: false },
    { name: "Previous Events", href: "/#previous-events", external: false },
    { name: "FAQ", href: "/#faq", external: false },
    { name: "Contact", href: "/#contact", external: false },
  ],
} as const;
