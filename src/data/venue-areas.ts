/**
 * Venue areas for /day-guideline. Hotspot boxes are percentages of the floor plan
 * image (src/data/images/venue/floor-plan.png, 934x1062), so they scale with it.
 * x/y = top-left corner, w/h = size.
 *
 * NOTE: photo-wall (the area left of the blue strip beside "4 GALERI"), stairs and the help-desk / check-in-desk split are best guesses from the plan. Verify
 * against the real event layout and adjust.
 */
export type VenueArea = {
  id: string;
  label: string;
  description: string;
  /** On the basement floor: the plan is greyed out and the overlay is drawn dashed. */
  basement?: boolean;
  /** Short sign drawn next to the overlay. */
  sign?: string;
  /** Where the sign sits relative to the overlay. Defaults to "below". */
  signPlacement?: "below" | "inside";
  /** Also shown (as a route hint) whenever one of these area ids is selected. */
  guideFor?: string[];
  x: number;
  y: number;
  w: number;
  h: number;
};

export const venueAreas: VenueArea[] = [
  {
    id: "main-hall",
    label: "Main Hall",
    description: "The single-track auditorium where all talks take place.",
    x: 47.6,
    y: 0,
    w: 50.4,
    h: 51.3,
  },
  {
    id: "dining-area",
    label: "Dining Area",
    description:
      "Where lunch and coffee breaks are served, next to the main hall.",
    x: 17.1,
    y: 20.7,
    w: 30,
    h: 23.3,
  },
  {
    id: "musholla",
    label: "Musholla",
    description:
      "Located in the basement, partially below the dining area. Take the lift or stairs (highlighted on the plan) down from this floor. Dashed outline shows its approximate location.",
    basement: true,
    sign: "Basement Musholla",
    signPlacement: "inside",
    x: 17.1,
    y: 33,
    w: 30,
    h: 11,
  },
  {
    id: "help-desk",
    label: "Help Desk",
    description:
      "Ask the IDSW crew for help, lost and found, or to report an incident.",
    x: 82.4,
    y: 79.2,
    w: 3.5,
    h: 6.6,
  },
  {
    id: "check-in-desk",
    label: "Check-in Desk",
    description:
      "Registration. Bring your ID or passport and the QR code from your ticket email.",
    x: 86.0,
    y: 79.2,
    w: 7.4,
    h: 6.6,
  },
  {
    id: "photo-wall",
    label: "Photo Wall",
    description: "Take a photo with friends and speakers.",
    x: 82.5,
    y: 59,
    w: 8.5,
    h: 16,
  },
  {
    id: "toilet-women",
    label: "Toilet (Women)",
    description: "Guest women toilet.",
    x: 2.7,
    y: 31.5,
    w: 9.2,
    h: 12.7,
  },
  {
    id: "toilet-men",
    label: "Toilet (Men)",
    description: "Guest men toilet.",
    x: 2.7,
    y: 49.4,
    w: 10.7,
    h: 10,
  },
  {
    id: "lift",
    label: "Lift",
    description:
      "Lift between floors. Take the lift down to the basement for the Musholla.",
    sign: "Lift ↓ Basement",
    guideFor: ["musholla"],
    x: 17.1,
    y: 49.4,
    w: 6.6,
    h: 10,
  },
  {
    id: "stairs",
    label: "Stairs",
    description:
      "Stairs between floors. Take the stairs down to the basement for the Musholla.",
    sign: "Stairs ↓ Basement",
    guideFor: ["musholla"],
    x: 18.2,
    y: 40,
    w: 10.7,
    h: 4.4,
  },
];
