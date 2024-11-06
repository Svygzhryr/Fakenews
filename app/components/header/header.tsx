"use client";
import {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import searchIcon from "../../assets/search_icon.svg";
import Link from "next/link";

interface SearchInputProps {
  setIsSearch: Dispatch<SetStateAction<boolean>>;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

export function Header() {
  const [isSearch, setIsSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleClick = (event: Event) => {
    const target = event.target as HTMLElement;

    if (target.tagName !== "INPUT") {
      setIsSearch(false);
      // выполняем поиск дальше
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <header className="relative h-20 px-8 flex justify-between bg-secondary items-center ">
      <Link href="/">
        <h1 className="group text-4xl hover:text-rose-500 transition-all">
          П -{" "}
          <b className="text-rose-500 group-hover:text-text transition-all">
            Ж
          </b>
        </h1>
      </Link>
      <div className="flex gap-6 z-20">
        {isSearch ? (
          <SearchInput
            setIsSearch={setIsSearch}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        ) : (
          <button
            className="hover:scale-125 transition-all"
            onClick={() => setIsSearch(true)}
          >
            <Image src={searchIcon} alt="search post" />
          </button>
        )}
        <button className="text-2xl hover:text-rose-500 transition">
          Предложить
        </button>
      </div>
    </header>
  );
}

const SearchInput: FC<SearchInputProps> = ({
  setIsSearch,
  searchValue,
  setSearchValue,
}) => {
  // нужен дебаунс
  function handleInputChange(e: ChangeEvent) {
    const target = e.target as HTMLInputElement;

    setSearchValue(target.value);
  }

  return (
    <div id="search" className="bg-inherit ">
      <div className="mx-auto w-fit h-fit ">
        <div className=" flex items-center">
          <Image
            className="hover:scale-110"
            src={searchIcon}
            alt="search post"
          />
          <input
            className="ms-4 px-4 py-2 w-[300px] text-xl bg-main rounded-[20px] border-main border-2 outline-none
              focus:border-b-hover transition-all"
            type="text"
            placeholder="поиск"
            value={searchValue}
            onChange={handleInputChange}
          />
          <button
            onClick={() => setIsSearch(false)}
            className="w-[46px] h-[46px]  text-xl 
                text-white hover:text-rose-500 hover:scale-125 active:text-rose-200 transition"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};
