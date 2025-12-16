import { ArrowLeft } from "lucide-react";
import {  EventWrapper } from "@/components/matchevent";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { MatchEvent, TeamCards } from "@/lib/types";
import { MATCHVIEW_URL } from "@/lib/constants";
import { countCards, formatDay, getFullTimeResult, getHalfTimeResult, getHourMinuteFromISO, getMatchState, sortTimelineDescending } from "@/lib/utils";

export function MatchView() {

    //const { matchSlug } = useParams();
    const { eventId } = useParams<{ eventId: string }>();
  const [match, setMatch] = useState<MatchEvent | null>(null);
  const [teamCards, setTeamCards] = useState<TeamCards>({
    home: { yellow: 0, red: 0 },
    away: { yellow: 0, red: 0 },
  });
  const [fullTimeResult, setFullTimeResult] = useState({ home: 0, away: 0 });
  const [halfTimeResult, setHalfTimeResult] = useState({ home: 0, away: 0 });
  const [matchState, setMatchState] = useState('');
  const [matchDay, setMatchDay] = useState('');
  const navigate = useNavigate();

useEffect(() => {
  if (!eventId) return;

  const fetchMatch = async () => {
    const res = await fetch(MATCHVIEW_URL + eventId);
    const data = await res.json();
    const sortedTimeline = sortTimelineDescending(data.timeline ?? []);
    const dataOrdered = {...data, timeline: sortedTimeline};
    setMatch(dataOrdered);
    setTeamCards(countCards(dataOrdered.timeline ?? []));
    setHalfTimeResult(getHalfTimeResult(dataOrdered.timeline ?? []));
    setFullTimeResult(getFullTimeResult(dataOrdered.timeline ?? []));
    setMatchState(getMatchState(dataOrdered.status));
    setMatchDay(formatDay(new Date(dataOrdered.kickoff_time_utc)).split(",")[1]);
   
  };

  fetchMatch();
}, [eventId]);
 

  return (
    <>
     { match !== null &&
            <div className="font-inter tracking-wide flex flex-col px-2 py-6 gap-6 justify-center justify-self-center w-11/12 sm2:w-4/6 3xl:w-2/4 ">
            <div className="flex flex-col gap-4 py-2 px-6 bg-surface"> 
                    <div className="flex flex-row items-center py-2 gap-6 ">
                        <ArrowLeft onClick={() => {navigate('/')}} className="inline size-8  stroke-white"/>
                        <p className="text-2xl font-light text-white "> {match?.league.name} </p>
                    
                    </div>
                    <div className="flex flex-col items-center gap-10  py-2">
                        <div className=" flex flex-row items-center gap-16 sm2:gap-20 3xl:gap-50 ">
                            <div className="grow flex flex-row gap-x-2 py-6 font-light text-white">
                                <div className="flex flex-col items-center gap-y-3 text-2xl font-medium  text-white">
                                    <img className="h-16 sm2:h-20" src={match?.home_badge ?? ""} alt="" />
                                    <p> {match?.home_team} </p>
                                </div>
                                {teamCards.home.yellow > 0 &&  <span className="bg-yellow-300 self-start px-1 text-xl font-semibold text-surface">{teamCards.home.yellow}</span>}
                                {teamCards.home.red > 0 &&  <span className="bg-red-600 self-start px-1 text-xl font-semibold text-surface">{teamCards.home.red}</span>}
                                
                                
                            </div>
                            <div className="flex flex-col font-light items-center gap-y-3  text-white">
                                <span className="text-lg font-light"> {matchDay.split(" ")[2] } {matchDay.split(" ")[1].toUpperCase() } </span>
                                <span className="text-5xl font-bold">{fullTimeResult.home} - {fullTimeResult.away} </span>
                                <span className="text-lg bg-danger px-3 rounded-[0.5em]"> {matchState} </span>

                            </div>
                            <div className="grow flex flex-row gap-x-2 py-6 font-light text-white">
                                {teamCards.away.yellow > 0 &&  <span className="bg-yellow-300 self-start px-1 text-xl font-semibold text-surface">{teamCards.away.yellow}</span>}
                                {teamCards.away.red > 0 &&  <span className="bg-red-600 self-start px-1 text-xl font-semibold text-surface">{teamCards.away.red}</span>}
                                
                                <div className="flex flex-col items-center gap-y-3 text-2xl font-medium  text-white">
                                    <img className="h-16 sm2:h-20 " src={match?.away_badge ?? ""} alt="" />
                                    <p> {match?.away_team} </p>
                                </div>
                                
                            </div>
                        </div>
                        <div className= ' flex flex-row items-center font-light text-2xl w-full overflow-x-auto  [scrollbar-width:none]   justify-around  text-white/70 mt-2 [&_a]:p-3 [&_a]:border-b-4 [&_a]:border-b-transparent [&_a.active]:border-b-active  [&_a:hover]:text-white  [&_a:hover]:border-b-active '>
                            <a className='' href=""> Details </a>
                            <a href=""> Odds </a>
                            <a href=""> Lineups </a>
                            <a className="text-white  active " href="" > Events </a>
                            <a href=""> Stats </a>
                            <a href=""> Standings </a>
                        
                        </div>
                    </div>

                    
                    
            </div>
            <div className="flex flex-col gap-4 py-4 px-6 bg-surface"> 
                    <div className="flex flex-row items-center py-2 gap-6 ">
                        <p className="text-2xl font-medium text-white "> Events </p>
                    </div>
                    {match.timeline.length > 0 && <div>
                        <div className="flex flex-row items-center justify-between gap-6 py-4">
                            <span className="border-b-2 grow border-base " />
                            <p className="text-white text-2xl font-light"> Fulltime {fullTimeResult.home} - {fullTimeResult.away}</p>
                            <span className="border-b-2 grow border-base " />
                        </div>
                        {/* Event Items */}
                          

                                {
                                    match?.timeline.filter(e => parseInt(e.intTime) > 45).map((event, index) => {
                                        return(
                                            <div key={index} className="flex flex-row items-center gap-6 py-4">
                                                  <div className="flex flex-row items-center justify-end w-2/6 grow gap-x-4">
                                                       {event.strHome === "Yes" && <EventWrapper event={event} home={true}/>}
                                                </div>
                                                <p className={`text-white text-2xl ${event.strTimeline === "Goal" ? "bg-active" : "bg-event"} p-3 w-32 text-center rounded-4xl font-light`}> {event.intTime}' </p>
                                                 <div className="flex flex-row items-center  w-2/6 grow gap-x-4">
                                                 {event.strHome === "No" &&   <EventWrapper event={event} home={false}/> }

                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            

                            <div className="flex flex-row items-center justify-between gap-6 py-4">
                                <span className="border-b-2 grow border-base " />
                                <p className="text-white text-2xl font-light"> Halftime ‘ {halfTimeResult.home} - {halfTimeResult.away} </p>
                                <span className="border-b-2 grow border-base " />
                            </div>

                            {
                                    match?.timeline.filter(e => parseInt(e.intTime) <= 45).map((event, index) => {
                                        return(
                                            <div key={index} className="flex flex-row items-center gap-6 py-4">
                                                  <div className="flex flex-row items-center justify-end w-2/6 grow gap-x-4">
                                                       {event.strHome === "Yes" && <EventWrapper event={event} home={true}/>}
                                                </div>
                                                <p className={`text-white text-2xl ${event.strTimeline === "Goal" ? "bg-active" : "bg-event"} p-3 w-32 text-center rounded-4xl font-light`}> {event.intTime}' </p>
                                                 <div className="flex flex-row items-center  w-2/6 grow gap-x-4">
                                                 {event.strHome === "No" &&   <EventWrapper event={event} home={false}/> }

                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            


                        {/* Event Items */}
                        <div className="flex flex-row items-center justify-between gap-6 py-4">
                            <span className="border-b-2 grow border-base " />
                            <p className="text-white text-2xl font-light"> Kick Off - {getHourMinuteFromISO(match?.kickoff_time_utc ?? "")}</p>
                            <span className="border-b-2 grow border-base " />
                        </div>
                    </div>}
                    

                    
                    
            </div>
            </div>
      }
    </>
  )
}