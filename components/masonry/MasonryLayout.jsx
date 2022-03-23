import React from 'react';
import Masonry from 'react-masonry-css';
import { Floor } from '..';
import { MdHourglassEmpty } from 'react-icons/md';
import { Pagination } from '@mui/material';

const breakpointColumnsObj = {
  default: 4,
  3000: 4,
  2000: 3,
  1200: 2,
  1000: 2,
  500: 1,
};



const MasonryLayout = ({ floors,count, page,setPage }) => {

  const handleChange = (event, value) => {
    setPage(value);
  };

  const Render = () =>{
    if(floors.length >0){
    return <><Masonry className="flex w-full animate-slide-fwd" breakpointCols={breakpointColumnsObj}>
   {floors?.map(({cursor,node}) => <Floor key={cursor} floor={node} className="w-max" />)}
  </Masonry>
  <Pagination count={(count/6)} page={page} onChange={handleChange} color="primary" sx={{m:2}}/>
  </>
  }
  else{
    <h1 className='flex gap-2 text-xl text-primary font-bold'> <MdHourglassEmpty/> SORRY WE ARE EMPTY</h1>
  }
  }

  return  <Render/>

};

export default MasonryLayout;
