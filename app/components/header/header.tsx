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
    <header className="relative h-20 px-8 flex justify-between bg-secondary items-center">
      <Link href="/">
        <h1 className="text-4xl">П - <b className="text-rose-500">Ж</b></h1>
      </Link>
      <div className="flex gap-12">
        <button onClick={toggleSearch}>
          <Image src={searchIcon} alt="search post"/>
        </button>
        <button className="text-2xl hover:text-rose-500 transition">Предложить</button>
      </div>
      {isSearch && <SearchInput myRef={searchRef} toggleSearch={toggleSearch}/>}
    </header>
  );
}

function SearchInput({ myRef, toggleSearch }) {
  return (
    <div ref={myRef} className="absolute top-full left-0 py-4  bg-inherit  ">
      <div className="mx-auto w-fit fixed inset-0 top-10 z-10 bg-secondary rounded-[20px] h-fit p-10 ">
          <p className="text-3xl">Поиск по сайту</p>
          <div className="mt-4 flex gap-[20px] items-center">
            <input 
              className="px-5 py-3 w-[700px] text-3xl bg-main rounded-[20px] border-main border-2 outline-none
              focus:border-b-hover placeholder:text-rose-500"   
              type="text" placeholder="..."/>
            <button 
              onClick={toggleSearch} 
              className="w-[46px] h-[46px] bg-main rounded-full text-3xl 
                text-white hover:text-rose-500 active:text-rose-200 transition"
            >X</button>
          </div>
      </div>
    </div>
  )
}
