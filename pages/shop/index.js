import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { AiFillHome } from "react-icons/ai";
import Head from 'next/head'
import { FaShopify } from "react-icons/fa";
import {
  BreadCrumb,
  HorizontalDivider,
  MasonryLayout,
  Sort,
} from "../../components";
import {  getFloorsBy } from "../../services";

function index({ floors }) {
  const myRef = useRef();
  useEffect(() => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);


  const [floorss, setFloors] = useState(floors);
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
 

  const get = async function (){
    const products = await getFloorsBy("name_ASC","",page);
    setFloors(products)
  }

  useEffect(() => {
    get()  
    myRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [page])

  const routes = [
    { title: "Home", href: "/", Iconn: AiFillHome },
    { title: "Shop", href: "/shop", Iconn: FaShopify },
  ];


  return (
    <div className="w-full place-content-center flex flex-col place-items-center">
      <Head>
        <title>OUR SHOP</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Head>
        <meta property="og:title" content="OUR SHOP" key="title" />
      </Head>
      <BreadCrumb routes={routes} />
      {/* header */}
      <div
        className="p-12 w-full text-center relative overflow-hidden bg-no-repeat bg-cover rounded-lg shop_header"
        ref={myRef}
      >
        <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed shop_overlay">
          <div class="flex justify-center items-center h-full">
            <div class="text-white">
              <h2 class="font-black text-6xl mb-4">SHOP</h2>
              <h4 class="font-semibold text-xl mb-6">EXPLORE OUR WIDE RANGE OF PRODUCTS</h4>
            </div>
          </div>
        </div>
      </div>

      <Sort search={search} setSearch={setSearch} setFloors={setFloors} category="false" page={page}/>
      <h1 className="text-xl font-bold uppercase mt-2">OUR PRODUCTS</h1>
      <HorizontalDivider style="mb-4 place-self-center w-full grow" />
      <MasonryLayout page={page} setPage={setPage} 
      count={floorss?.productsConnection?.aggregate?.count} floors={floorss.productsConnection?.edges} />
    </div>
  );
}

export default index;

export async function getStaticProps() {
  const floors = await getFloorsBy("name_ASC","",1);
  return {
    props: { floors },
  };
}
