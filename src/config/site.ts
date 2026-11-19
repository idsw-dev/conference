import midtransLogo from "../data/images/partners/midtrans.png";
import biznetGioLogo from "../data/images/partners/biznet-gio.png";
import grafanaLogo from "../data/images/partners/grafana.svg";
import lmdLogo from "../data/images/partners/lmd.png";
import remoteBrowserLogo from "../data/images/partners/remote-browser.png";
import fenrirLogo from "../data/images/partners/fenrir.png";
import pythonIdLogo from "../data/images/community/python-id.png";
import startupLokalLogo from "../data/images/community/startuplokal.png";
import wpuLogo from "../data/images/community/wpu.png";
import founderInstituteFoundryLogo from "../data/images/community/founder-institute-x-foundry.svg";
import blockDevLogo from "../data/images/community/blockdev.png";
import perkodiLogo from "../data/images/organizers/perkodi-logo.svg";
import perkodiLogoWhite from "../data/images/organizers/perkodi-logo-white.svg";

const ticketsUrl =
  "https://tiptip.id/event/68c1a321-c6f7-4fe8-8ac0-38b48136ff33";
const streamUrl = "https://stream.idsw.dev/";

// start and end drive the hero's live and between-days states.
const days = [
  {
    label: "Day 1",
    time: "08.00–18.15",
    start: "2026-11-21T08:00:00+07:00",
    end: "2026-11-21T18:15:00+07:00",
  },
  {
    label: "Day 2",
    time: "09.00–18.15",
    start: "2026-11-22T09:00:00+07:00",
    end: "2026-11-22T18:15:00+07:00",
  },
] as const;

export const siteConfig = {
  event: {
    name: "IDSW 2026",
    tagline: "The Biggest Community-Led Developer Conference in Indonesia",
    dateRange: "21–22 Nov 2026",
    days,
    timezone: "WIB",
    startDate: days[0].start,
    endDate: days[days.length - 1].end,
    venue: "Usmar Ismail Hall, Jakarta Selatan",
    venueUrl: "https://maps.google.com/?q=Usmar+Ismail+Hall+Jakarta",
    calendarUrl:
      "https://calendar.google.com/calendar/render?action=TEMPLATE&text=IDSW+2026+-+Indonesia+Software+Developer+Conference&dates=20261121T010000Z/20261122T111500Z&details=Indonesia+Software+Developer+Conference+2026.+Indonesia%27s+biggest+community-led+developer+conference.&location=Usmar+Ismail+Hall%2C+Jakarta",
  },

  // TipTip event page. Venue tickets are sold out; TipTip shows whether online
  // streaming tickets are still on sale.
  tickets: {
    url: ticketsUrl,
  },

  stream: {
    url: streamUrl,
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
  ],

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

  silverPartners: [
    {
      name: "Lintas Media Danawa",
      logo: lmdLogo,
      url: "https://www.lmd.co.id/",
      tier: "silver",
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
    {
      name: "Fenrir",
      logo: fenrirLogo,
      url: "https://fenrir.lio.id/",
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
    {
      name: "BlockDev",
      logo: blockDevLogo,
      url: "https://blockdev.org/",
    },
  ],

  about:
    "IDSW is a community-led developer conference run by PERKODI and tech communities across Indonesia (Python ID, id-ruby, TEKNUM, JakartaJS, Deeptech.id). 5,000+ developers have joined 15+ past editions since 2017.",

  organizer: {
    name: "PERKODI",
    fullName: "Perkumpulan Pengrajin Kode Indonesia",
    url: "https://perkodi.org",
    logo: perkodiLogo,
    logoWhite: perkodiLogoWhite,
  },

  nav: [
    { name: "Speakers", href: "/#keynote-speakers", external: false },
    { name: "Schedule", href: "/#schedule", external: false },
    { name: "Sponsors", href: "/#sponsors", external: false },
    { name: "FAQ", href: "/#faq", external: false },
    { name: "Guideline", href: "/guideline", external: false },
    { name: "Stream", href: streamUrl, external: true },
  ],

  guidelines: [
    {
      name: "Day Guideline",
      href: "/day-guideline",
      desc: "Venue map, code of conduct and how to report misbehavior.",
    },
    {
      name: "Check-in Guideline",
      href: "/check-in-guideline",
      desc: "What to bring and where to go when you arrive.",
    },
    {
      name: "Access Guideline",
      href: "/access-guideline",
      desc: "Getting to Usmar Ismail Hall by LRT, Transjakarta, ride-hailing or car.",
    },
  ],
} as const;
