import { Header } from "@/components/header";
import { ArrowLeft } from "lucide-react";
import league from '@/assets/Leading Icon.svg';
import { CornerEvent, GoalEvent } from "@/components/matchevent";

export function MatchView() {
  return (
    <>
      <Header />
      <div className="font-inter tracking-wide flex flex-col px-2 py-6 gap-6 justify-center justify-self-center w-2/4 ">
        <div className="flex flex-col gap-4 py-2 px-6 bg-surface"> 
                <div className="flex flex-row items-center py-2 gap-6 ">
                    <ArrowLeft className="inline size-8  stroke-white"/>
                    <p className="text-2xl font-light text-white "> UEFA Champions League </p>
                
                </div>
                <div className="flex flex-col items-center  py-2">
                    <div className=" flex flex-row items-center gap-50 ">
                        <div className="grow flex flex-row gap-x-2 py-6 font-light text-white">
                            <div className="flex flex-col items-center gap-y-3 text-2xl font-medium  text-white">
                                <img className="h-20" src={league} alt="" />
                                <p> Aresenal </p>
                            </div>
                            <span className="bg-active self-start px-1 text-xl font-semibold text-surface">2</span>
                        </div>
                        <div className="flex flex-col font-light items-center gap-y-3  text-white">
                            <span className="text-lg font-light"> 11 AUG </span>
                            <span className="text-5xl font-bold">2 - 1 </span>
                            <span className="text-lg bg-danger px-3 rounded-[0.5em]">Finished</span>

                        </div>
                        <div className="grow flex flex-row gap-x-2 py-6 font-light text-white">
                            <span className="bg-active self-start px-1 text-xl font-semibold text-surface">2</span>
                            <span className="bg-active self-start px-1 text-xl font-semibold text-surface">2</span>
                            <div className="flex flex-col items-center gap-y-3 text-2xl font-medium  text-white">
                                <img className="h-20" src={league} alt="" />
                                <p> Aresenal </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className= ' flex flex-row items-center font-light text-2xl   justify-around  text-white/80 mt-2 [&_a]:px-3 [&_a]:border-b-4 [&_a]:border-transparent [&_a:hover]:text-active  [&_a:hover]:border-b-active '>
                        <a className='' href=""> Live </a>
                        <a href=""> Matches </a>
                        <a href=""> Standings </a>
                        <a href=""> Teams </a>
                        <a href=""> Comparison </a>
                        <a href=""> Statistics </a>
                        <a href=""> Venues </a>

                    </div>
                </div>

                
                
        </div>
        <div className="flex flex-col gap-4 py-4 px-6 bg-surface"> 
                <div className="flex flex-row items-center py-2 gap-6 ">
                    <p className="text-2xl font-medium text-white "> Events </p>
                </div>
                <div>
                    <div className="flex flex-row items-center justify-between gap-6 py-4">
                        <span className="border-b-2 grow border-base " />
                        <p className="text-white text-2xl font-light"> Fulltime 2 - 1</p>
                        <span className="border-b-2 grow border-base " />
                    </div>
                    {/* Event Items */}
                        <div className="flex flex-row items-center gap-6 py-4">
                            <div className="flex flex-row items-center justify-end w-2/6 grow gap-x-4">
                                    <GoalEvent strikerFirstName="Bukayo" strikerLastName=" Saka" home={true}/>
                            </div>
                            <p className="text-white text-2xl bg-event p-3 w-32 text-center rounded-4xl font-light"> 12' </p>
                            <div className="flex flex-row items-center  w-2/6 grow gap-x-4">
                                 <GoalEvent strikerFirstName="Niccolo" strikerLastName=" Saka" home={false}/>
                            </div>
                        </div>

                        <div className="flex flex-row items-center justify-between gap-6 py-4">
                            <span className="border-b-2 grow border-base " />
                            <p className="text-white text-2xl font-light"> Halftime ‘ 1 - 0</p>
                            <span className="border-b-2 grow border-base " />
                        </div>

                        <div className="flex flex-row items-center gap-6 py-4">
                            <div className="flex flex-row items-center justify-end grow w-2/6 gap-x-4">
                                <CornerEvent cornerRound={1} />
                            </div>
                            <p className="bg-active text-2xl  p-3 w-32 text-center rounded-4xl font-light"> 12' </p>
                            <div className="flex flex-row items-center  grow gap-x-4 w-2/6">
                                 <GoalEvent strikerFirstName="Niccolo" strikerLastName=" Saka" home={false}/>
                            </div>
                        </div>

                        


                    {/* Event Items */}
                    <div className="flex flex-row items-center justify-between gap-6 py-4">
                        <span className="border-b-2 grow border-base " />
                        <p className="text-white text-2xl font-light"> Kick Off -13:00</p>
                        <span className="border-b-2 grow border-base " />
                    </div>
                </div>
                

                
                
        </div>
      </div>
      
    </>
  )
}