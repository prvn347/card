import axios from "axios";
import React, { useEffect, useState } from "react";
import { ApiResponse } from "../types";
import { MdMail as Mail } from "react-icons/md";

export const Card = () => {
  const [card, setCard] = useState<ApiResponse | null>(null);
  useEffect(() => {
    try {
      const fetchCard = async () => {
        const res = await axios.get(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        console.log(res.data);
        setCard(res.data);
      };
      fetchCard();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return <div className=" md:w-1/3  md:mx-auto   py-10  font-kenit   ">
 {card ? card.results.map((user,index) => (
    <div  key={index} className="relative isolate aspect-video bg-white/0 shadow-lg ring-1 ring-black/5  h-64 flex flex-row   py-4 bg-white  border border-slate-200 rounded-lg  w-full backdrop-blur-sm">
    
    <div className="relative px-1 md:p-4  md:w-2/5 shrink-0 overflow-hidden">
    <img
      src={user.picture.large}
      alt="card-image"
      className="h-full w-full rounded-md md:rounded-lg object-cover"
    />
  </div>
  <div className=" p-1 md:p-6">
    <h4 className="mb-2  text-slate-800 text-xl font-semibold">
        {user.name.first} {user.name.last}
    </h4>
    <h2 className="mb-1 text-md text-slate-600 leading-normal font-light">
        {user.gender}
    </h2>
    <h3 className=" text-slate-600 text-sm leading-normal font-light flex items-center">
    <Mail className="w-4 h-4 mr-1" />  {user.email}
    </h3>
    

  <h3 className=" absolute bottom-0 left-50 right-0 p-2 text-slate-600 text-xs leading-normal font-semibold">
  WebTree Global Private Limited
  </h3>
  </div>
  </div>
 )):null} 
</div> 
};
