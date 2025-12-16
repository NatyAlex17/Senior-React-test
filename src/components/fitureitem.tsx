import type { MatchEvent, MatchStatus } from "@/lib/types";
import { getHourMinuteFromISO, getMatchState } from "@/lib/utils";
import { EllipsisVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";


export function FixtureItem({status,match}: {status : MatchStatus,match : MatchEvent}) {
 const navigate = useNavigate();
 const matchState = getMatchState(status);

const finished= <div onClick={() => {navigate(`/match/${match.id}`)}} className="hover:cursor-crosshair flex flex-row border-b-4 border-base py-2">
          <span className="w-30 font-light text-2xl border-s-8 tracking-widest border-danger text-danger text-center content-center"> {match.status} </span>
          <div className="grow flex flex-col gap-y-5 py-6 font-light text-white">
              <div className="flex items-center gap-4 px-3 py-1     "> 
                  <img className="h-7" src={match.home_badge ?? ""} alt="" />
                  <p className="text-xl "> {match.home_team} </p>
                   {/* add loop for badge implemntation */}  
                 </div>
              <div className="flex items-center gap-4 px-3 py-1    "> 
                  <img className="h-7" src={match.away_badge ?? ""} alt="" />
                  <p className="text-xl"> {match.away_team} </p>
                   {/* add loop for badge implemntation */}  
                 </div>
          </div>
          <div className="flex text-center items-center gap-x-4 "> 
              <div className="flex flex-col gap-y-7 text-xl font-base  text-white">
                <p > <span className="me-3 opacity-40">[{0}]</span> {match.home_score}</p> 
                <p > <span className="me-3 opacity-40">[{0}]</span> {match.away_score}</p> 
              </div>
              <EllipsisVertical className="size-7 stroke-white" />
          </div>
        </div>
const live = <div onClick={() => {navigate(`/match/${match.id}`)}} className="hover:cursor-crosshair  border-b-4 border-base py-2">
          <div className="flex flex-row border-s-8 border-active text-active bg-linear-[90deg] from-5%  from-active/10 via-surface via-15% to-transparent  items-center justify-between">
            <span className="w-30  font-light text-2xl  tracking-widest underline-offset-14 underline decoration-2  text-center content-center"> {matchState === "Live" ? match.minute + '’' : match.status} </span>
            <div className="grow flex flex-col gap-y-5 py-6 font-light text-white">
                <div className="flex items-center gap-4 px-3 py-1     "> 
                  <img className="h-7" src={match.home_badge ?? ""} alt="" />
                  <p className="text-xl "> {match.home_team} </p>
                   {/* add loop for badge implemntation */}  
                 </div>
              <div className="flex items-center gap-4 px-3 py-1    "> 
                  <img className="h-7" src={match.away_badge ?? ""} alt="" />
                  <p className="text-xl"> {match.away_team} </p>
                   {/* add loop for badge implemntation */}  
                 </div>
            </div>
            <div className="flex text-center items-center gap-x-4 "> 
                <div className="flex flex-col gap-y-7 text-xl font-base  text-white">
                    <p > <span className="me-3 opacity-40">[{0}]</span> {match.home_score}</p> 
                    <p > <span className="me-3 opacity-40">[{0}]</span> {match.away_score}</p> 
                </div>
                <EllipsisVertical className="size-7 stroke-white" />
            </div>
          </div>
        </div>

const upcoming= <div className="border-b-4 border-base py-2">
          <div className="flex flex-row border-s-8 border-base text-white  items-center justify-between">
            <span className="w-30 font-light text-2xl  tracking-widest  text-center content-center"> {getHourMinuteFromISO(match.kickoff_time_utc)} </span>
            <div className="grow flex flex-col gap-y-5 py-6 font-light text-white">
               <div className="flex items-center gap-4 px-3 py-1     "> 
                  <img className="h-7" src={match.home_badge ?? ""} alt="" />
                  <p className="text-xl "> {match.home_team} </p>
                   {/* add loop for badge implemntation */}  
                 </div>
              <div className="flex items-center gap-4 px-3 py-1    "> 
                  <img className="h-7" src={match.away_badge ?? ""} alt="" />
                  <p className="text-xl"> {match.away_team} </p>
                   {/* add loop for badge implemntation */}  
                 </div>
            </div>
            <div className="flex text-center items-center gap-x-4 "> 
                
                <EllipsisVertical className="size-7 stroke-white" />
            </div>
          </div>
        </div>
    return(
        <>
        {(matchState === "Live" || matchState === "Half Time")  && live}
        { (matchState ==="Not Started") && upcoming}
        { (matchState === "Finished") && finished}
        </>
    )
}