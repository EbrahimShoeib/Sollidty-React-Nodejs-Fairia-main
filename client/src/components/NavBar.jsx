// eslint-disable-next-line no-unused-vars
import React, { useContext, useState,useEffect } from "react";// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom/client'
import {TenderAppContext} from"../context/TenderAppContext"

function NavBar() {

  const {
    connectWallet,
    currentAccount 
  } = useContext(TenderAppContext);


  useEffect( () => {
    console.log(currentAccount)
  }, []);

  return (

    <nav className="bg-slate-50 shadow-lg p-5">
      <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-slate-50	 md:text-3xl animate-bounce">
            <a href="/">Solidity</a>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="block text-sky-400 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  className="hidden"
                  d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
                />
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="d-flex flex-col md:flex-row hidden md:block -mx-2">
        <a
            href="/"
            className="text-sky-500 rounded-xl hover: hover:text-sky-400 hover:font-medium py-2 px-2 md:mx-2"
          >
            Home
          </a>

          <a
            href="/ExploreTender"
            className="text-slate-50 rounded hover: hover:text-sky-400 hover:font-medium py-2 px-2 md:mx-2"
          >
            Explore Tender
          </a>

          <a
            href="/CreateTender"
            className="text-slate-50 rounded hover: hover:text-sky-400 hover:font-medium py-2 px-2 md:mx-2"
          >
            Create Tender
          </a>

          <a
            href="/MyOffers"
            className="text-slate-50 rounded hover: hover:text-sky-400 hover:font-medium py-2 px-2 md:mx-2"
          >
             My Offers
          </a>

          <a
            href="#"
            className="text-slate-50 rounded hover: hover:text-sky-400 hover:font-medium py-2 px-2 md:mx-2"
          >
            About
          </a>

          {connectWallet  ? <button
            onClick={()=>connectWallet()}
            className="text-slate-50 rounded-2xl hover: hover:text-sky-400 hover:font-medium py-2 px-2 md:mx-2"
          style={{border:"solid .5px white"}}
          >
            Connect Wallet
          </button> : null }

        </div>
      </div>
    </nav>
  )
}

export default NavBar
