/* eslint-disable react/jsx-no-undef */
'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import logoIcon from '@/public/icons/LOGO12.svg'

import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { sidebarLinks } from '@/constants'

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className='sidebar'>
      <nav className='flex flex-col gap4'>
        <Link href="/" className='mb-12 cursor-pointer items-center gap-2'>
          <Image src={logoIcon} 
          width={60}
          height={60} 
          alt="logo" 
          className="size-[160px] max-xl:size-14 items-center " />
          <h1 className="sidebar-logo ">Silwaks</h1>
        </Link>
        {sidebarLinks.map((item)=> {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}`)
          return(
            <Link key={item.label} href={item.route} className={cn ('sidebar-link', {'bg-bank-gradient': isActive})} >
                <div className='relative size-6'>
            <Image 
            src={item.imgURL}
            alt={item.label}
            fill 
            className={cn({'brightness-[3] invert-0': isActive})} />

                </div>
                <p className={cn('sidebar-label', {'!text-white' : isActive})}>
                  {item.label}
                </p>
            </Link>
          )
        })}
      </nav>
    </section>
  )
}

export default Sidebar