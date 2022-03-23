import React, { useEffect } from 'react'
import { useState } from 'react';
import { Search, Select } from '..'
import { getFloorsBy, getFloorsByCategory } from '../../services';

function Sort({setFloors,category,slug, search, setSearch, page}) {

    const [sort, setSort] = useState("name_");
    const [order, setOrder] = useState("ASC");

    const get = async function () {
        if(category==="true"){
        const floors = await getFloorsByCategory(sort + order,slug,search,1);
        setFloors(floors);
        }
        else{
            const floors = await getFloorsBy(sort + order,search,1);
            setFloors(floors);
        }
      };

      

  useEffect(() => {
    get();
  }, [sort, order,search]);
    
    
    const options2 = {
        title: "Sort by",
        values: [
          {
            title: "Name",
            value: "name_",
          },
          {
            title: "Date",
            value: "createdAt_",
          },
          {
            title: "Price",
            value: "price_",
          },
        ],
      };
      const options3 = {
        title: "Order",
        values: [
          {
            title: "Asc",
            value: "ASC",
          },
          {
            title: "Desc",
            value: "DESC",
          },
        ],
      };
    


  return (
    <div className="flex flex-col md:flex-row place-content-between m-4 gap-1 w-full px-2">
    <Search search={search} setSearch={setSearch}/>
    <div className="md:flex grid md:mt-0 mt-2 grid-cols-2 md:flex-row place-items-center 
    justify-content-right gap-2 flex-wrap overflow-hidden">
      <Select options={options2} setState={setSort} />
      <Select options={options3} setState={setOrder} />
    </div>
  </div>

  )
}

export default Sort