import world from '@/assets/noto-v1_globe-showing-americas.svg';
import ball from '@/assets/noto_soccer-ball.svg';
import flag from '@/assets/circle-flags_uk.svg';
import league from '@/assets/Leading Icon.svg';

import logo from '@/assets/image 6.png';
import { useState } from 'react';
import { Combobox } from './ui/combobox';
import { IconComboBox } from './ui/iconcombobox';
import { MobileNav } from './ui/mobilenav';
const frameworks = [
  {
    value: "next.js",
    label: "Premier League",
    icon : league
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

const dates = [
  {
    value: "2023",
    label: "2023/24",
  },
  {
    value: "2022",
    label: "2022/23",
  },
  {
    value: "2021",
    label: "2021/22",
  },
  {
    value: "2020",
    label: "2020/21",
  },
  {
    value: "2019",
    label: "2019/20",
  },
]



export function Header(){
    
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("next.js")
    
    const [open1, setOpen1] = useState(false)
    const [value1, setValue1] = useState("next.js")
    
    const [openDate, setOpenDate] = useState(false)
    const [valueDate, setValueDate] = useState("2023")

    return (
    <header className="font-poppins flex flex-row items-center bg-header font-extralight text-2xl p-4 2xl:p-2 ">
        <img src={logo} alt="Logo" className="h-12 2xl:h-24"/>
        <div className= ' hidden 3xl:mx-6 2xl:flex flex-row items-center font-semibold text-2xl 3xl:text-3xl  justify-around  text-white  grow shrink   [&_a]:p-2 [&_a]:border-b-4 [&_a]:border-transparent [&_a:hover]:text-active  [&_a:hover]:border-b-active '>
            <a className='' href=""> Live </a>
            <a href=""> Matches </a>
            <a href=""> Standings </a>
            <a href=""> Teams </a>
            <a href=""> Comparison </a>
            <a href=""> Statistics </a>
            <a href=""> Venues </a>

        </div>
        <div className='flex flex-row items-center justify-around grow shrink'>
            <img src={world} alt="Profile" className="h-12 2xl:h-14 border-10 border-shadow rounded-full"/>
            <img src={ball} alt="Profile" className="h-12 2xl:h-14 border-10 border-shadow rounded-full"/>
            
            
            <Combobox className='w-[12em] h-[2.2em] text-3xl hidden 3xl:flex' options={frameworks} value={value} setValue={setValue} open={open} setOpen={setOpen} />
            
            <IconComboBox className=' text-3xl block 3xl:hidden ' options={frameworks} value={value1} setValue={setValue1} open={open1} setOpen={setOpen1} />
            
            <Combobox className='w-[7em] h-[2.2em] text-2xl 3xl:text-3xl' options={dates} value={valueDate} setValue={setValueDate} open={openDate} setOpen={setOpenDate} />
            
            <img src={flag} alt="Profile" className="h-16 hidden 2xl:block border-10 border-shadow rounded-full"/>

            <MobileNav />
        </div>
        



    </header>
    )
}