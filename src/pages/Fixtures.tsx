import { Button } from "@/components/ui/button";
import { Header } from "../components/header";
import {  CalendarDays, ChevronLeft, ChevronRight, EllipsisVertical, Heart, Radio } from "lucide-react";
import flag from '@/assets/circle-flags_uk.svg';
import league from '@/assets/Leading Icon.svg';
import { DateSelector } from "@/components/dateselector";

export function Fixtures() {
  return (
    <>
    <Header />
    <div className="font-inter tracking-wide flex flex-col px-2 py-6 gap-6 justify-center justify-self-center w-11/12 sm2:w-4/6 3xl:w-2/4 ">
      <p className="text-3xl font-semibold text-white"> Macthes </p>
      <Button className="flex flex-row  py-10 px-12 justify-between  text-2xl font-semibold  bg-surface text-white">
            <ChevronLeft className="inline size-8 ms-4"/>
            <span>
              <CalendarDays className="inline size-8 me-3 mb-1 "/>
              Today
            </span>

          <ChevronRight className="inline size-8 me-4"/>
      </Button>
    

    <DateSelector />



      <div className="flex flex-row gap-6">
        <Button  className=" bg-active text-black py-6 "> 
          <p className="text-2xl font-light "> All </p>
          <span className="rounded-full bg-canvas text-lg text-active font-semibold px-2 ms-2">
             8 
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

      <div className="flex flex-col gap-4 py-4 px-6 bg-surface"> 
        <div className="flex flex-row items-center justify-between">
          <p className="text-3xl font-light text-white "> UEFA Champions League </p>
          <ChevronRight className="inline size-6 ms-2 stroke-white"/>
        </div>
        <div className="flex flex-row border-b-4 border-base py-2">
          <span className="w-30 font-light text-2xl border-s-8 tracking-widest border-danger text-danger text-center content-center"> FT </span>
          <div className="grow flex flex-col gap-y-5 py-6 font-light text-white">
              <div className="flex items-center gap-4 px-3 py-1     "> 
                  <img className="h-7" src={flag} alt="" />
                  <p className="text-xl "> Arsername </p>
                   {/* add loop for badge implemntation */}  
                 </div>
              <div className="flex items-center gap-4 px-3 py-1    "> 
                  <img className="h-7" src={league} alt="" />
                  <p className="text-xl"> Arsername </p>
                   {/* add loop for badge implemntation */}  
                 </div>
          </div>
          <div className="flex text-center items-center gap-x-4 "> 
              <div className="flex flex-col gap-y-7 text-xl font-base  text-white">
                <p > <span className="me-3 opacity-40">[{2}]</span> 2</p> 
                <p > <span className="me-3 opacity-40">[{2}]</span> 2</p> 
              </div>
              <EllipsisVertical className="size-7 stroke-white" />
          </div>
        </div>

        <div className="border-b-4 border-base py-2">
          <div className="flex flex-row border-s-8 border-active text-active bg-linear-[90deg] from-5%  from-active/10 via-surface via-15% to-transparent  items-center justify-between">
            <span className="w-30  font-light text-2xl  tracking-widest underline-offset-14 underline decoration-2  text-center content-center"> 63’ </span>
            <div className="grow flex flex-col gap-y-5 py-6 font-light text-white">
                <div className="flex items-center gap-4 px-3 py-1     "> 
                    <img className="h-7" src={flag} alt="" />
                    <p className="text-xl "> Arsername </p>
                    {/* add loop for badge implemntation */}  
                  </div>
                <div className="flex items-center gap-4 px-3 py-1    "> 
                    <img className="h-7" src={league} alt="" />
                    <p className="text-xl"> Arsername </p>
                    {/* add loop for badge implemntation */}  
                  </div>
            </div>
            <div className="flex text-center items-center gap-x-4 "> 
                <div className="flex flex-col gap-y-7 text-xl font-base  text-white">
                  <p > <span className="me-3 opacity-40">[{2}]</span> 2</p> 
                  <p > <span className="me-3 opacity-40">[{2}]</span> 2</p> 
                </div>
                <EllipsisVertical className="size-7 stroke-white" />
            </div>
          </div>
        </div>

        <div className="border-b-4 border-base py-2">
          <div className="flex flex-row border-s-8 border-base text-white  items-center justify-between">
            <span className="w-30 font-light text-2xl  tracking-widest  text-center content-center"> 23:00 </span>
            <div className="grow flex flex-col gap-y-5 py-6 font-light text-white">
                <div className="flex items-center gap-4 px-3 py-1     "> 
                    <img className="h-7" src={flag} alt="" />
                    <p className="text-xl "> Arsername </p>
                    {/* add loop for badge implemntation */}  
                  </div>
                <div className="flex items-center gap-4 px-3 py-1    "> 
                    <img className="h-7" src={league} alt="" />
                    <p className="text-xl"> Arsername </p>
                    {/* add loop for badge implemntation */}  
                  </div>
            </div>
            <div className="flex text-center items-center gap-x-4 "> 
                
                <EllipsisVertical className="size-7 stroke-white" />
            </div>
          </div>
        </div>
        
        
      </div>


    </div> 
    
    </>
  )
}   