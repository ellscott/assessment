import React, { useEffect, useState, useMemo } from 'react';
import { AiFillFilter, AiOutlineClose } from 'react-icons/ai';
import axios from 'axios';
import Headers from '../components/Headers';
import Footer from '../components/Footer';
import CardPost from '../components/CardPost';
import Pagination from '../components/Pagination';

let pageSize = 3;

export default function Home() {
  // useState hook for clicking open/close sidebar
  const [sideBar, setSideBar] = useState(true);

  const handleSideBar = () => {
    setSideBar(!sideBar);
  };
  //categories that are in data.json
  const categories = [
    'Surveys and Forms',
    'Digital Marketing',
    'Platform News and Updates',
    'Tips and Best Practise',
    'Data Management',
    'Landing Pages',
    'Marketing Analytics',
    'Ecommerce',
    'Email Marketing',
    'Digital Marketing',
    'Marketing Automation',
  ];
  //the data that were fetched using axios
  const [postData, setPostData] = useState([]);
  //the filters useState to handle the filter used to filter data
  const [filter, setFilter] = useState([]);
  //making sure everytime there is an onChange on filter, we set it on filter state as well
  const filterHandler = (event) => {
    if (event.target.checked) {
      setFilter([...filter, event.target.value]);
    } else {
      setFilter(filter.filter((filter) => filter !== event.target.value));
    }
  };
  //fetch data from MirageJS
  const fetchPostData = async () => {
    await axios({
      method: 'GET',
      url: 'api/test',
    })
      .then(async (response) => {
        const res = await response.data;
        setPostData(res);
        console.log('Data has been successfully fetched');
      })
      .catch((error) => {
        console.log(error);
        console.log('Data failed to retrieve');
      });
  };

  //to filter data that we got from fetching as postData
  const filteredData = postData?.posts?.filter((node) =>
    filter.length > 0
      ? filter.every((filter) =>
          node.categories.map((data) => data.name).includes(filter)
        )
      : postData
  );
  //useEffect to make sure we fetch first before we render our page/components
  useEffect(() => {
    fetchPostData();
  }, []);

  // for pagination
  const [currentPage, setCurrentPage] = useState(1);
  //used useMemo to handle pageDisplay Change
  const currentPageData = useMemo(() => {
    if (filteredData != null) {
      const firstPageIndex = (currentPage - 1) * pageSize;
      const lastPageIndex = firstPageIndex + pageSize;
      return filteredData.slice(firstPageIndex, lastPageIndex);
    }
  }, [currentPage, filteredData]);

  return (
    <>
      <Headers />
      <div className="primary-color grid grid-cols-5 min-h-screen">
        <aside className="xl:flex md:flex-col text-4xl text-primary-color source-sans-pro-bold ml-[80px] mt-16">
          <div className="hidden xl:flex md:flex-col text-4xl text-primary-color source-sans-pro-bold">
            Filter
            <div className="text-2xl source-sans-pro border-b border-gray-600 mt-6">
              Topic
            </div>
            {/* .map to loop through array categories */}
            {categories.map((data, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  className="shadow-md size-4"
                  name={data}
                  value={data}
                  onChange={filterHandler}
                />
                <label
                  className="text-[15px] source-sans-pro ml-3"
                  htmlFor={data}
                >
                  {data}
                </label>
                <br />
              </div>
            ))}
          </div>
          <div
            onClick={handleSideBar}
            className="fixed top-8 right-4 block xl:hidden text-primary-color z-10"
          >
            {!sideBar ? (
              <AiOutlineClose size={40} />
            ) : (
              <AiFillFilter size={40} />
            )}
          </div>
          <div
            // hide side bar when not clicked, popped up when clicked
            className={
              !sideBar
                ? 'z-10 fixed left-0 top-0 w-[300px] h-full tertiary-color text-white rounded-r-md ease-in-out duration-500 xl:hidden'
                : 'fixed left-[-100%]'
            }
          >
            <div className="mt-10 text-center">Filter</div>
            <div className="text-center xl:text-left text-2xl source-sans-pro border-b border-gray-600 mt-6">
              Topic
            </div>
            {/* .map but for sidebar rensposive */}
            {categories.map((data, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  className="shadow-md size-4 ml-10"
                  name={data}
                  value={data}
                  onChange={filterHandler}
                />
                <label
                  className="text-[15px] source-sans-pro ml-3"
                  htmlFor={data}
                >
                  {data}
                </label>
                <br />
              </div>
            ))}
          </div>
        </aside>
        <main className="grid col-span-5 md:col-span-5 xl:col-span-4">
          {/* pass data as prop to component card */}
          {currentPageData?.map((post, i) => (
            <CardPost key={i} data={post} />
          ))}
          <Pagination //based on custom usePagination
            className="pagination-bar my-5 justify-center"
            currentPage={currentPage}
            totalCount={filteredData ? filteredData.length : postData.length}
            pageSize={pageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </main>
      </div>
      <Footer />
    </>
  );
}
