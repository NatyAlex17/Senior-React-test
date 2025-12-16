export type DayItem = {
  date: Date
  label: string
  isToday: boolean
}

export type Today={
  date_param: string
  date: Date
  isToday: boolean
}

export type MatchStatus =
  | "TBD"
  | "NS"
  | "1H"
  | "HT"
  | "2H"
  | "ET"
  | "P"
  | "FT"
  | "AET"
  | "PEN"
  | "BT"
  | "SUSP"
  | "INT"
  | "PST"
  | "CANC"
  | "ABD"
  | "AWD"
  | "WO";

  export interface MatchTimelineItem {
  idTimeline: string;
  idEvent: string;

  strTimeline: "Goal" | "Card" | "subst" | string;
  strTimelineDetail: string;

  strHome: "Yes" | "No";
  strEvent: string;

  idAPIfootball: string;

  idPlayer: string;
  strPlayer: string;

  strCountry: string | null;

  idAssist: string;
  strAssist: string;

  intTime: string; // minute as string (e.g. "27")

  idTeam: string;
  strTeam: string;

  strComment: string | null;

  dateEvent: string; // YYYY-MM-DD
  strSeason: string;
}

export interface MatchEvent {
  id: string;

  home_team: string;
  away_team: string;
  
  league: LeagueInfo;
  
  home_badge: string | null;
  away_badge: string | null;

  home_score: number;
  away_score: number;

  status: MatchStatus;

  minute: number | null;

  kickoff_time_utc: string; // ISO string
  minutes_to_kickoff: number | null;

  timeline: MatchTimelineItem[];
}

export interface LeagueInfo {
  id: string;
  name: string;
}

export type TeamCards={ home: { yellow: number; red: number }; away: { yellow: number; red: number } }