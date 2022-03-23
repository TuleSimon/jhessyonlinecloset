import React from 'react';
import ReactLoading from "react-loading";

const Loader = () => (
  <div className="text-center text-2xl bg-white text-primary absolute top-0 bottom-0 left-0 right-0 h-full w-full flex flex-col
  place-items-center place-content-center z-50">
     <h1 className='mb-4'>Loading</h1>
     <ReactLoading type="bars" color="#FBB710" height={'10%'} width={'10%'} />
      
  </div>
);

export default Loader;
