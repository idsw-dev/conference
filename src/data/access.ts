/**
 * Content for /access-guideline. Source: idsw_dev_venue_access_plan.md.
 *
 * NOTE: transit details (routes, stops, walking times) are not independently
 * verified. Check them against Google Maps, the TJ and KAI apps before the event.
 */
export type AccessRoute = {
  from: string;
  /** Short line badges, e.g. "MRT NS", "LRT", "TJ 6". */
  badges: string[];
  steps: string[];
};

export const venueAccess = {
  address:
    "Jl. H.R. Rasuna Said Kav. C-22, Karet Kuningan, Setiabudi, South Jakarta 12940",
  landmark: "Directly next to Plaza Festival.",
  mapsUrl: "https://maps.google.com/?q=Usmar+Ismail+Hall+Jakarta",
  nearestStops: [
    {
      mode: "LRT Jabodebek",
      name: "Stasiun LRT Rasuna Said",
      walk: "about 2 minutes",
    },
    {
      mode: "Transjakarta",
      name: "Halte Rasuna Said",
      walk: "about 2 minutes",
    },
  ],
  walking: [
    "Leave Stasiun LRT Rasuna Said or Halte Transjakarta Rasuna Said by the pedestrian bridge (JPO) toward the Plaza Festival side.",
    "Walk along the pedestrian walkway past Plaza Festival, about 150 meters (around 2 minutes).",
    "Enter the Gedung PPHUI complex to reach Usmar Ismail Hall.",
  ],
};

export const railRoutes: AccessRoute[] = [
  {
    from: "MRT North–South Line",
    badges: ["MRT", "LRT"],
    steps: [
      "Get off at Stasiun MRT Dukuh Atas BNI.",
      "Follow the Serambi Temu Dukuh Atas pedestrian bridge to Stasiun LRT Dukuh Atas (about 5–7 minutes on foot).",
      "Take LRT Jabodebek (Cibubur or Bekasi line) and get off at Stasiun LRT Rasuna Said.",
      "Walk to the hall (see Final walking directions above).",
    ],
  },
  {
    from: "KRL Cikarang (Blue Line)",
    badges: ["KRL", "LRT"],
    steps: [
      "Get off at Stasiun Sudirman.",
      "Follow the Dukuh Atas TOD / Kendal Tunnel walkway to Stasiun LRT Dukuh Atas (about 8–10 minutes on foot).",
      "Take LRT Jabodebek (Cibubur or Bekasi line) and get off at Stasiun LRT Rasuna Said.",
      "Walk to the hall.",
    ],
  },
  {
    from: "KRL Bogor (Red Line)",
    badges: ["KRL", "LRT"],
    steps: [
      "Get off at Stasiun Cawang.",
      "Take the covered skybridge from Cawang station to Stasiun LRT Cikoko (about 3–4 minutes on foot).",
      "Take LRT Jabodebek toward Dukuh Atas and get off at Stasiun LRT Rasuna Said.",
      "Walk to the hall.",
    ],
  },
];

export const busRoutes: AccessRoute[] = [
  {
    from: "Transjakarta Corridor 6 / 6A",
    badges: ["TJ 6", "TJ 6A"],
    steps: [
      "Board Corridor 6 (Ragunan to Galunggung) or Route 6A (Ragunan to Balai Kota via Kuningan).",
      "Get off at Halte Rasuna Said.",
      "Cross by the JPO and walk to the hall. Do not take 6B: it goes via Semanggi and Sudirman, not Kuningan.",
    ],
  },
  {
    from: "Transjakarta Corridor 9",
    badges: ["TJ 9", "TJ 6M"],
    steps: [
      "Take Corridor 9 (Pinang Ranti to Pluit) and get off at Halte Denpasar.",
      "Transfer to Route 6M (Blok M to Stasiun Manggarai) toward Manggarai. Or take the skybridge to Halte Simpang Kuningan and board Corridor 6 / 6A northbound.",
      "Get off at Halte Rasuna Said and walk to the hall.",
    ],
  },
  {
    from: "Transjakarta Corridor 13",
    badges: ["TJ 13", "TJ 13E"],
    steps: [
      "Direct: take Route 13E (Puri Beta to Flyover Kuningan) and get off at Halte Rasuna Said. Check the TJ app first, as 13E may not run on weekends.",
      "Or take Corridor 13 (CBD Ciledug to Tegal Mampang), get off at Halte Tegal Mampang, and transfer to Corridor 6 / 6A northbound to Halte Rasuna Said.",
      "Walk to the hall.",
    ],
  },
  {
    from: "Transjakarta Corridor 8",
    badges: ["TJ 8", "TJ 13E"],
    steps: [
      "Take Corridor 8 (Lebak Bulus to Pasar Baru) and get off at Halte Velbak.",
      "Use the skybridge to transfer to Corridor 13 / 13E toward Tegal Mampang / Kuningan.",
      "Continue as in the Corridor 13 route above, then walk to the hall.",
    ],
  },
  {
    from: "MRT Bendungan Hilir, or KRL Karet / Manggarai",
    badges: ["MRT", "KRL", "TJ 6M"],
    steps: [
      "From MRT Bendungan Hilir or KRL Karet, walk to the Karet Sudirman bus stop on Jl. Jend. Sudirman.",
      "Take Route 6M (Blok M to Manggarai).",
      "From KRL Manggarai, walk to Halte Transjakarta Manggarai and take Route 6M instead.",
      "Get off at Halte Rasuna Said next to Plaza Festival.",
    ],
  },
  {
    from: "KRL Bogor (Red Line) via Tebet",
    badges: ["KRL", "TJ 6C"],
    steps: [
      "Get off at Stasiun Tebet and go to the Transjakarta hub.",
      "Take Route 6C (Stasiun Tebet to Kuningan).",
      "Get off at Halte Rasuna Said in front of Plaza Festival.",
    ],
  },
];

export const rideHailing = {
  intro:
    "To skip transfers or avoid walking in the heat or rain, take GoRide / GrabBike or GoCar / GrabCar for the last stretch.",
  pins: [
    "Set your destination to Usmar Ismail Hall, or Gedung Pusat Perfilman H. Usmar Ismail (PPHUI).",
    "If the main gate is congested, use Plaza Festival (South Entrance) as the pin. It is next door, about a 1-minute walk.",
  ],
};

export const carFreeDay = {
  title: "Car Free Day on Sunday, 22 November",
  body: "On Sunday, 22 November, Jl. H.R. Rasuna Said is closed to cars and motorbikes from 05:30 to 09:00 WIB. Cars and ride-hailing cannot drop you at the gate before 09:00, when registration opens. Take the LRT to Rasuna Said, or Transjakarta Corridor 6 / 6A to Halte Rasuna Said, which keep running. If you drive, park at Plaza Festival.",
};

export const parking = {
  intro:
    "Usmar Ismail Hall has parking for cars and motorbikes, but it has fewer than 100 spaces.",
  overflow: "We recommend parking at Plaza Festival next door instead.",
};

export const tips = [
  "Keep at least Rp 20,000 on your e-money card (JakLingko, Mandiri e-Money, BCA Flazz, BNI TapCash or BRI Brizzi) for tapping in and out of trains and buses.",
  "Handy apps: TJ: Transjakarta, Access by KAI, MyMRTJ and Google Maps for live schedules.",
  "Peak hours (07:30–09:30 and 16:30–19:30 WIB): Jl. Prof. Dr. Satrio and Jl. H.R. Rasuna Said are heavily congested. LRT, dedicated bus lanes or a motorbike taxi are usually faster than a car.",
];
