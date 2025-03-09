// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState,useContext } from 'react';
import {TenderAppContext} from"../context/TenderAppContext"



function SearchBar() {
  const {
    searchTenders,setTenders
  } = useContext(TenderAppContext);

  const [search, setsearch] = useState("");
  function handelSearchValue(event) {
    setsearch(event.target.value);
    console.log(event.target.value);
  }

  async function onSubmit(){
    const result = await searchTenders(search)
    setTenders(result)
    console.log(result)
  }

  return (
    <>
      <form
      onSubmit={e => e.preventDefault()}
       className="max-w-md mx-auto bg-transparent py-20">

          <label htmlFor="default-search" className="mb-2 text-sm font-medium bg-gray-900 sr-only dark:bg-white">Search</label>
          <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor"  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
              </div>
              <input
              value={search}
              onChange={handelSearchValue}
              type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-sky-400 border border-gray-300 rounded-3xl bg-white focus:ring-blue-300 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
              <button 
              onClick={()=>onSubmit()}
               className="text-black absolute end-2.5 bottom-2.5 bg-sky-600 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 dark:bg-ter dark:hover:bg-blue-600 dark:focus:ring-blue-600">Search</button>
          </div>
      </form>

    </>
  
  )
}

export default SearchBar
