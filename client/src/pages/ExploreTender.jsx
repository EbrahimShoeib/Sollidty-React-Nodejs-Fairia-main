// eslint-disable-next-line no-unused-vars
import React, { useContext ,  useEffect, useState } from "react";// eslint-disable-next-line no-unused-vars
import NavBar from "../components/NavBar";
import Card from "../components/ExploreCard";
import SearchBar from "../components/SearchBar";
import {TenderAppContext} from"../context/TenderAppContext"
// import SingleCard from "../components/SingleTender";

function ExploreTender() {
  const {
    getAllTenders,tenders,setTenders
  } = useContext(TenderAppContext);

  useEffect( () => {
    getAllTenders()
    .then((tenders)=> {
      setTenders(tenders)
      console.log(tenders.le)
    }).catch((error)=> {
      const errorMessage = error.reason ? error.reason : "An error occurred. Please try again later.";

      alert(errorMessage)   
    })
    
  }, []);



  return (
    <div className="text-slate-950 bg-white">
      <div style={{fontSize:"80px"}}>
          <p className="text-slate-950 font-semibold flex justify-center bg-white py-10"> Explore<span className="text-sky-400 px-3">Tender</span> </p>
        </div>
      <SearchBar />
        <div
          className="flex flex-wrap justify-around w-70% m-21"

          style={{ padding: "10px",width:"80%",marginLeft:"10%"}}
        >

        {tenders.map((tender, index) => (
              <Card  key={index} title= {tender.title} description = {tender.description} id = {tender.id} bidBond = {tender.bidBond}/>
        ))}
      </div>
    </div>
  );
}

export default ExploreTender;