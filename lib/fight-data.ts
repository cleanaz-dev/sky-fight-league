export type Fighter = {
  name: string;
  nickname: string;
  record: string;
  country: string;
  corner: "red" | "white";
};

export type Bout = {
  weightClass: string;
  isTitle?: boolean;
  rounds: number;
  red: Fighter;
  white: Fighter;
};

export const EVENT = {
  number: "SFL 12",
  title: "Reign of Fire",
  date: "Saturday, October 18, 2026",
  // First bout 6:30 PM Eastern. Drives the countdown timer.
  scheduledAt: "2026-10-18T18:30:00-04:00",
  doors: "Doors 5:00 PM \u2014 First Bout 6:30 PM",
  venue: "Sky Arena",
  city: "Toronto, Ontario",
};

export const MAIN_EVENT: Bout = {
  weightClass: "Lightweight Championship",
  isTitle: true,
  rounds: 5,
  red: {
    name: "Marcus Reyes",
    nickname: "The Hammer",
    record: "18-2-0",
    country: "Canada",
    corner: "red",
  },
  white: {
    name: "Dmitri Volkov",
    nickname: "Cold Steel",
    record: "16-3-0",
    country: "Canada",
    corner: "white",
  },
};

export const FIGHT_CARD: Bout[] = [
  MAIN_EVENT,
  {
    weightClass: "Welterweight",
    rounds: 3,
    red: {
      name: "Andre Boucher",
      nickname: "Le Loup",
      record: "12-1-0",
      country: "Canada",
      corner: "red",
    },
    white: {
      name: "Tyrone Walsh",
      nickname: "Blackout",
      record: "11-4-0",
      country: "Canada",
      corner: "white",
    },
  },
  {
    weightClass: "Bantamweight",
    rounds: 3,
    red: {
      name: "Kenji Sato",
      nickname: "Razor",
      record: "9-0-0",
      country: "Canada",
      corner: "red",
    },
    white: {
      name: "Liam Doyle",
      nickname: "The Anvil",
      record: "10-2-0",
      country: "Canada",
      corner: "white",
    },
  },
  {
    weightClass: "Featherweight",
    rounds: 3,
    red: {
      name: "Sofia Marchetti",
      nickname: "Wildfire",
      record: "8-1-0",
      country: "Canada",
      corner: "red",
    },
    white: {
      name: "Grace Okoye",
      nickname: "Thunder",
      record: "7-1-0",
      country: "Canada",
      corner: "white",
    },
  },
  {
    weightClass: "Heavyweight",
    rounds: 3,
    red: {
      name: "Viktor Petrov",
      nickname: "The Mountain",
      record: "14-5-0",
      country: "Canada",
      corner: "red",
    },
    white: {
      name: "Samuel Cross",
      nickname: "Demolition",
      record: "13-6-0",
      country: "Canada",
      corner: "white",
    },
  },
];

export const NAV_LINKS = [
  { label: "Fight Card", href: "/#fight-card" },
  { label: "About Us", href: "/about" },
  { label: "Location", href: "/#location" },
  { label: "Merch", href: "/merch" },
  { label: "Newsletter", href: "/#newsletter" },
];
