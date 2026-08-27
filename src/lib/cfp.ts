import { siteConfig } from "../config/site";

export type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function isCfpOpen(now = Date.now()): boolean {
  if (!siteConfig.cfp.enabled) return false;
  return new Date(siteConfig.cfp.deadlineIso).getTime() > now;
}

export function getTimeLeft(deadline: string, now = Date.now()): TimeLeft {
  const diff = new Date(deadline).getTime() - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}
