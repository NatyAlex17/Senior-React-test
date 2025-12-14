
import { Check } from "lucide-react"
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
export function IconComboBox({className, options,value,setValue,open,setOpen,emptyValue}: {className:string, options: Array<{value: string; label: string,icon?: string}>, value: string; setValue: (val: string) => void; open: boolean; setOpen: (open: boolean) => void, emptyValue?: string;}) {
  
    const noValueText = emptyValue ? emptyValue : "No option found."
  
    return (
       <Popover  open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        
        <img aria-expanded={open} className={cn('h-12 2xl:h-14 border-10 border-shadow rounded-full ',className)} src={options.find((option) => option.value === value)?.icon} alt="" />
            
      </PopoverTrigger>
      <PopoverContent className=" p-0 w-20">
        <Command>
          <CommandList className="bg-surface w-20">
            <CommandEmpty>{noValueText}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem 
                  className="text-white"
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {option.icon && <img className="h-7 me-2" src={option.icon} alt="" />}
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