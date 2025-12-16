import type { DayItem } from "@/lib/types"
import { addDays, cn, formatDay } from "@/lib/utils"
import { CalendarDays } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Button } from "./ui/button"

const RANGE = 14

export function DateSelector({className}: {className?:string}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const todayRef = useRef<HTMLButtonElement>(null)

  const today = new Date()

  const [days, setDays] = useState<DayItem[]>(() =>
    Array.from({ length: RANGE * 2 + 1 }, (_, i) => {
      const date = addDays(today, i - RANGE)
      return {
        date,
        label: formatDay(date),
        isToday: date.toDateString() === today.toDateString(),
      }
    })
  )

  // Scroll back to today
  const scrollToToday = () => {
    todayRef.current?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    })
  }

  // Infinite scroll logic
  const handleScroll = () => {
    const el = containerRef.current
    if (!el) return

    if (el.scrollLeft < 50) {
      // prepend past days
      setDays((prev) => {
        const first = prev[0].date
        const newDays = Array.from({ length: 7 }, (_, i) => {
          const d = addDays(first, -(i + 1))
          return {
            date: d,
            label: formatDay(d),
            isToday: d.toDateString() === today.toDateString(),
          }
        }).reverse()

        el.scrollLeft += 300 // keep visual position
        return [...newDays, ...prev]
      })
    }

    if (el.scrollWidth - el.scrollLeft - el.clientWidth < 50) {
      // append future days
      setDays((prev) => {
        const last = prev[prev.length - 1].date
        const newDays = Array.from({ length: 7 }, (_, i) => {
          const d = addDays(last, i + 1)
          return {
            date: d,
            label: formatDay(d),
            isToday: d.toDateString() === today.toDateString(),
          }
        })
        return [...prev, ...newDays]
      })
    }
  }

  // Auto-center today on mount
  useEffect(() => {
    scrollToToday()
  }, [])

  return (
    <>
    

     <div className={cn("relative w-full bg-surface  text-white",className)}>
      
      <div className="flex flex-row gap-3 overflow-x-auto  [scrollbar-width:none] py-4"
            ref={containerRef}
        onScroll={handleScroll}
        >
        {days.map((day, _) => (
          <Button
            key={day.date.toISOString()}
            ref={day.isToday ? todayRef : null}
            className={`flex flex-col  ${day.isToday ? "bg-event text-active" : "bg-transparent"} hover:bg-active hover:text-black h-auto font-light shrink-0 `}
          >
            <span className="text-2xl font-light">{day.label.split(",")[0]}</span>
            <span className="text-lg">{day.label.split(",")[1]}</span>
          </Button>
        ))}
      </div>
        <div
            className="
            pointer-events-none
            absolute left-0 top-0 h-full w-70
            bg-linear-to-r
            from-surface
            to-transparent
            "
        />

  <div
    className="
      pointer-events-none
      absolute right-0 top-0 h-full w-70
      bg-linear-to-l
      from-surface
      to-transparent
    "
  />

      <div  className=" absolute right-4 top-1/2 -translate-y-1/2 
                      flex items-center justify-center bg-eventDark size-22 rounded-full">
        <CalendarDays  onClick={scrollToToday} className="size-12 stroke-active" />
      </div>
    </div>
    </>
  )
}
