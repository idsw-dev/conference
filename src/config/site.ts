import midtransLogo from "../data/images/partners/midtrans.png";
import biznetGioLogo from "../data/images/partners/biznet-gio.png";
import grafanaLogo from "../data/images/partners/grafana.svg";
import remoteBrowserLogo from "../data/images/partners/remote-browser.png";
import pythonIdLogo from "../data/images/community/python-id.png";
import startupLokalLogo from "../data/images/community/startuplokal.png";
import wpuLogo from "../data/images/community/wpu.png";
import founderInstituteFoundryLogo from "../data/images/community/founder-institute-x-foundry.svg";
import idsw2024Logo from "../data/images/previous-events/2024-logo.svg";
import idsw2025Logo from "../data/images/previous-events/2025-logo-blue.png";
import idsw2025WhiteLogo from "../data/images/previous-events/2025-nav-logo.png";

const ticketsUrl =
  "https://tiptip.id/event/68c1a321-c6f7-4fe8-8ac0-38b48136ff33";

export const siteConfig = {
  event: {
    name: "IDSW 2026",
    tagline: "The Biggest Community-Led Developer Conference in Indonesia",
    dates: "21–22 Nov 2026 | Day 1: 08.00–18.15 | Day 2: 09.00–18.15 WIB",
    startDate: "2026-11-21T08:00:00+07:00",
    endDate: "2026-11-22T18:15:00+07:00",
    venue: "Usmar Ismail Hall, Jakarta Selatan",
    venueUrl: "https://maps.google.com/?q=Usmar+Ismail+Hall+Jakarta",
    calendarUrl:
      "https://calendar.google.com/calendar/render?action=TEMPLATE&text=IDSW+2026+-+Indonesia+Software+Developer+Conference&dates=20261121T010000Z/20261122T111500Z&details=Indonesia+Software+Developer+Conference+2026.+Indonesia%27s+biggest+community-led+developer+conference.&location=Usmar+Ismail+Hall%2C+Jakarta",
  },

  phase: "cfp" as const,

  cfp: {
    enabled: false,
    url: "https://cfp.idsw.dev/",
    deadline: "26 September 2026",
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
    enabled: true,
    url: ticketsUrl,
    label: "Get a regular ticket",
  },

  keynotes: [
    {
      name: "Mansur Maturidi Arief",
      position:
        "Assistant Professor, Industrial and Systems Engineering, King Fahd University of Petroleum and Minerals (KFUPM), and Faculty Director, AI Verification and Validation (AI V&V) Lab",
      photo: "mansur",
      brief:
        "Mansur M. Arief adalah Assistant Professor di Departemen Industrial and Systems Engineering KFUPM, Arab Saudi, sekaligus memimpin AI Verification and Validation Lab dan meneliti di IRC for Smart Mobility and Logistics dan KFUPM-SDAIA Joint Research Center for AI. Sebelumnya ia menjabat sebagai Executive Director di Stanford Center for AI Safety dan menyelesaikan PhD di Carnegie Mellon University dengan fokus pada evaluasi tersertifikasi untuk sistem otonom.",
    },
    {
      name: "Muqorrobin Marufi Syihab",
      position: "Founder of Nuwaira Academy & Creator of Evonic",
      photo: "robin",
      brief:
        "A practitioner, engineer, and independent researcher. As a serial entrepreneur with over 20 years of experience across various sectors including Artificial Intelligence (AI), Cybersecurity, Social Media, Blockchain, and Tech Education",
    },
    {
      name: "Mustafa Zaki Assagaf",
      position: "Platform Engineer",
      photo: "mustafa-z-assagaf",
      brief: "Umur 26, domisili depok, engga suka makan pedes",
    },
    {
      name: "Eko Kurniawan Khannedy",
      position:
        "Technical Architect at Blibli & Founder of Programmer Zaman Now",
      photo: "eko-kurniawan-khannedy",
      brief:
        "Technical Architect at Blibli.com and founder of Programmer Zaman Now. With over 15 years of software engineering experience designing high-scale distributed systems and enterprise architectures, Eko is also one of Indonesia's foremost tech educators, having mentored over 300,000 developers across the country.",
    },
    {
      name: "Aria Ghora",
      position: "AI R&D Engineer at EAGLYS, Tokyo",
      photo: "aria-ghora",
      brief:
        "Aria works across prototyping recent research and proofs of concept through to system architecture, and leads a small engineering team. PhD from HUFS, South Korea, with research in applied AI/ML.",
    },
  ],

  sponsors: {
    showSection: true,
    prospectusUrl: "/IDSW%202026%20-%20Sponsorship%20Proposal.pdf",
    email: "idsw.sponsor@perkodi.org",
    contactPerson: "Sidiq Permana",
    contactPhone: "+62 812-1084-1382",
  },

  partners: [
    {
      name: "Midtrans",
      logo: midtransLogo,
      url: "https://midtrans.com",
      tier: "platinum",
    },
    {
      name: "Biznet Gio",
      logo: biznetGioLogo,
      url: "https://www.biznetgio.com",
      tier: "platinum",
    },
  ],

  digitalPartners: [
    {
      name: "Grafana",
      logo: grafanaLogo,
      url: "https://grafana.com",
      tier: "digital",
    },
    {
      name: "Remote Browser",
      logo: remoteBrowserLogo,
      url: "https://github.com/remotebrowser/remotebrowser",
      tier: "digital",
    },
  ],

  communities: [
    {
      name: "Python ID",
      logo: pythonIdLogo,
      url: "https://telegram.me/pythonID",
    },
    {
      name: "StartupLokal",
      logo: startupLokalLogo,
      url: "https://startuplokal.community/",
    },
    {
      name: "WPU",
      logo: wpuLogo,
      url: "https://discord.gg/S4rrXQU",
    },
    {
      name: "Founder Institute × Foundry",
      logo: founderInstituteFoundryLogo,
      url: "https://fi.co/join/idsw",
    },
  ],

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
      highlights: "4 Keynotes · 15 Speakers",
      logo: idsw2024Logo,
    },
    {
      year: 2025,
      url: "/2025",
      label: "IDSW 2025",
      edition: "AI Edition · with SerpApi",
      dates: "22–23 November 2025",
      venue: "Usmar Ismail Hall, Jakarta",
      highlights: "450+ Attendees · 17+ Speakers",
      logo: idsw2025Logo,
      logoWhite: idsw2025WhiteLogo,
    },
  ],

  nav: [
    { name: "Home", href: "/", external: false },
    { name: "Speakers", href: "/#keynote-speakers", external: false },
    { name: "Schedule", href: "/#schedule", external: false },
    { name: "CFP", href: "/#cfp", external: false },
    { name: "Sponsors", href: "/#sponsors", external: false },
    { name: "Previous Events", href: "/#previous-events", external: false },
    { name: "FAQ", href: "/#faq", external: false },
    { name: "Contact", href: "/#contact", external: false },
    { name: "Tickets", href: ticketsUrl, external: true },
  ],
} as const;
