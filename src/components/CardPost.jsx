import React from 'react'
import { useNavigate } from 'react-router-dom';

function CardPost(props) {

    const navigate = useNavigate();

    const toDetail = (postID) => {
      navigate(`/detail/${postID}`);
    };

    function convertToDate(dateTimeString) {
        //object declaration using the argument
        const dateObject = new Date(dateTimeString);
      
        // Extract date parts from arguments
        const formattedDate = dateObject.toISOString().split('T')[0];
      
        // Extract hours and minutes from the arguments
        const hours = dateObject.getHours();
        const minutes = dateObject.getMinutes().toString().padStart(2, '0'); // Pad with leading zero
      
        // Combine hours and minutes
        const timeString = `${hours}:${minutes}`;
      
        return {
          formattedDate,
          timeString,
        };
      }
      //get hours and minute and date parts
      const { formattedDate, timeString } = convertToDate(props.data.publishDate);

  return (
    <div className='grid xl:grid-cols-5 mt-5 card-color xl:ml-8 rounded-md xl:mr-4 shadow-md mb-4 xl:max-h-[320px] xl:min-h-[320px] mx-4'>
        <div className='grid my-auto md:col-span-5 xl:col-span-1'>
            <figure className='text-center'>
                <img className='rounded-full mx-auto mt-4 size-[150px]' src={props.data.author.avatar} alt="description" />
                <figcaption className='source-sans-pro-bold text-2xl text-primary-color mt-2 mx-2'>{props.data.author.name}</figcaption>
                <time className='source-sans-pro text-1xl text-primary-color mt-2'>Date posted : {formattedDate}</time > <br />
                <time className='source-sans-pro text-1xl text-primary-color mt-2'>Time posted : {timeString}</time >
            </figure>
        </div>
        <article className='md:col-span-5 xl:col-span-3 xl:my-auto mx-6'>
            <h1 className='source-sans-pro-bold text-primary-color text-2xl mt-4 mr-6 text-center xl:text-left'>{props.data.title}</h1>
            <p className='source-sans-pro text-primary-color text-2xl mt-4 md:text-center lg:text-center xl:text-justify xl:mr-8'>{props.data.summary}</p>
            <div className='my-4 text-center xl:text-left'>
            {/* onClick={() =>
                            deletePatientData(patient.treatment_id)
                          } */}
            <button className='tertiary-color text-white source-sans-pro px-4 py-3 rounded-md text-1xl shadow-xl' onClick={() => toDetail(props.data.id)}>View more</button>
            </div>
        </article>
        <div className='flex flex-col md:col-span-5 xl:col-span-1 xl:my-auto mx-6 mb-4 md:justify-center'>
            {
                props.data.categories.map((data,index) => {
                    return (
                        <div key={index} className='shadow-md source-sans-pro-bold text-[16px] xl:text-[13px] text-primary-color mx-3 xl:mx-0 secondary-color py-2 text-center my-2'>{data.name}</div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default CardPost