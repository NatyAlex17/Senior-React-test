import league from '@/assets/Leading Icon.svg';
import { cn } from '@/lib/utils';



export function CornerEvent({cornerRound, home = true}: { cornerRound: number , home?: boolean }) {
    return(
        <div className={cn('flex items-center gap-x-4 ',home ? 'flex-row' : 'flex-row-reverse' )}>
            <span className={cn('text-white text-md sm2:text-xl flex flex-col gap-2 ', home ? 'text-end' : 'text-start')}>
                {cornerRound}{cornerRound === 1 ? 'st' : cornerRound === 2 ? 'nd' : cornerRound ===3 ? 'rd' : 'th' } Corner
            </span>
            <img src={league} className='h-6' alt="" />
            <span className="border-b-2 w-10 border-base " />
        </div>
        
    )
}

export function GoalEvent({strikerFirstName, strikerLastName, home = true}: {strikerFirstName: string, strikerLastName: string, home?: boolean }) {
    return(
        <div className={`flex items-center gap-x-4 ${home ? 'flex-row' : 'flex-row-reverse' } `}>
            <span className={cn('text-white text-md sm2:text-xl flex flex-col gap-2 ', home ? 'text-end' : 'text-start')}>
                {strikerFirstName}
                <span className=' opacity-40'>{strikerLastName}</span>
            </span>
            <img src={league} className='h-6' alt="" />
            <span className="border-b-2 w-10 border-base " />
        </div>
        
    )
}

export function SubstitutionEvent({strikerIn, strikerOut, home = true}: {strikerIn: string, strikerOut: string, home?: boolean }) {
    return(
        <div className={`flex items-center gap-x-4 ${home ? 'flex-row' : 'flex-row-reverse' } `}>
            <span className={cn('text-white text-md sm2:text-xl flex flex-col gap-2 ', home ? 'text-end' : 'text-start')}>
                {strikerIn}
                <span className=' opacity-40'>{strikerOut}</span>
            </span>
            <img src={league} className='h-6' alt="" />
            <span className="border-b-2 w-10 border-base " />
        </div>
        
    )
}

export function CardEvent({striker, card,  home = true}: { striker : string, card: 'RED' | 'YELLOW', home?: boolean }) {
    return(
        <div className={`flex items-center gap-x-4 ${home ? 'flex-row' : 'flex-row-reverse' } `}>
            <span className={cn('text-white text-md sm2:text-xl flex flex-col gap-2 ', home ? 'text-end' : 'text-start')}>
                {striker}
                {card === 'RED' && <span className=' opacity-40'>Sent Off</span> }
            </span>
            <img src={league} className='h-6' alt="" />
            <span className="border-b-2 w-10 border-base " />
        </div>
        
    )
}

export function InjuryEvent({striker,  home = true}: { striker : string, home?: boolean }) {
    return(
        <div className={`flex items-center gap-x-4 ${home ? 'flex-row' : 'flex-row-reverse' } `}>
            <span className={cn('text-white text-md sm2:text-xl flex flex-col gap-2 ', home ? 'text-end' : 'text-start')}>
                {striker}
                 <span className=' opacity-40'>Injured</span> 
            </span>
            <img src={league} className='h-6' alt="" />
            <span className="border-b-2 w-10 border-base " />
        </div>
        
    )
}

export function PenaltyEvent({striker, home = true}: { striker : string, home?: boolean }) {
    return(
        <div className={`flex items-center gap-x-4 ${home ? 'flex-row' : 'flex-row-reverse' } `}>
            <span className={cn('text-white text-md sm2:text-xl flex flex-col gap-2 ', home ? 'text-end' : 'text-start')}>
                {striker}
            </span>
            <img src={league} className='h-6' alt="" />
            <span className="border-b-2 w-10 border-base " />
        </div>
        
    )
}
