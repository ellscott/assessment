import React, { useEffect, useState } from 'react'

function SideBar({sendDataToHome}) {
   
  const categories = ["Surveys and Forms","Digital Marketing","Platform News and Updates",
    "Tips and Best Practise","Data Management","Landing Pages","Marketing Analytics","Ecommerce"
    ,"Email Marketing","Digital Marketing","Marketing Automation"]

  const [filter,setFilter] = useState([])

  // change handler , bila user check one of the boxes, dia masukkan kotak yang dia check tu dalam variable filter.
  // kalau unchecked , dia akan remove data drpd filter.
  const filterHandler = (event) => {
    if(event.target.checked) {
      setFilter([...filter,event.target.value])
    } else {
      setFilter(
        filter.filter((filter) => filter !== event.target.value)
      )
    }
  }

  return (
    <aside className="text-4xl text-primary-color source-sans-pro-bold ml-[80px] mt-16">
          Filter
          <div className="text-2xl source-sans-pro border-b border-gray-600 mt-6">
            Topic
          </div>
          {categories.map((data, index) => (
          <div key={index}>
          <input
          type="checkbox"
          className="shadow-md size-4"
          name={data}
          value={data}
          onChange={filterHandler}
          />
         <label className="text-[15px] source-sans-pro ml-3" htmlFor={data}>
         {data}
         </label>
         <br />
        </div>))}
        <div className='hidden' onClick={sendDataToHome(filter)}/>
        </aside>
  )
}

export default SideBar