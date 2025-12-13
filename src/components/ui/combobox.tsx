
import { Check, ChevronDown } from "lucide-react"
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
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
export function Combobox({className, options,value,setValue,open,setOpen,emptyValue}: {className:string, options: Array<{value: string; label: string,icon?: string}>, value: string; setValue: (val: string) => void; open: boolean; setOpen: (open: boolean) => void, emptyValue?: string; }) {
  
    const noValueText = emptyValue ? emptyValue : "No option found."
  
    return (
       <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          aria-expanded={open}
          className={cn("justify-around text-2xl font-semibold rounded-[1.3em] bg-shadow text-white hover:bg-active hover:text-black", className)}
        >
          {value
            ? <span className='flex flex-row items-center'><img className='h-7 me-2' src={options.find((option) => option.value === value)?.icon} alt="" /> {options.find((option) => option.value === value)?.label} </span>
            : "Select Option..."}
            <ChevronDown  className=" size-6 stroke-3" />

        </Button>
      </PopoverTrigger>
      <PopoverContent className=" p-0 w-40">
        <Command className="bg-surface">
          <CommandList className="bg-surface w-40">
            <CommandEmpty>{noValueText}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem className="text-white"
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {option.label}
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