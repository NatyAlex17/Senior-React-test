import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { MatchEvent, MatchStatus, MatchTimelineItem, Today } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function addDays(date: Date, days: number) {
  const d = new Date(date)
  d.setDate(d.getDate() + days)
  return d
}

export function formatDay(date: Date) {
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  })
}

export function getDateWithOffset(
  baseDate?: string,
  offset: number = 0
): string {
  const date = baseDate
    ? new Date(`${baseDate}T00:00:00Z`)
    : new Date();

  date.setUTCDate(date.getUTCDate() + offset);

  return date.toISOString().split("T")[0];
}

export function getTodayYYYYMMDD(): string {
  return new Date().toISOString().split("T")[0];
}

export function getDay(date : Date,move : 'next' | 'prev',offset : number = 1): Today {
  const newDate= new Date(date);
  if (move === 'next') {
    newDate.setDate(newDate.getDate() + offset)
  } else if (move === 'prev') {
    newDate.setDate(newDate.getDate() - offset)
  }
  return {date_param: newDate.toISOString().split("T")[0], date: newDate, isToday: newDate.toDateString() === new Date().toDateString()};
}


export function getHourMinuteFromISO(isoString: string): string {
  const date = new Date(isoString);

  const h = String(date.getUTCHours()).padStart(2, "0");
  const m = String(date.getUTCMinutes()).padStart(2, "0");

  return `${h}:${m}`;
}

export interface LeagueGroup {
  leagueId: string;
  leagueName: string;
  matches: MatchEvent[];
}

export function groupMatchesByLeague(
  matches: MatchEvent[]
): LeagueGroup[] {
  const map = new Map<string, LeagueGroup>();

  matches.forEach(match => {
    const leagueId = match.league.id;

    if (!map.has(leagueId)) {
      map.set(leagueId, {
        leagueId,
        leagueName: match.league.name,
        matches: [],
      });
    }

    map.get(leagueId)!.matches.push(match);
  });

  return Array.from(map.values());
}

export function getDayDifference(
  date1: Date,
  date2: Date
): number {
    const d1 = new Date(Date.UTC(
    date1.getUTCFullYear(),
    date1.getUTCMonth(),
    date1.getUTCDate()
  ));

  const d2 = new Date(Date.UTC(
    date2.getUTCFullYear(),
    date2.getUTCMonth(),
    date2.getUTCDate()
  ));

  const MS_PER_DAY = 1000 * 60 * 60 * 24;

  return Math.round((d2.getTime() - d1.getTime()) / MS_PER_DAY);
}

export function countCards(timeline: MatchTimelineItem[]) {
  const result = {
    home: {
      yellow: 0,
      red: 0,
    },
    away: {
      yellow: 0,
      red: 0,
    },
  };

  timeline.forEach(item => {
    if (item.strTimeline !== "Card") return;

    const isHome = item.strHome === "Yes";
    const detail = item.strTimelineDetail?.toLowerCase() ?? "";

    if (detail.includes("yellow")) {
      if(isHome)
        result.home.yellow++ ;
      else
       result.away.yellow++;
    }

    if (detail.includes("red")) {
      if(isHome) 
       result.home.red++;
      else
       result.away.red++;
    }
  });

  return result;
}


function getGoalsByMinute(
  timeline: MatchTimelineItem[],
  maxMinute: number
) {
  return timeline.filter(
    e =>
      e.strTimeline === "Goal" &&
      Number(e.intTime) <= maxMinute
  );
}

export function getHalfTimeResult(
  timeline: MatchTimelineItem[]
) {
  let home = 0;
  let away = 0;

  getGoalsByMinute(timeline, 45).forEach(goal => {
    if(goal.strHome === "Yes")
      home++ ;
    else
      away++;
  });

  return { home, away };
}

export function getFullTimeResult(
  timeline: MatchTimelineItem[]
) {
  let home = 0;
  let away = 0;

  timeline
    .filter(e => e.strTimeline === "Goal")
    .forEach(goal => {
      if(goal.strHome === "Yes") 
        home++ ;
      else
        away++;
    });

  return { home, away };
}



function parseMinute(intTime: string): number {
  if (!intTime) return 0;

  if (intTime.includes("+")) {
    const [base, extra] = intTime.split("+");
    return Number(base) + Number(extra);
  }

  return Number(intTime);
}

export function sortTimelineDescending(
  timeline: MatchTimelineItem[]
): MatchTimelineItem[] {
  return [...timeline].sort((a, b) => {
    const timeA = parseMinute(a.intTime);
    const timeB = parseMinute(b.intTime);
    return  timeB - timeA ;
  });
}

export function getMatchState(status: MatchStatus) {
  switch (status) {
    case "NS":
    case "TBD":
      return "Not Started";
    case "1H":
    case "2H":
      return "Live";
    case "HT":
      return "Half Time";
    case "FT":
    case "AET":
    case "PEN":
      return "Finished";
    case "PST":
      return "Postponed";
    case "CANC":
      return "Cancelled";
    case "SUSP":
      return "Suspended";
    default:
      return status;
  }
}
