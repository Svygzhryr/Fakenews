"use client";
import Image from "next/image";
import searchIcon from "../../assets/search_icon.svg";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const [isSearch, setIsSeacrh] = useState<boolean>(false)
  const searchRef = useRef(null)

  const toggleSearch = () => {
    setIsSeacrh(s => !s)
  }

  const handleClick = (event: Event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      toggleSearch()
    }
  }

  useEffect(()=>{
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])
 
  return (
    <header className="relative h-20 px-8 flex justify-between bg-secondary items-center ">
      <Link href="/">
        <h1 className="text-4xl">П - <b className="text-rose-500">Ж</b></h1>
      </Link>
      <div className="flex gap-6 z-20">
        {isSearch 
          ? 
          <SearchInput myRef={searchRef} toggleSearch={toggleSearch}/> 
          : 
          <button onClick={toggleSearch}>
              <Image src={searchIcon} alt="search post"/>
          </button>
        }
        <button className="text-2xl hover:text-rose-500 transition">Предложить</button>
      </div>
 
    </header>
  );
}

function SearchInput({ myRef, toggleSearch }) {
  return (
    <div ref={myRef} className="bg-inherit ">
      <div className="mx-auto w-fit h-fit ">
          <div className=" flex items-center">
            <Image src={searchIcon} alt="search post"/>
            <input 
              className="ms-4 px-4 py-2 w-[300px] text-xl bg-main rounded-[20px] border-main border-2 outline-none
              focus:border-b-hover "   
              type="text" placeholder="поиск"
            />
            <button 
              onClick={toggleSearch} 
              className="w-[46px] h-[46px]  text-xl 
                text-white hover:text-rose-500 active:text-rose-200 transition"
            >X</button>
          </div>
      </div>
    </div>
  )
}
