import { Button } from "@/components/ui/button";
import {  CalendarDays, ChevronLeft, ChevronRight, Heart, Radio } from "lucide-react";
import { DateSelector } from "@/components/dateselector";
import { useEffect, useMemo, useState } from "react";
import type { MatchEvent, Today } from "@/lib/types";
import { formatDay, getDay, getTodayYYYYMMDD, groupMatchesByLeague } from "@/lib/utils";
import { FIXTURES_URL } from "@/lib/constants";
import { FixtureItem } from "@/components/fitureitem";

export function Fixtures() {

  const [matches, setMatches] = useState<MatchEvent[]| null>([]);
  const [today, setToday] = useState<Today>({date : new Date(), date_param : getTodayYYYYMMDD(),isToday: true});

  const handleDateChange = (action : 'next' | 'prev',offset : number = 1) => {
    setToday(getDay(today.date, action, offset));
  }

  useEffect(() => {
  const fetchMatches = async () => {
    const res = await fetch(FIXTURES_URL + today.date_param);
    const data = await res.json();
    setMatches(data);
  };

  fetchMatches();

  const interval = setInterval(fetchMatches, 15000); // 15s

  return () => clearInterval(interval); // cleanup
}, [today]);

const groupedLeagues = useMemo(
  () => groupMatchesByLeague(matches!),
  [matches]
);


console.log("the matches ", matches);

  return (
    <>
    <div className="font-inter tracking-wide flex flex-col px-2 py-6 gap-6 justify-center justify-self-center w-11/12 sm2:w-4/6 3xl:w-2/4 ">
      <p className="text-3xl font-semibold text-white"> Macthes </p>
      <div className="hidden 2xl:flex flex-row  py-4 px-2 justify-between  text-2xl font-semibold  bg-surface text-white">
            <ChevronLeft  onClick={() => {console.log("prev"); handleDateChange('prev')}} className="inline size-8 ms-4"/>
            <span>
              <CalendarDays className="inline size-8 me-3 mb-1 "/>
              {today.isToday ? "Today" : formatDay(today.date)}
            </span>

          <ChevronRight onClick={() => handleDateChange('next')} className="inline size-8 me-4"/>
      </div>
    

    <DateSelector className=" 2xl:hidden"  selectedDate={today.date} setSelectedDate={setToday} />



      <div className="flex flex-row gap-6">
        <Button  className=" bg-active text-black py-6 "> 
          <p className="text-2xl font-light "> All </p>
          <span className="rounded-full bg-canvas text-lg text-active font-semibold px-2 ms-2">
             {matches?.length} 
           </span>
        </Button>

        <Button  className=" bg-surface hover:bg-active hover:text-black text-white py-6 ">
           <Radio className="inline size-6 me-2 mb-1 "/>
          <p className="text-2xl "> Live </p>
          <span className="rounded-full bg-canvas text-lg text-white px-2 ms-2">
             8 
           </span>
        </Button>

        <Button  className=" bg-surface hover:bg-active hover:text-black text-white py-6 "> 
          <Heart className="inline size-6 me-2 mb-1 "/>
          <p className="text-2xl "> Favorites </p>
          <span className="rounded-full bg-canvas text-lg text-white px-2 ms-2">
             8 
           </span>
        </Button>
      </div>

      <div className="flex flex-col gap-10 mt-4 ">
        {
          groupedLeagues.map((league, index) => (
            <section key={index} className="flex flex-col gap-6 py-4 px-6 bg-surface">
                  <div className="flex flex-row items-center justify-between">
                  <p className="text-2xl font-light text-white "> {league.leagueName} </p>
                  <ChevronRight className="inline size-6 ms-2 stroke-white"/>
                </div>
                  {
                    league.matches?.map((match, index) => (
                      
                      <FixtureItem key={index} status={match.status} match={match} />
                    
                    ))
                  }
            </section>
          ))
        } 
        
        
        
      </div>


    </div> 
    
    </>
  )
}   