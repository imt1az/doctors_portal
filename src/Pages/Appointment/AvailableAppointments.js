import React, { useEffect, useState } from 'react';
import { format } from "date-fns";
import AppointService from './AppointService';
import BookingModal from './BookingModal';
import {useQuery } from 'react-query'
import Loading from '../Shared/Loading';
const AvailableAppointments = ({date}) => {

    const [treatment,setTreatment] = useState(null);
    const formattedDate = format(date,'PP');

    const {data:services,isLoading} = useQuery('available',()=> fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res=> res.json()))

        if(isLoading){
            return <Loading></Loading>
        }

  
    return (
       <section className='my-16'>
           <div className='my-10 md:p-0 p-4  rounded-lg'>
               <h1 className='font-semibold text-xl text-secondary text-center'>AvailableAppointments on  {format(date, 'PP')}</h1>
               <h1 className='font-semibold text-xl text-gray-400 text-center '>Please Select Service</h1>
           </div>

           <div  className='grid md:grid-cols-3 gap-6 md:p-0 p-4 '>
               {
                   services?.map(service => <AppointService
                    key={service._id}
                   service = {service}
                   setTreatment = {setTreatment}
                   >

                   </AppointService>)
               }
               
           </div>
           {
               treatment && <BookingModal  date={date} treatment={treatment} setTreatment={setTreatment} ></BookingModal>
           }
       </section>
    );
};

export default AvailableAppointments;