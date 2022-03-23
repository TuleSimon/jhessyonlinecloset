import { BreadCrumb, HomeCarousel, HorizontalDivider, MasonryLayout } from '../components';
import Head from 'next/head'
import { getFloors } from '../services';
import { AiFillHome } from 'react-icons/ai';

export default function Home({floors}) {
  
   const routes =  [{"title":"Home", "href":"/","Iconn":AiFillHome}]

  return (
    <div className="w-full flex flex-col place-items-center place-content-center">
      <BreadCrumb routes={routes}/>
      <HomeCarousel/>
      <div className="flex flex-col text-center p-2 gap-2 w-full place-items-center place-content-center"> 
      <h1 className="font-bold text-xl  mt-8 text-center"> NEWEST PRODUCTS </h1>
      <HorizontalDivider style="mb-4"/>
      <MasonryLayout page={1} count={floors?.productsConnection?.aggregate?.count} floors={floors?.productsConnection?.edges} />
      </div>
    </div>
  )
}


export async function getStaticProps(){
  const floors = await getFloors;
  return {
    props:{floors}
  }
}