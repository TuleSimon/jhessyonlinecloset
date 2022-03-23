import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { BigButton, HorizontalDivider } from "..";
import ReactMarkdown from 'react-markdown'
import {Rating} from '@mui/material'
import { useRouter } from "next/router";


const Floor = ({ floor }) => {
  
  const router = useRouter()
  const {productDescription, name,price,rating,slug, images} = floor;
  
  const onClick = () => {
      router.push(`/shop/products/${slug}`)
  }

  return (
    <div data-mdb-ripple="true" data-mdb-ripple-color="light" 
    className="m-2 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer" onClick={onClick}>
      <div
        className=" relative cursor-pointer group w-auto  overflow-hidden 
        transition-all duration-500 ease-in-out relative"
      >  
        <img
          className="rounded-lg transition-all duration-700 ease-in-out group-hover:scale-110 w-full "
          src={images[0].url}
          alt="user-post"
        />
      </div>
      <div className="flex flex-col mt-2 z-50  w-full  place-items-start place-content-start p-2">
      <h1 className="text-lg text-gray-600 text-left font-black">{name?.toUpperCase()}</h1>
        <p className="text-lg font-black my-2"> ₦{price} </p>
        <HorizontalDivider style="mb-2"/>
        <p className="text-sm font-black my-2 text-gray-500 text-left line-clamp-5 text-ellipsis whitespace-pre-line"> 
        <ReactMarkdown>{productDescription?.markdown}</ReactMarkdown> </p>
        <div className="flex flex-col md:flex-row gap-2 place-items-center place-content-between w-full">
        <Rating name="read-only" value={rating} readOnly size="small" />
        <BigButton> <FaWhatsapp/> ORDER ON WHATSAPP </BigButton>
        </div>
      </div>
    </div>
  );
};

export default Floor;
