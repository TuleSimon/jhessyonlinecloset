import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { HorizontalDivider, Links } from '..'
import {AiFillHome} from 'react-icons/ai'
import {AiFillContacts} from 'react-icons/ai'
import {AiFillInfoCircle} from 'react-icons/ai'
import { FaShopify} from 'react-icons/fa'
import {BiCategory} from 'react-icons/bi'
import {MdPrivacyTip} from 'react-icons/md'
import {HiDocumentDuplicate} from 'react-icons/hi'
import {FaWhatsappSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {AiFillFacebook} from 'react-icons/ai'
import {FaTwitterSquare} from 'react-icons/fa'
import { getWebsiteDetails } from '../../services'


function Sidebar({className}) {

  const [websiteInformation, setInfo] = useState({})
 
  const get = async function(){
    const {websiteInformations} = await getWebsiteDetails;
    setInfo(websiteInformations[0])
  }

  useEffect(() => {
    get()
  
  }, [])
  


  return (
    <div className={`${className} border-r-1 shadow-xl border-primary 
    flex flex-col place-content-between h-full container py-6 place-items-center text-center p-4`}>
        <div className="mb-6">
            <Image src="/img/logo/w.png" alt="Jessica Online Closet"
             width={100}
             height={80}/>
            <p className="font-black text-lg text-primary textShadow font-body">{websiteInformation?.businessName}</p>
        </div>

        <div className="flex flex-col gap-2 place-content-center place-items-center ">
            <Links href={"/"} title="Home" Iconn={AiFillHome}/>
            <Links href={"/shop"} title="Shop" Iconn={FaShopify}/>
            <Links href={"/categories"} title="Categories" Iconn={BiCategory}/>
            <Links href={"/contact"} title="Contact Us" Iconn={AiFillContacts}/>
            <Links href={"/about"} title="About Us" Iconn={AiFillInfoCircle}/>
            <Links href={"/terms-condition"} title="Terms and Conditions" Iconn={HiDocumentDuplicate}/>
            <Links href={"/privacy-policy"} title="Privacy policy" Iconn={MdPrivacyTip}/>
        </div>
        <HorizontalDivider style={"mb-4 mt-2"}/>
        <div className="flex flex-row gap-4 text-primary  place-content-center place-items-center">
            <a href={`https://wa.me/234${websiteInformation?.whatsappNumber}`}>
              <FaWhatsappSquare className="cursor-pointer hover:text-secondary"/>
            </a>
            <a href={`https://facebook.com/${websiteInformation?.facebookhandle}`}>
            <AiFillFacebook  className="cursor-pointer hover:text-secondary"/> </a>
            <a href={`https://instagram.com/${websiteInformation?.instagramHandle}`}>
            <FaInstagramSquare className="cursor-pointer hover:text-secondary"/>
            </a>
            <a href={`https://twitter.com/${websiteInformation?.twitterHandle}`}>
            <FaTwitterSquare className="cursor-pointer hover:text-secondary"/>
            </a>

         </div>
         <div className="flex space-x-2 justify-center">
       
      </div>
    </div>
  )
}

export default Sidebar