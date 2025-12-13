
import { Check, Menu } from "lucide-react"
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils";
import { useState } from "react";
export function MobileNav({className}: {className?:string}) {
  
  const options = ['Matches','Standings','Teams','Comparison','Statistics','Venues'].map((item) => ({value: item.toLowerCase(), label: item}))
  const [open, setOpen] = useState(false)
      const [value, setValue] = useState("")
    
    return (
       <Popover  open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        
        <Menu aria-expanded={open} className={cn('h-10 w-10  text-white hover:text-active  2xl:hidden',className)}/>

      </PopoverTrigger>
      <PopoverContent className=" p-0 w-40">
        <Command>
          <CommandList className="bg-surface w-40 ">
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  className="hover:bg-active text-white"
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {option.label }
                  <Check
                    className={cn(
                      "ml-auto",
                      value === option.value ? "opacity-100 stroke-active" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}